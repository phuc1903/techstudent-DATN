<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'ten' => $this->ten,
            'theloaicons' => $this->whenLoaded('theloaicons', function () {
                return ApiResource::collection($this->theloaicons);
            }),
            'chudes' => $this->whenLoaded('chudes', function () {
                return ApiResource::collection($this->chudes);
            }),
        ];
    }
}