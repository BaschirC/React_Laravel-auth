<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Currency;

class CurrencyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Currency::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        // A list of common currencies
        $currencies = [
            ['code' => 'USD', 'symbol' => '$', 'name' => 'US Dollar'],
            ['code' => 'RON', 'symbol' => 'RON', 'name' => 'Romanian Lei'],
            ['code' => 'EUR', 'symbol' => '€', 'name' => 'Euro'],
            ['code' => 'GBP', 'symbol' => '£', 'name' => 'British Pound'],
            ['code' => 'JPY', 'symbol' => '¥', 'name' => 'Japanese Yen'],
            ['code' => 'AUD', 'symbol' => 'A$', 'name' => 'Australian Dollar'],
            ['code' => 'CAD', 'symbol' => 'C$', 'name' => 'Canadian Dollar'],
            ['code' => 'CHF', 'symbol' => 'CHF', 'name' => 'Swiss Franc'],
            ['code' => 'CNY', 'symbol' => '¥', 'name' => 'Chinese Yuan'],
            ['code' => 'INR', 'symbol' => '₹', 'name' => 'Indian Rupee'],
        ];

        // Randomly select a currency from the list
        $currency = $this->faker->randomElement($currencies);

        return [
            'code' => $currency['code'],
            'symbol' => $currency['symbol'],
            'name' => $currency['name'],
        ];
    }
}
