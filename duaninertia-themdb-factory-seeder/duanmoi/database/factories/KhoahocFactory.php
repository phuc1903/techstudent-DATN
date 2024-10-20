<?php

namespace Database\Factories;

use App\Models\Khoahoc;
use Illuminate\Database\Eloquent\Factories\Factory;

class KhoahocFactory extends Factory
{
    protected $model = Khoahoc::class;

    public function definition()
    {
        return [
            'ten' => $this->faker->sentence(3), // Tạo tên khóa học ngẫu nhiên
            'gia' => $this->faker->numberBetween(100000, 1000000), // Giá khóa học ngẫu nhiên
            'giamgia' => $this->faker->numberBetween(0, 100), // Giảm giá ngẫu nhiên từ 0 đến 100
            'mota' => $this->faker->paragraph(), // Mô tả khóa học ngẫu nhiên
            'hinh' => $this->faker->imageUrl(640, 480, 'education'), // Hình ảnh ngẫu nhiên
            'dieukien' => $this->faker->sentence(5), // Điều kiện khóa học ngẫu nhiên
            'muctieu' => $this->faker->sentence(5), // Mục tiêu khóa học ngẫu nhiên
            'trangthai' => $this->faker->randomElement(['active', 'Notyet', 'Progress', 'Decline', 'Pending']), // Trạng thái ngẫu nhiên
            'id_chude' => $this->faker->numberBetween(1, 10), // Giả sử id_chude từ 1 đến 10
            'id_theloaicon' => $this->faker->numberBetween(1, 10), // Giả sử id_theloaicon từ 1 đến 10
            'id_theloai' => $this->faker->numberBetween(1, 10), // Giả sử id_theloai từ 1 đến 10
            'id_giangvien' => $this->faker->numberBetween(1, 10), // Giả sử id_giangvien từ 1 đến 10
            'created_at' => now(), // Thời gian tạo giả lập
            'updated_at' => now(), // Thời gian cập nhật giả lập
        ];
    }
}