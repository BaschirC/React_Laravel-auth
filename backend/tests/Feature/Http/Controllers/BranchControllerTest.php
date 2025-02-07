<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Branch;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\BranchController
 */
final class BranchControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $branches = Branch::factory()->count(3)->create();

        $response = $this->get(route('branches.index'));
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('branches.create'));

        $response->assertOk();
        $response->assertViewIs('branch.create');
    }


    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('branches.store'));

        $this->assertDatabaseHas(branches, [ /* ... */ ]);
    }
}
