<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Magiamgiakhoahoc extends Model
{
    use HasFactory;
    protected $table = 'magiamgiakhoahoc';
    protected $fillable = ['id_khoahoc', 'id_magiamgia'];
    
}