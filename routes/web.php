<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function Pest\Laravel\json;

//Route::get('/', function () {
//    return Inertia::render('welcome');
//})->name('home');

//Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('menu', function () {
        return Inertia::render('menu');
    })->name('menu');

    Route::get('cart', [\App\Http\Controllers\CartController::class, 'index'])->name('cart');
//    Route::post('cart', [\App\Http\Controllers\CartController::class, 'store'])->name('cart.store');
//});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
