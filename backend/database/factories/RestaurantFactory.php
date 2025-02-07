<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Restaurant;

class RestaurantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Restaurant::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company() . " Restaurant",
            'description' => fake()->text(),
            'telephone' => fake()->phoneNumber(),
            'email' => fake()->safeEmail(),
            'url' => fake()->url(),
            'cuisine_type' => fake()->randomElement(['Italian', 'Chinese', 'Mexican', 'Indian', 'American', 'Japanese', 'Romanian']),
        ];
    }
}
