<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Chungchi;
use App\Models\Khoahoc;

class ChungchiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Ensure there are Khoahoc records to reference
        $khoahocIds = Khoahoc::pluck('id')->toArray();

        // Create Chungchi records
        $faker = \Faker\Factory::create();

        Chungchi::factory()->count(10)->create([
            'id_khoahoc' => function () use ($khoahocIds, $faker) {
                return $faker->randomElement($khoahocIds);
            },
        ]);
    }
}