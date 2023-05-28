<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApiproductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apiproductos', function (Blueprint $table) {
            $table->id();

            $table->string('Nombre');
            $table->string('Marca');
            $table->string('Descripcion');
            $table->string('Cantidad');
            $table->string('Precio');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apiproductos');
    }
}
