<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Branch;
use App\Models\Menu;

class MenuFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Menu::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // List of common menu types
        $menuNames = [
            'Breakfast Menu',
            'Lunch Menu',
            'Dinner Menu',
            'Dessert Menu',
            'Drinks Menu',
            'Kids Menu',
            'Seasonal Menu',
            'Specials Menu'
        ];

        return [
            'branch_id' => Branch::factory(),
            'name' => fake()->randomElement($menuNames), // Random menu name
            'description' => fake()->sentence(), // Short description of the menu
        ];
    }
}
