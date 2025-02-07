<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Currency;
use App\Models\Offer;
use App\Models\OfferType;
use App\Models\ProductVariation;
use App\Models\SalesChannel;

class OfferFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Offer::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'product_variation_id' => ProductVariation::factory(),
            'sales_channel_id' => SalesChannel::inRandomOrder()->first()->id,
            'offer_type_id' => OfferType::factory(),
            'currency_id' => Currency::inRandomOrder()->first()->id,
            'price' => fake()->randomFloat(2, 0, 199.99),
        ];
    }
}
