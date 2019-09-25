<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheckInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_ins', function (Blueprint $table) {
            $table->bigIncrements('check_in_id')->unsigned();
            $table->timestamp('check_in_date')->default(now());
            $table->unsignedInteger('input_id');
            $table->integer('total_quantity');
            // $table->foreign('input_id')->references('input_id')->on('inputs'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('check_ins');
    }
}
