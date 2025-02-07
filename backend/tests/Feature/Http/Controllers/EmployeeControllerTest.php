<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Employee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\EmployeeController
 */
final class EmployeeControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $employees = Employee::factory()->count(3)->create();

        $response = $this->get(route('employees.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('employees.create'));

        $response->assertOk();
        $response->assertViewIs('employee.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('employees.store'));

        $this->assertDatabaseHas(employees, [ /* ... */ ]);
    }
}
