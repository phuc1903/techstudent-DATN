<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Khoahoc;

class KhoahocSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Ensure related records exist
        \App\Models\Chude::factory()->count(5)->create();
        \App\Models\Giangvien::factory()->count(5)->create();

        // Get all Chude IDs
        $chudeIds = \App\Models\Chude::pluck('id')->toArray();

        // Tạo 10 bản ghi khóa học giả lập với id_chude hợp lệ
        Khoahoc::factory()->count(10)->create([
            'id_chude' => $chudeIds[array_rand($chudeIds)],
        ]);
    }
}