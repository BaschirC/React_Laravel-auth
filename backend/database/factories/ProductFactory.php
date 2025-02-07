<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Branch;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Recipe;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // Generating realistic product names
        $productNames = [
            fake()->word() . ' ' . fake()->word(), // Combines two words
            fake()->word() . ' Dish', // Adds a common suffix
            fake()->word() . ' Special', // Adds another common suffix
        ];

        return [
            'branch_id' => Branch::factory(), // Picks a random existing branch
            'name' => fake()->randomElement($productNames), // Random product name
            'description' => fake()->paragraph(), // Longer, more detailed description
            'image_url' => fake()->imageUrl(640, 480, 'food', true), // Fake Image related to food
        ];
    }
}
