<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductosController;




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::controller(ProductosController::class)-group(function(){
  //   Route::get('productos', 'index');
    // Route::post('productos', 'store');
    // Route::get('productos/{id}', 'show');
     
     //Route::put('productos/{id}', 'update');
     //Route::delete('productos/{id}', 'destroy');

//});


Route::delete('/Productos/{id}', [ProductosController::class, 'destroy'])->name('Productos.destroy');
Route::put('/Productos/{id}', [ProductosController::class, 'update'])->name('Productos.update');
Route::get('/Productos/{id}', [ProductosController::class, 'show'])->name('Productos.create');
Route::post('/Productos', [ProductosController::class, 'store'])->name('Productos.store');
Route::get('/Productos', [ProductosController::class, 'index'])->name('Productos.index');

Route::resource('productos', 'App\Http\Controllers\ProductosController');
