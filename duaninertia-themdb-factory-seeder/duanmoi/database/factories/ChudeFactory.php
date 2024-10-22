<?php

namespace Database\Factories;

use App\Models\Chude;
use App\Models\Theloaicon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChudeFactory extends Factory
{
    protected $model = Chude::class;

    public function definition()
    {
        return [
            'ten' => $this->faker->sentence(3), // Tên chủ đề giả lập
            'mota' => $this->faker->sentence(10), // Mô tả giả lập
            'id_theloaicon' => Theloaicon::inRandomOrder()->first()->id, // Lấy id_theloaicon từ model Theloaicon
        ];
    }
}