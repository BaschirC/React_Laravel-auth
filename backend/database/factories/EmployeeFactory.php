<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Currency;
use App\Models\Employee;
use App\Models\User;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'start_date' => $this->faker->dateTime(),
            'end_date' => $this->faker->dateTime(),
            'contract_type' => $this->faker->randomElement(['Full-time', 'Part-time']),
            'vacation_days_per_year' => 21,
            'salary' => $this->faker->numberBetween(0, 10000),
            'user_id' => User::factory(),
            'currency_id' => Currency::factory(),
        ];
    }
}
