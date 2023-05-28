<?php

namespace Database\Seeders;

use App\Models\apiproductos;
use Illuminate\Database\Seeder;

class apiproductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        apiproductos::create([
            'Nombre' => 'api Aceite',
            'Marca' => 'Motul',
            'Descripcion' => 'aceite para motos 4t 20w50',
            'Cantidad' => '1',
            'Precio' => ' 40000 '
        ]);

        apiproductos::create([
            'Nombre' => 'api Direccional Izquierda',
            'Marca' => 'Yamaha RX 115',
            'Descripcion' => 'luces direccionales',
            'Cantidad' => '2',
            'Precio' => '70000'
        ]);

        apiproductos::create([
            'Nombre' => 'api Kit De Arrastre Casarella Akt',
            'Marca' => 'Casarella',
            'Descripcion' => 'kit de arrastre completo',
            'Cantidad' => '2',
            'Precio' => '300000'
        ]);

    }
}
