<?php

namespace App\Http\Controllers;

use App\Models\apiproductos;
use Illuminate\Http\Request;

class ApiproductosController extends Controller
{
    public function index()
    {
        $apiproductos = apiproductos::all();
        return $apiproductos;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $apiproducto = new apiproductos();
        $apiproducto->Nombre = $request->Nombre;
        $apiproducto->Marca = $request->Marca;
        $apiproducto->Descripcion = $request->Descripcion;
        $apiproducto->Cantidad = $request->Cantidad;
        $apiproducto->Precio = $request->Precio;
        $apiproducto->save();
        $apiproductos = apiproductos::all();
        return $apiproductos;

    }

    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        $apiproducto = apiproductos::find($id);
        $apiproducto->delete();
        $apiproductos = apiproductos::all();
        return $apiproductos;
    }
}
