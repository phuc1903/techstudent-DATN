<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiangVien extends Model
{   protected $table = 'giangvien';
    protected $fillable = [
        'id',
        'ten',
        'email',
        'password',
        'hinh',
        'id_nguoidung'
        
    ];
    use HasFactory;
    public function nguoidung(){
        return $this->belongsTo(NguoiDung::class,'id_nguoidung');
    }
     public function chude()
    {
        return $this->belongsTo(ChuDe::class);
    }
}