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
            $table->bigIncrements('id')->unsigned();
            $table->timestamp('delivery_date')->default(now());
            $table->integer('state');
            $table->string('type_beer', 45);
            $table->integer('liters');
            $table->bigInteger('employee_id')->unsigned()->index();;
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->bigInteger('client_id')->unsigned()->index();;
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');            
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
