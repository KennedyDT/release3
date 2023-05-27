@extends('layouts.app')
@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Tabla de operarios</h1>
                <a href="{{ url('operators/create') }}" class="btn btn-primary">Registar nuevo operario </a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-light">
                    <thead class="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cargo</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($data_operators as $operator)
                            <tr>
                                <td>{{ $operator->id }}</td>
                                <td>{{ $operator->name }}</td>
                                <td>{{ $operator->last_name }}</td>
                                <td>{{ $operator->post }}</td>
                                <td>


                                    <a href="{{ url('/operators/' . $operator->id . '/edit') }}" class="btn btn-primary">
                                        Editar
                                    </a>

                                    <form action="{{ url('/operators/' . $operator->id) }}" method="post">
                                        <!--llave para javascript-->
                                        @csrf
                                        {{ method_field('DELETE') }}
                                        <input type="submit" onclick="return confirm('¿Quieres borrar?')" value="Borrar "
                                            class="btn btn-danger">

                                    </form>

                                </td>

                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <a href="{{ url('/home') }}" class="btn btn-secondary">Regresar</a>
    </div>
@endsection
