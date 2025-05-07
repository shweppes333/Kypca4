<?php

use App\Http\Controllers\RentalController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('/rentals/user/{user_ID}', [RentalController::class,'index']);
