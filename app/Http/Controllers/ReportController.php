<?php

namespace App\Http\Controllers;

use App\Models\Report;
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'data' => 'required|array',
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

        return 'Data telah disimpan';
    }
}
