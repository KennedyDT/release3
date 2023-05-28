<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

*/

//Route::controller(ProductosController::class)-group(function(){
  //   Route::get('productos', 'index');
    // Route::post('productos', 'store');
    // Route::get('productos/{id}', 'show');

     //Route::put('productos/{id}', 'update');
     //Route::delete('productos/{id}', 'destroy');

//});

Route::resource('apiproductos', 'App\Http\Controllers\ApiproductosController');


