<?php

namespace Database\Factories;
use App\Models\Property;
use App\Models\PropertyInfo;
use App\Models\Image;
use App\Models\Mark;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
                'title' => $this->faker->sentence(),
                'description'=> $this->faker->text(),
                'price'=> $this->faker->numberBetween(1000,5000),
                'location'=> $this->faker->city,
                'image_id'=> Image::factory(),
                'property_info_class'=> PropertyInfo::factory(),
                'mark_id'=> Mark::factory(),
        ];
    }
}
