<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('providers');
        Schema::create('providers', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('company_name', 45);
            $table->string('contact_name', 45);
            $table->string('contact_number', 45);
            $table->string('address');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('providers');
    }
}
