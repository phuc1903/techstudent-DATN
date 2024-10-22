<?php

namespace Database\Factories;

use App\Models\Chungchi;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChungchiFactory extends Factory
{
    protected $model = Chungchi::class;

    public function definition()
    {
        return [
            'ten' => $this->faker->sentence(3), // Tên chứng chỉ giả lập
            'phathanhboi' => $this->faker->company, // Phát hành bởi công ty giả lập
            'hieuluc' => $this->faker->date, // Hiệu lực giả lập
            'giaychungnhan' => $this->faker->uuid, // Giấy chứng nhận giả lập
            'id_khoahoc' => $this->faker->numberBetween(1, 10), // Giả sử id_khoahoc từ 1 đến 10
            'id_nguoidung' => $this->faker->numberBetween(1, 10), // Giả sử id_nguoidung từ 1 đến 10
        ];
    }
}