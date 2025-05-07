<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;

Route::get('/', function () {
    return view('welcome');
});


Route::get("/properties", [PropertyController::class, 'index']);
Route::get('/one/{id}', [PropertyController::class,'show']);
Route::delete('/properties/{id}', [PropertyController::class,'destroy']);