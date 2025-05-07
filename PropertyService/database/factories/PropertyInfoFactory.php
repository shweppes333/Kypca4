<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Property;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PropertyInfo>
 */
class PropertyInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => $this->faker->sentence(),
            'bathrooms' => $this->faker->randomDigitNotNull(),
            'bedrooms' => $this->faker->randomDigitNotNull(),
            'category' => $this->faker->sentence(),
            'owner' => $this->faker->randomDigitNotNull(),
            // 'property_id' => Property::factory(),
        ];
    }
}
