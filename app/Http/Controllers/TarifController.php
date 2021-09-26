<?php

namespace App\Http\Controllers;

use App\Http\Requests\TarifRequest;
use App\Models\Tarif;
use Illuminate\Http\Request;

class TarifController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Tarif::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tarif::where('customer_id', auth()->user()->customer_id)
            ->orderBy('shortcut_key', 'asc')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TarifRequest $request)
    {
        $data = Tarif::create($request->all());
        return ['message' => 'Data telah disimpan', 'data' => $data];
    }

    /**
     * Update the specified resource in storage.>al
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tarif  $tarif
     * @return \Illuminate\Http\Response
     */
    public function update(TarifRequest $request, Tarif $tarif)
    {
        $tarif->update($request->all());
        return ['message' => 'Data telah disimpan', 'data' => $tarif];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tarif  $tarif
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tarif $tarif)
    {
        $tarif->delete();
    }
}
