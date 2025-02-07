<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Menu;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\MenuController
 */
final class MenuControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $menus = Menu::factory()->count(3)->create();

        $response = $this->get(route('menus.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('menus.create'));

        $response->assertOk();
        $response->assertViewIs('menu.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('menus.store'));

        $this->assertDatabaseHas(menus, [ /* ... */ ]);
    }
}
