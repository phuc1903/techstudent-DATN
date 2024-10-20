<?php



namespace Database\Factories;



use App\Models\Nhantin;

use Illuminate\Database\Eloquent\Factories\Factory;



class NhantinFactory extends Factory

{

    protected $model = Nhantin::class;



    public function definition()

    {

        return [

            'noidung' => $this->faker->text,

            'id_nguoidung' => \App\Models\Nguoidung::inRandomOrder()->first()->id,

            'id_giangvien' => \App\Models\Giangvien::inRandomOrder()->first()->id,

            'created_at' => now(),

            'updated_at' => now(),

        ];
    }
}
