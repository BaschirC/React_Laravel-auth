<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Recipe;

class RecipeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Recipe::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // Generating realistic recipe names
        $recipeNames = [
            'Chicken ' . fake()->word(),
            fake()->word() . ' Pasta',
            fake()->word() . ' Stew',
            'Delicious ' . fake()->word() . ' Salad',
            'Homemade ' . fake()->word(),
            'Classic ' . fake()->word() . ' Soup'
        ];

        // Generating realistic categories and cuisine types
        $categories = ['Appetizer', 'Main Course', 'Dessert', 'Snack', 'Side Dish'];
        $cuisineTypes = ['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'Mediterranean'];

        return [
            'name' => fake()->randomElement($recipeNames), // Random recipe name
            'yield_quantity' => fake()->randomFloat(2, 1, 100), // Yield quantity between 1 and 100
            'number_of_portions' => fake()->numberBetween(1, 50), // Number of portions between 1 and 50
            'prep_time' => fake()->numberBetween(5, 120) . ' minutes', // Prep time between 5 and 120 minutes
            'cook_time' => fake()->numberBetween(10, 180) . ' minutes', // Cook time between 10 and 180 minutes
            'total_time' => fake()->numberBetween(15, 240) . ' minutes', // Total time between 15 and 240 minutes
            'category' => fake()->randomElement($categories), // Random category
            'cuisine_type' => fake()->randomElement($cuisineTypes), // Random cuisine type
            'is_compound' => fake()->boolean(),
            'instructions' => fake()->paragraphs(3, true), // Multiple paragraphs for detailed instructions
            'image_url' => fake()->imageUrl(640, 480, 'food', true), // Fake Image related to food
        ];
    }
}
