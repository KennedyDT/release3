@extends('layouts.app')
@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h1>Bienvenido </h1>

                <div class="d-grid gap-2">

                    <a href="{{ url('productos') }}" class="btn btn-primary btn-lg">Productos</a>
                    <a href="{{ url('services') }}" class="btn btn-primary btn-lg">Servicios</a>

                    @if(Auth::user()->hasRole('Admin'))
                        <a href="{{ url('operators') }}" class="btn btn-primary btn-lg">Operarios</a>
                        <a href="{{ url('usuarios') }}" class="btn btn-primary btn-lg">Usuarios</a>
                    @endif
                    <a href="{{ url('api') }}" class="btn btn-primary btn-lg">Api Usuarios</a>

                    <a href="{{ url('pdf') }}" class="btn btn-danger">Generar listado de productos(pdf)</a>
                    <a href="{{ url('pdf_servicios') }}" class="btn btn-danger">Generar listado de servicios(pdf)</a>
                    
                    
                </div>
            </div>
        </div>
    </div>
@endsection
