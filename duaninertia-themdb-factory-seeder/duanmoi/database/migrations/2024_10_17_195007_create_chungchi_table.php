<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChungchiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chungchi', function (Blueprint $table) {
            $table->id(); 
            $table->string('ten', 255);
            $table->string('phathanhboi', 225);
            $table->date('hieuluc');
            $table->string('giaychungnhan', 225);
            $table->integer('id_khoahoc');
            $table->integer('id_nguoidung');
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
        Schema::dropIfExists('chungchi');
    }
}