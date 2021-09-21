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
    public function index()
    {
        // TODO: tampilkan report harian, bulanan, keseluruhan, table by bulan, table by hari
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
            'data' => 'required|json',
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
                    'customer_id' => $request->customer_id
                ],
                array_merge($data, ['customer_id' => $request->customer_id])
            );
        }

        return 'Data telah disimpan';
    }
}
