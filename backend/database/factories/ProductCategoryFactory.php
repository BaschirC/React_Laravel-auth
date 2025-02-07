<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Menu;
use App\Models\ProductCategory;

class ProductCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductCategory::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // List of common product categories
        $categoryNames = [
            'Appetizers',
            'Main Courses',
            'Desserts',
            'Beverages',
            'Starters',
            'Salads',
            'Soups',
            'Sides',
            'Vegetarian',
            'Seafood'
        ];

        return [
            'menu_id' => Menu::factory(),
            'name' => fake()->randomElement($categoryNames), // Random category name
            'description' => fake()->sentence(), // Short description
            'image_url' => fake()->imageUrl(640, 480, 'food', true), // Fake Image related to food
            'sort_order' => fake()->numberBetween(1, 100), // Sort order, starting from 1
        ];
    }
}
