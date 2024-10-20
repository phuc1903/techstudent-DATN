<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ruttien extends Model
{
    use HasFactory;
    protected $table = "ruttien";
    protected $fillable = ['tong', 'id_giangvien', 'id_thenganhang'];
}