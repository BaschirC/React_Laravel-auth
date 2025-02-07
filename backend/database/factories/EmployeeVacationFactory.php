<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Employee;
use App\Models\EmployeeVacation;

class EmployeeVacationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeVacation::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'requested_by' => Employee::factory()->create()->requested_by,
            'vacation_type' => $this->faker->regexify('[A-Za-z0-9]{50}'),
            'start_date' => $this->faker->dateTime(),
            'end_date' => $this->faker->dateTime(),
            'requested_at' => $this->faker->dateTime(),
            'approved_at' => $this->faker->dateTime(),
            'status' => $this->faker->regexify('[A-Za-z0-9]{50}'),
            'approved_by' => Employee::factory()->create()->approved_by,
        ];
    }
}
