<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Status;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rental>
 */
class RentalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'Rental_Code' => $this->faker->randomDigitNotNull(),
            'Id_User' => $this->faker->randomDigitNotNull(),
            'Id_Property' => $this->faker->randomDigitNotNull(),
            'Status_Id' => Status::factory()
        ];
    }
}
