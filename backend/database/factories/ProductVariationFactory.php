<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Currency;
use App\Models\Product;
use App\Models\ProductVariation;
use App\Models\Recipe;

class ProductVariationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductVariation::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // Generating realistic names for variations
        $variationNames = [
            'Small',
            'Medium',
            'Large',
            'Extra Large',
            'Gluten-Free',
            'Spicy',
            'Vegan',
            'Organic',
            'Regular',
            'Deluxe'
        ];

        return [
            'product_id' => Product::inRandomOrder()->first()->id, // Picks a random existing product
            'name' => fake()->randomElement($variationNames), // Random variation name
            'price' => fake()->randomFloat(2, 1, 1000), // Price between $1 and $1000
            'currency_id' => Currency::inRandomOrder()->first()->id, // Picks a random existing currency
            'stock_quantity' => fake()->numberBetween(0, 1000), // Stock quantity between 0 and 1000
            'weight' => fake()->randomFloat(2, 0.1, 5), // Weight between 0.1 and 5 kg
        ];
    }
}
