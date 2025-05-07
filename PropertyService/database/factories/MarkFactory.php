<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Property;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mark>
 */
class MarkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'policy_pets' => $this->faker->sentence(),
            'policy_children' => $this->faker->sentence(),
            'policy_period' => $this->faker->sentence(),
            'policy_increase_price' => $this->faker->sentence(),
            'policy_deposits' => $this->faker->sentence(),
            'policy_repair' => $this->faker->sentence(),
            'policy_tenant_verification' => $this->faker->randomDigitNotNull(),
            'policy_payment' => $this->faker->sentence(),
            'policy_return_deposits' => $this->faker->sentence(),
            'policy_safety' => $this->faker->sentence(),
            // 'property_id' => Property::factory(),
        ];
    }
}
