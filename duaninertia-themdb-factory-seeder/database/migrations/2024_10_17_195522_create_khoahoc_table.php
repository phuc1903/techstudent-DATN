<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKhoahocTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khoahoc', function (Blueprint $table) {
            $table->id(); 
            $table->string('ten', 255);
            $table->integer('gia')->nullable();
            $table->integer('giamgia')->nullable();
            $table->text('mota')->nullable();
            $table->string('hinh', 255);
            $table->string('dieukien', 225)->nullable();
            $table->string('muctieu', 225)->nullable();
            $table->enum('trangthai', ['active', 'Notyet', 'Progress', 'Decline', 'Pending'])->default('Notyet');
            $table->integer('id_chude')->nullable();
            $table->integer('id_theloaicon')->nullable();
            $table->integer('id_theloai')->nullable();
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
        Schema::dropIfExists('khoahoc');
    }
}