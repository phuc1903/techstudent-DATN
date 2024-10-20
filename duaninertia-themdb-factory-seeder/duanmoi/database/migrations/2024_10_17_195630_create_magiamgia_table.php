<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMagiamgiaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('magiamgia', function (Blueprint $table) {
            $table->id(); 
            $table->string('maso', 11);
            $table->integer('giamggia');
            $table->integer('luotsudung');
            $table->integer('sudunghientai');
            $table->string('trangthai', 225);
            $table->date('ngaybatdau');
            $table->date('ngayketthuc');
            $table->integer('id_giangvien');
            $table->timestamps();
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
        Schema::dropIfExists('magiamgia');
    }
}