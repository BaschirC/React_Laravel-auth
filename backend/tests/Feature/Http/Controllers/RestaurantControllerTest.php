<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\RestaurantController
 */
final class RestaurantControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $restaurants = Restaurant::factory()->count(3)->create();

        $response = $this->get(route('restaurants.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('restaurants.create'));

        $response->assertOk();
        $response->assertViewIs('restaurant.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('restaurants.store'));

        $this->assertDatabaseHas(restaurants, [ /* ... */ ]);
    }
}
