<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\SalesChannel;

class SalesChannelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SalesChannel::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // List of specific sales channels
        $salesChannels = [
            'Bolt',
            'Uber Eats',
            'Iasi Delivery',
            'Tazz',
            'Take and Eat',
            'Physical Store - Downtown',
            'Physical Store - Mall',
            'Online Store'
        ];

        // List of possible descriptions
        $descriptions = [
            'Delivery through Bolt’s platform offering quick service.',
            'Order your favorites via Uber Eats with efficient delivery.',
            'Local delivery service in Iasi providing fast access to products.',
            'Enjoy convenient delivery with Tazz.',
            'Quick and easy orders with Take and Eat delivery service.',
            'Our flagship physical store located in the downtown area.',
            'Retail outlet located in the shopping mall.',
            'A comprehensive online platform for shopping anytime.'
        ];

        return [
            'name' => fake()->randomElement($salesChannels), // Random sales channel name
            'description' => fake()->randomElement($descriptions), // Random description
        ];
    }
}
