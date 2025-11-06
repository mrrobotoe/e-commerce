<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Flavor>
 */
class FlavorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(),
            'price' => $this->faker->randomFloat(2, 0.1, 1.0),
            'category' => $this->faker->randomElement(['Citrus', 'Berry', 'Tropical', 'Spicy', 'Herbal', 'Nutty', 'Floral', 'Earthy'])
        ];
    }
}
