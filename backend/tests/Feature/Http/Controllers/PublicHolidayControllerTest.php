<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\PublicHoliday;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\PublicHolidayController
 */
final class PublicHolidayControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $publicHolidays = PublicHoliday::factory()->count(3)->create();

        $response = $this->get(route('public-holidays.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('public-holidays.create'));

        $response->assertOk();
        $response->assertViewIs('publicHoliday.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('public-holidays.store'));

        $this->assertDatabaseHas(publicHolidays, [ /* ... */ ]);
    }
}
