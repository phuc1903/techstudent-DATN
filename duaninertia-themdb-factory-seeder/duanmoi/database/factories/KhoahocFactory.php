<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Chude;
use App\Models\Giangvien;
use App\Models\Khoahoc;
use App\Models\Theloai;

class KhoahocFactory extends Factory
{
    protected $model = Khoahoc::class;

    public function definition()
    {
        $theloaicon = Theloai::whereNotNull('id_theloai')->inRandomOrder()->first();
        $giangvien = Giangvien::inRandomOrder()->first();
        $chude = $theloaicon ? Chude::where('id_theloaicon', $theloaicon->id)->inRandomOrder()->first() : null;

        if (!$theloaicon || !$giangvien || !$chude) {
            throw new \Exception('Required related models not found');
        }

        return [
            'ten' => $this->faker->sentence(3), // Tạo tên khóa học ngẫu nhiên
            'gia' => $this->faker->numberBetween(100000, 1000000), // Giá khóa học ngẫu nhiên
            'giamgia' => $this->faker->numberBetween(0, 100), // Giảm giá ngẫu nhiên từ 0 đến 100
            'mota' => $this->faker->paragraph(), // Mô tả khóa học ngẫu nhiên
            'hinh' => $this->faker->imageUrl(640, 480, 'education'), // Hình ảnh ngẫu nhiên
            'dieukien' => $this->faker->sentence(5), // Điều kiện khóa học ngẫu nhiên
            'muctieu' => $this->faker->sentence(5), // Mục tiêu khóa học ngẫu nhiên
            'trangthai' => $this->faker->randomElement(['active', 'Notyet', 'Progress', 'Decline', 'Pending']),
            'id_chude' => $chude->id,
            'id_theloaicon' => $theloaicon->id,
            'id_theloai' => $theloaicon->id_theloai, // Use a single ID instead of an array
            'id_giangvien' => $giangvien->id,
            'created_at' => now(), // Thời gian tạo giả lập
            'updated_at' => now(), // Thời gian cập nhật giả lập
        ];
    }
}