<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KhoaHocChiTietApi extends JsonResource
{
    protected $theloai;
    protected $baihoc;
    protected $danhgia;
    protected $trinhdo;

    public function __construct($resource, $theloai, $baihoc, $danhgia, $trinhdo)
    {
        parent::__construct($resource);
        $this->theloai = $theloai;
        $this->baihoc = $baihoc;
        $this->danhgia = $danhgia;
        $this->trinhdo = $trinhdo;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Find the corresponding theloai and theloaicon based on the chude
        $theloaiName = 'Default category';
        $theloaiconName = 'Default subcategory';

        foreach ($this->theloai as $theloaiItem) {
            foreach ($theloaiItem['theloaicons'] as $theloaiconItem) {
                foreach ($theloaiconItem['chudes'] as $chudeItem) {
                    if ($chudeItem['ten'] === $this->chude->ten) {
                        $theloaiName = $theloaiItem['ten'];
                        $theloaiconName = $theloaiconItem['ten'];
                        break 3;
                    }
                }
            }
        }

        $baihoc = 'Default topic';
        foreach ($this->baihoc as $baihocItem) {
            if ($baihocItem->id_khoahoc == $this->id) {
                $baihoc = $baihocItem;
                break;
            }
        }

        $danhgia = $this->danhgia->map(function ($danhgiaItem) {
            return [
                'id' => $danhgiaItem->id,
                'id_khoahoc' => $danhgiaItem->id_khoahoc,
                'rating' => $danhgiaItem->danhgia,
                'comment' => $danhgiaItem->binhluan,
                'user' => $danhgiaItem->nguoidung->ho . ' ' . $this->giangvien->nguoidung->ten ?? 'Anonymous',
            ];
        });

   
     

        return [
            'id' => $this->id,
            'ten' => $this->ten,
            'gia' => $this->gia,
            'giamgia' => $this->giamgia,
            'mota' => $this->mota,
            'trangthai' => $this->trangthai,
            'id_giangvien' => $this->id_giangvien,
            'hinh' => $this->hinh,
            'giangvien' => $this->giangvien->nguoidung->ten,
            'chude' => $this->chude->ten ?? 'Default topic',
            'theloai' => $theloaiName,
            'theloaicon' => $theloaiconName,
            'baihocs' => $baihoc,
            'danhgia' => $danhgia,
            'trinhdo' => $this->trinhdo->ten ?? 'Default level',
            'baihocs' => $this->baihocs->map(function ($baihoc) {
                return [
                    'id' => $baihoc->id,
                    'ten' => $baihoc->ten,
                    'video' => $baihoc->video->map(function ($video) {
                        return [
                            'id' => $video->id,
                            'ten' => $video->ten,
                            'url_link' => $video->url_link,
                            'thoiluong' => $video->thoiluong,
                        ];
                    }),
                ];
            }),
            "created_at" => $this->created_at,
        ];
    }
}