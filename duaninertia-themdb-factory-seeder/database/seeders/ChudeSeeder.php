<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Chude;
use App\Models\TheloaiTheloaicon;

class ChudeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Ensure there are TheloaiTheloaicon records to reference
        $theloaiconIds = TheloaiTheloaicon::pluck('id')->toArray();

        // Create Chude records
        $faker = \Faker\Factory::create();

        Chude::factory()->count(10)->create([
            'id_theloaicon' => function () use ($theloaiconIds, $faker) {
                return $faker->randomElement($theloaiconIds);
            },
        ]);
    }
}