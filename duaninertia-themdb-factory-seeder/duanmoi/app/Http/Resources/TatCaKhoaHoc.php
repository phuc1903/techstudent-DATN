<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TatCaKhoaHoc extends JsonResource
{
    protected $dangky;
    protected $baihocs;

    public function __construct($resource, $dangky = null, $baihocs = null)
    {
        parent::__construct($resource);
        $this->dangky = collect($dangky); // Ensure $dangky is a collection
        $this->baihocs = collect($baihocs); // Ensure $baihocs is a collection
    }

    /** 
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        // Filter dangky to include only those that match the course ID
        $filteredDangky = $this->dangky->filter(function ($registration) {
            return $registration->id_khoahoc == $this->id;
        });

        return [
            "id" => $this->id,
            "ten" => $this->ten,
            "hinh" => $this->hinh,
            "gia" => $this->gia,
            "giamgia" => $this->giamgia,
            "chude" => $this->chude->ten,
            "giangvien" => $this->giangvien->ten,
            "dangky" => $filteredDangky->count(),
            "baihocs" => $this-> baihocs->count(),
        ];
    }
}