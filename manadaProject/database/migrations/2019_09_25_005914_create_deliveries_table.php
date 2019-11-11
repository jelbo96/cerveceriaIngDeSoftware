<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('deliveries');
        Schema::create('deliveries', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned(); //id
            $table->timestamp('delivery_date')->default(now()); //fecha
            $table->string('type_beer', 45); //tipo cerveza
            $table->integer('liters'); //litros
            $table->integer('folio');//folio
            $table->string('additional_info', 200); //info adicional
            $table->integer('package');//envasado, 1=botella o 2=barril
            
            $table->bigInteger('client_id')->unsigned()->index(); //cliente (foreign)
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');    

            $table->bigInteger('bash_id')->unsigned()->index();//bash (foreign)
            $table->foreign('bash_id')->references('id')->on('bash')->onDelete('cascade');    
            //$table->integer('state');
            //$table->bigInteger('employee_id')->unsigned()->index();;
            //$table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deliveries');
    }
}
