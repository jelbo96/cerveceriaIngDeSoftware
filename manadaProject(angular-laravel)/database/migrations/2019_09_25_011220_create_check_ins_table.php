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
        Schema::dropIfExists('check_ins');
        Schema::create('check_ins', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->timestamp('check_in_date')->default(now());
            $table->integer('total_quantity');
            $table->bigInteger('input_id')->unsigned()->index();
            $table->foreign('input_id')->references('id')->on('inputs')->onDelete('cascade'); 
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
