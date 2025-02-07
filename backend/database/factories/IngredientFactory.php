<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Ingredient;

class IngredientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ingredient::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // List of common ingredient names
        $ingredientNames = [
            'Tomato',
            'Carrot',
            'Chicken Breast',
            'Garlic',
            'Onion',
            'Spinach',
            'Milk',
            'Butter',
            'Olive Oil',
            'Rice',
            'Potato',
            'Beef',
            'Salmon',
            'Egg',
            'Flour',
            'Salt',
            'Sugar'
        ];

        // List of common units of measure
        $unitsOfMeasure = ['g', 'kg', 'ml', 'l', 'oz', 'lb', 'cup', 'tbsp', 'tsp'];

        return [
            'name' => fake()->randomElement($ingredientNames), // Random ingredient name
            'description' => fake()->sentence(), // Short description
            'image_url' => fake()->imageUrl(640, 480, 'food', true), // Fake Image related to food
            'unit_of_measure' => fake()->randomElement($unitsOfMeasure), // Random unit of measure
            'calories_content' => fake()->numberBetween(50, 900), // More reasonable calorie range
            'fat_content' => fake()->randomFloat(2, 0, 100), // Fat content up to 100g
            'saturated_fat_content' => fake()->randomFloat(2, 0, 50), // Saturated fat up to 50g
            'carbohydrate_content' => fake()->randomFloat(2, 0, 100), // Carbs content up to 100g
            'sugar_content' => fake()->randomFloat(2, 0, 100), // Sugar content up to 100g
            'fiber_content' => fake()->randomFloat(2, 0, 50), // Fiber content up to 50g
            'protein_content' => fake()->randomFloat(2, 0, 100), // Protein content up to 100g
            'sodium_content' => fake()->randomFloat(2, 0, 5000), // Sodium content up to 5000mg
        ];
    }
}
