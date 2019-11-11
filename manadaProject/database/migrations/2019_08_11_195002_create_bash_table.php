<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBashTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('bash');
        Schema::create('bash', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('name_bash', 45);//numero (nombre_bash)
            $table->string('type_beer', 45);//tipo_cerveza
            $table->integer('capacity');//capacidad
            $table->integer('liters_now');//litros_actual
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bash');
    }
}
