<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Currency;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\CurrencyController
 */
final class CurrencyControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $currencies = Currency::factory()->count(3)->create();

        $response = $this->get(route('currencies.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('currencies.create'));

        $response->assertOk();
        $response->assertViewIs('currency.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('currencies.store'));

        $this->assertDatabaseHas(currencies, [ /* ... */ ]);
    }
}
