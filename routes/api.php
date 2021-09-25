<?php

use App\Http\Controllers\{
    AuthController,
    CustomerController,
    ReportController,
    UserController
};

use Illuminate\Support\Facades\Route;

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

Route::post('login', [AuthController::class, 'login']);
Route::post('report', [ReportController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function () {
    // auth related
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('report', [ReportController::class, 'index']);
    Route::post('report', [ReportController::class, 'store']);

    Route::apiResource('user', UserController::class, ['except' => ['show']]);
    Route::apiResource('customer', CustomerController::class, ['except' => ['show']]);
});
