<?php

namespace App\Http\Resources\Lecturer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowKhoahocApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'ten' => $this->ten,
            'gia' =>  $this->gia,
            'giamgia' => $this->giamgia,
            'hinh' => $this->hinh,
            'trangthai' => $this->trangthai,
            'id_chude' => $this->id_chude,
            'id_giangvien' => $this->id_giangvien,
        ];
    }
}