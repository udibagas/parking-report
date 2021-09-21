<?php

use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
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

Route::post('report', [ReportController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('report', [ReportController::class, 'index']);
    Route::apiResource('user', UserController::class, ['except' => ['show']]);
});
