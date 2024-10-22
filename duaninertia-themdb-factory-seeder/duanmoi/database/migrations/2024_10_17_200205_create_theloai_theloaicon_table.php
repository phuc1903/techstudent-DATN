<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTheloaiTheloaiconTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('theloai_theloaicon', function (Blueprint $table) {
            $table->id(); // This creates an unsigned big integer column
            $table->string('ten', 255);
            $table->string('hinh', 255)->nullable();
            $table->unsignedBigInteger('id_theloai')->nullable(); // Set a default value
            $table->timestamps(); // This should create both 'created_at' and 'updated_at' columns
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('theloai_theloaicon');
    }
}