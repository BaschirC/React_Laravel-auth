<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductAddon;
use App\Models\ProductCategory;
use App\Models\RecipeIngredient;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Restaurant;
use App\Models\Branch;
use App\Models\Menu;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\ProductVariation;
use App\Models\Offer;
use App\Models\OfferType;
use App\Models\SalesChannel;
use App\Models\Currency;
use App\Models\Employee;

class DatabaseSeeder extends Seeder
{
    public function run()
    {

    }

    protected function withProgressBar(int $amount, \Closure $createCollectionOfOne): void
    {
        $progressBar = $this->command->getOutput()->createProgressBar($amount);
        $progressBar->setFormat('%current%/%max% [%bar%] %percent:3s%%');
        $progressBar->start();

        for ($i = 0; $i < $amount; $i++) {
            $createCollectionOfOne();
            $progressBar->advance();
        }

        $progressBar->finish();
        $this->command->newLine();
    }
}
