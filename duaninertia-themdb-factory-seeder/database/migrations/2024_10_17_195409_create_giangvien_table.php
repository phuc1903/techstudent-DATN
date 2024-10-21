<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiangvienTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('giangvien', function (Blueprint $table) {
            $table->id();
            $table->string('ten')->nullable();
            $table->string('email')->nullable()->unique();
            $table->string('dienthoai', 20)->nullable(); // Increase length to 20 characters
            $table->unsignedBigInteger('id_nguoidung');
         
            $table->text('tieusu')->nullable();
            $table->string('hinh')->nullable();
            $table->decimal('tongdoanhthu', 15, 2)->default(0);
            $table->decimal('sodukhadung', 15, 2)->default(0);  
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
        Schema::dropIfExists('giangvien');
    }
}