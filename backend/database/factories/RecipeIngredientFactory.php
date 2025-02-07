<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\RecipeIngredient;

class RecipeIngredientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RecipeIngredient::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'ingredient_id' => Ingredient::factory(),
            'compound_recipe_id' => Recipe::factory(),
            'quantity' => fake()->randomFloat(2, 0, 99.99),
        ];
    }
}
