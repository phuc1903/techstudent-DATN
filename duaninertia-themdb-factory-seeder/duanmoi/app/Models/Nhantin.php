<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nhantin extends Model
{
    use HasFactory;
    protected $table = "nhantin";
    protected $fillable = ['noidung', 'id_nguoidung', 'id_giangvien'];
}