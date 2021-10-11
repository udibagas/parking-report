<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Report;
use App\Models\Tarif;
use App\Models\Terparkir;
use App\Models\User;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Report::selectRaw('
            `group`,
            SUM(jumlah_kendaraan) AS jumlah_kendaraan,
            SUM(pendapatan) AS pendapatan
        ')->when($request->user()->isUser(), function ($q) {
            $q->where('customer_id', auth()->user()->customer_id);
        })->when($request->date, function ($q) use ($request) {
            $q->where('tanggal', $request->date);
        })->when($request->month, function ($q) use ($request) {
            $q->whereMonth('tanggal', $request->month)
                ->whereYear('tanggal', $request->year);
        })->groupBy('group')->get()->map(function ($item) use ($request) {
            $item->detail = Report::selectRaw('
                SUM(jumlah_kendaraan) AS jumlah_kendaraan,
                SUM(pendapatan) AS pendapatan,
                jenis_kendaraan
            ')
                ->where('group', $item->group)
                ->when($request->user()->isUser(), function ($q) {
                    $q->where('customer_id', auth()->user()->customer_id);
                })->when($request->date, function ($q) use ($request) {
                    $q->where('tanggal', $request->date);
                })->when($request->month, function ($q) use ($request) {
                    $q->whereMonth('tanggal', $request->month)
                        ->whereYear('tanggal', $request->year);
                })
                ->groupBy('jenis_kendaraan')->get();

            return $item;
        });
    }

    public function terparkir(Request $request)
    {
        return Terparkir::selectRaw(' `group`, SUM(jumlah) AS jumlah ')
            ->when($request->user()->isUser(), function ($q) {
                $q->where('customer_id', auth()->user()->customer_id);
            })
            ->where('tanggal', date('Y-m-d'))
            ->groupBy('group')->get()->map(function ($item) use ($request) {
                $item->detail = Terparkir::selectRaw('SUM(jumlah) AS jumlah, jenis_kendaraan')
                    ->where('group', $item->group)
                    ->when($request->user()->isUser(), function ($q) {
                        $q->where('customer_id', auth()->user()->customer_id);
                    })->where('tanggal', date('Y-m-d'))
                    ->groupBy('jenis_kendaraan')->get();

                return $item;
            });
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'data' => 'sometimes|array',
            'terparkir' => 'sometimes|array',
            'tarif' => 'sometimes|array',
            'customer_id' => 'required|exists:customers,id'
        ]);

        foreach ($request->data as $data) {
            if ($data['tanggal'] == null) {
                continue;
            }

            // simpan data untuk customer terkait
            Report::updateOrCreate(
                [
                    'tanggal' => $data['tanggal'],
                    'jenis_kendaraan' => $data['jenis_kendaraan'],
                    'group' => $data['group'],
                    'customer_id' => $request->customer_id
                ],
                array_merge($data, ['customer_id' => $request->customer_id])
            );
        }

        foreach ($request->terparkir as $data) {
            Terparkir::updateOrCreate(
                [
                    'tanggal' => $data['tanggal'],
                    'jenis_kendaraan' => $data['jenis_kendaraan'],
                    'group' => $data['group'] ?? 'SEMUA',
                    'customer_id' => $request->customer_id
                ],
                array_merge($data, ['customer_id' => $request->customer_id])
            );
        }

        // sekalian return tarif yg baru untuk update di sisi client
        foreach ($request->tarif as $tarif) {
            // create data baru jka blm ada
            $tarifCloud = Tarif::firstOrCreate(
                [
                    'nama' => $tarif['nama'],
                    'group' => $tarif['group'],
                    'customer_id' => $request->customer_id
                ],
                array_merge($tarif, ['customer_id' => $request->customer_id])
            );

            // kalau updated_at data yg dikirim lebih besar dari last_sync berarti sudah diupdate dari server lokal
            // maka update yg di cloud
            if (strtotime($tarif['updated_at']) > strtotime($tarifCloud->last_sync)) {
                $tarifCloud->update(array_merge($tarif, ['last_sync' => now()]));
            }
        }

        return [
            'message' => 'Data telah disimpan',
            'tarif' => Tarif::where('customer_id', $request->customer_id)->get()
        ];
    }

    public function summary()
    {
        return [
            'customer' => Customer::count(),
            'user' => User::where('role', 0)->count()
        ];
    }
}
