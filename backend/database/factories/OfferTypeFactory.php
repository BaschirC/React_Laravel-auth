<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\OfferType;

class OfferTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = OfferType::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // List of common offer names
        $offerNames = [
            'Happy Hour',
            'Buy One Get One Free',
            'Seasonal Discount',
            'Holiday Special',
            'Student Discount',
            'Early Bird Special',
            'Loyalty Program',
            'Free Dessert with Meal'
        ];

        // Randomly select an offer name and generate relevant times
        $name = fake()->randomElement($offerNames);
        $start_time = fake()->time('H:i:s');
        $end_time = fake()->time('H:i:s');

        return [
            'name' => $name, // Randomly selected offer name
            'description' => fake()->sentence(), // Short description of the offer
            'start_time' => $start_time, // Randomly generated start time
            'end_time' => $end_time, // Randomly generated end time
        ];
    }
}
