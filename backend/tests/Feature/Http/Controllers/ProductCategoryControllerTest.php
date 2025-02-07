<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\ProductCategoryController
 */
final class ProductCategoryControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $productCategories = ProductCategory::factory()->count(3)->create();

        $response = $this->get(route('product-categories.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('product-categories.create'));

        $response->assertOk();
        $response->assertViewIs('productCategory.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('product-categories.store'));

        $this->assertDatabaseHas(productCategories, [ /* ... */ ]);
    }
}
