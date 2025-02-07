<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\EmployeeVacation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\EmployeeVacationController
 */
final class EmployeeVacationControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $employeeVacations = EmployeeVacation::factory()->count(3)->create();

        $response = $this->get(route('employee-vacations.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('employee-vacations.create'));

        $response->assertOk();
        $response->assertViewIs('employeeVacation.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('employee-vacations.store'));

        $this->assertDatabaseHas(employeeVacations, [ /* ... */ ]);
    }
}
