<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;



class ProductosController extends Controller
{
    public function index()
    {
        $productos=Productos::all();
        return $productos;
    }

    public function create()
    {
        //
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
        $productos=Productos::all();
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
        $producto=Productos::find($id);
        $producto->delete();
        $productos=Productos::all();
        return $productos;
    }















    /* prueba para la api
    public function __construct()
    {

        $this->middleware('can:admin.productos.create')->only('create', 'store');
        $this->middleware('can:admin.productos.edit')->only('edit', 'update');
        $this->middleware('can:admin.productos.destroy')->only('destroy');
    }

    public function index(Request $request)
    {
        $busqueda=$request->busqueda;

        $producto = Productos::where('Marca','LIKE','%'.$busqueda.'%')
                 ->orWhere('Descripcion','LIKE','%'.$busqueda.'%')
                        ->latest('id')
                        ->paginate();

        $datos['data_productos'] = $producto;

         return view('productos.index',$datos);
    }



    public function pdf()
    {
        $producto = Productos::paginate();

        $datos['data_productos'] = $producto;

        $pdf = PDF::loadView('productos.pdf',$datos);
        //$pdf->loadHTML('productos.pdf');


        return $pdf->download();


        //  return view('productos.pdf',$datos);
    }





    public function create()
    {
        //
        return view('productos.create');
    }


    public function store(Request $request)
    {
        //
        $data_productos = request() -> except('_token');
        Productos::insert($data_productos);

        //return response()->json($data_operators);
        return redirect('productos')->with('mensaje', 'Producto registrado con exito');
    }


    public function show(Productos $productos)
    {
        //
    }


    public function edit($id)
    {
        //
        $producto = Productos::findOrFail($id);
        return view('productos.edit', compact('producto'));

    }

    public function update(Request $request,$id)
    {
        //
        $data_productos = request() -> except(['_token','_method']);
        Productos::where('id', '=', $id)-> update($data_productos);

        $productos = Productos::findOrFail($id);
        return view('productos.edit', compact('productos'));
    }

    public function destroy($id)
    {
        //
        Productos::destroy($id);
        return redirect('productos')->with('mensaje','Producto borrado');
    }
    public function grafica()
    {
        $producto = Productos::paginate();

        $datos['data_productos'] = $producto;


        return view('productos.grafica',$datos) ;


    }
    */



}

