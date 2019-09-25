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
        Schema::create('deliveries', function (Blueprint $table) {
            $table->bigIncrements('delivery_id')->unsigned();
            $table->timestamp('delivery_date')->default(now());
            $table->integer('state');
            $table->string('type_beer', 45);
            $table->integer('liters');
            $table->unsignedInteger('employee_id');
            // $table->foreign('employee_id')->references('employee_id')->on('employees');
            $table->unsignedInteger('client_id');
            // $table->foreign('client_id')->references('client_id')->on('clients');            
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
