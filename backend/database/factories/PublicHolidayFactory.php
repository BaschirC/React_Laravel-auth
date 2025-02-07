<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Employee;
use App\Models\PublicHoliday;
use App\Models\Restaurant;

class PublicHolidayFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PublicHoliday::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'restaurant_id' => Restaurant::factory(),
            'created_by' => Employee::factory()->create()->created_by,
            'name' => $this->faker->name(),
            'is_public' => $this->faker->boolean(),
            'start_date' => $this->faker->dateTime(),
            'end_date' => $this->faker->dateTime(),
        ];
    }
}
