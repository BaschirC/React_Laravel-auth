<?php


use App\Http\Middleware\InjectDebugBarData;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware(['auth:api'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', InjectDebugBarData::class]], function () {
});
