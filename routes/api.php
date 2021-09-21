<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Report;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('sync', function (Request $request) {
    $request->validate([
        'data' => 'required|json',
        'id_pelanggan' => 'required|exists:customers,id'
    ]);

    foreach ($request->data as $data) {
        if ($data['tanggal'] == null) {
            continue;
        }

        Report::updateOrCreate(
            ['tanggal' => $data['tanggal'], 'jenis_kendaraan' => $data['jenis_kendaraan']],
            $data
        );
    }

    return 'Data telah disimpan';
});
