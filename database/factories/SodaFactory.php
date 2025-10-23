<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Soda>
 */
class SodaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 0.5, 5.0),
            'category' => $this->faker->randomElement(['Cola', 'Diet Cola', 'Lemon-Lime', 'Root Beer', 'Ginger Ale', 'Orange', 'Grape', 'Cream Soda']),
//            'in_stock' => $this->faker->boolean(80), // 80% chance of being in stock
        ];
    }
}
