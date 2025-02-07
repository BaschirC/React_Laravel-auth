<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\IngredientController
 */
final class IngredientControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $ingredients = Ingredient::factory()->count(3)->create();

        $response = $this->get(route('ingredients.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('ingredients.create'));

        $response->assertOk();
        $response->assertViewIs('ingredient.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('ingredients.store'));

        $this->assertDatabaseHas(ingredients, [ /* ... */ ]);
    }
}
