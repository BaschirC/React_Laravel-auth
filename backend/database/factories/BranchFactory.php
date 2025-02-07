<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Branch;
use App\Models\Restaurant;

class BranchFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Branch::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'restaurant_id' => Restaurant::factory(), // Link to a restaurant
            'name' => fake()->company() . ' Branch', // More appropriate name for a branch
            'street_address' => fake()->streetAddress(), // Generates a valid street address
            'locality' => fake()->city(), // Generates a valid city
            'region' => fake()->state(), // Generates a valid state/region
            'postal_code' => fake()->postcode(), // Generates a valid postal code
            'country' => fake()->country(), // Generates a valid country
            'telephone' => fake()->phoneNumber(), // Generates a valid phone number
        ];
    }
}
