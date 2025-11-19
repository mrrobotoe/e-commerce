<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function Pest\Laravel\json;

//Route::get('/', function () {
//    return Inertia::render('welcome');
//})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/admin', [\App\Http\Controllers\AdminController::class, 'index'])->name('admin');

    Route::post('/flavors', [\App\Http\Controllers\FlavorController::class, 'store'])->name('flavors.store');
});

Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('menu', function () {
    $addIns = DB::table('addins')->get();
    $flavors = DB::table('flavors')->get();
    $bases = DB::table('bases')->get();

    return Inertia::render('menu', [
        'addIns' => $addIns,
        'flavors' => $flavors,
        'bases' => $bases,
    ]);
})->name('menu');

Route::get('cart', [\App\Http\Controllers\CartController::class, 'index'])->name('cart');



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
