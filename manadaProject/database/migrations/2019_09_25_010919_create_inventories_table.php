<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('inventory');
        Schema::create('inventory', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
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
        Schema::dropIfExists('inventory');
    }
}
