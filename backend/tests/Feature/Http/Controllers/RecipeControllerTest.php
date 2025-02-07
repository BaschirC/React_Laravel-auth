<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\RecipeController
 */
final class RecipeControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $recipes = Recipe::factory()->count(3)->create();

        $response = $this->get(route('recipes.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('recipes.create'));

        $response->assertOk();
        $response->assertViewIs('recipe.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('recipes.store'));

        $this->assertDatabaseHas(recipes, [ /* ... */ ]);
    }
}
