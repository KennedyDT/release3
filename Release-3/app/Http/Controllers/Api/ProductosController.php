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
        $productos= productos::all();
        return $productos;
       
    }

   
    public function store(Request $request)
    {
        $producto=new Productos();
        $producto->Nombre=$request->Nombre;
        $producto->Marca=$request->Marca;
        $producto->Descripcion=$request->Descripcion;
        $producto->Cantidad=$request->Cantidad;
        $producto->Precio=$request->Precio;
        $producto->save();
        //$productos=Productos::all();
        //return $producto;

       
    }

    
    public function show($id)
    {
        $producto=productos::find($id);
        return $producto;
       
    }

    
    public function update(Request $request, $id)
    {
        $producto= productos::findOrfail($request->id);
        $producto->Nombre=$request->Nombre;
        $producto->Marca=$request->Marca;
        $producto->Descripcion=$request->Descripcion;
        $producto->Cantidad=$request->Cantidad;
        $producto->Precio=$request->Precio;
        $producto->save();
        return $producto;
    }

   
    public function destroy($id)
    {
       $producto=product::destroy($id);
       return $producto;
    }
}
