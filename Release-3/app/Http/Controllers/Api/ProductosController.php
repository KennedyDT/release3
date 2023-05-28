<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Productos;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class ProductosController extends Controller
{

    public function index()
    {
        $productos = Productos::all();
        return $productos;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $producto = new Productos();
        $producto->Nombre = $request->Nombre;
        $producto->Marca = $request->Marca;
        $producto->Descripcion = $request->Descripcion;
        $producto->Cantidad = $request->Cantidad;
        $producto->Precio = $request->Precio;
        $producto->save();
        $productos = Productos::all();
        return $productos;

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
        $producto = Productos::find($id);
        $producto->delete();
        $productos = Productos::all();
        return $productos;
    }
}
