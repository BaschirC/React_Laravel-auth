<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $restaurant_id
 * @property array $name
 * @property string $street_address
 * @property string $locality
 * @property string $region
 * @property string $postal_code
 * @property string $country
 * @property string $telephone
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Menu> $menus
 * @property-read int|null $menus_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Product> $products
 * @property-read int|null $products_count
 * @property-read \App\Models\Restaurant $restaurant
 * @property-read mixed $translations
 * @method static \Database\Factories\BranchFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Branch newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch query()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereLocality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereRegion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereRestaurantId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereStreetAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereTelephone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperBranch {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $code
 * @property string $symbol
 * @property array $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Offer> $offers
 * @property-read int|null $offers_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductVariation> $productVariations
 * @property-read int|null $product_variations_count
 * @property-read mixed $translations
 * @method static \Database\Factories\CurrencyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Currency newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Currency newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Currency query()
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereSymbol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Currency whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperCurrency {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property array $name
 * @property array $description
 * @property string|null $image_url
 * @property string $unit_of_measure
 * @property int $calories_content
 * @property string $fat_content
 * @property string $saturated_fat_content
 * @property string $carbohydrate_content
 * @property string $sugar_content
 * @property string $fiber_content
 * @property string $protein_content
 * @property string $sodium_content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RecipeIngredient> $ingredients
 * @property-read int|null $ingredients_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RecipeIngredient> $recipeIngredients
 * @property-read int|null $recipe_ingredients_count
 * @property-read mixed $translations
 * @method static \Database\Factories\IngredientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient query()
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereCaloriesContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereCarbohydrateContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereFatContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereFiberContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereProteinContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereSaturatedFatContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereSodiumContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereSugarContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereUnitOfMeasure($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ingredient whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperIngredient {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $branch_id
 * @property array $name
 * @property array $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Branch $branch
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductCategory> $productCategories
 * @property-read int|null $product_categories_count
 * @property-read mixed $translations
 * @method static \Database\Factories\MenuFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Menu newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu query()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperMenu {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $product_variation_id
 * @property int $sales_channel_id
 * @property int $offer_type_id
 * @property int|null $currency_id
 * @property string $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Currency|null $currency
 * @property-read \App\Models\OfferType $offerType
 * @property-read \App\Models\ProductVariation $productVariation
 * @property-read \App\Models\SalesChannel $salesChannel
 * @method static \Database\Factories\OfferFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Offer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Offer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Offer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereCurrencyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereOfferTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereProductVariationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereSalesChannelId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Offer whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperOffer {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property array $name
 * @property string $description
 * @property string $start_time
 * @property string $end_time
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Offer> $offers
 * @property-read int|null $offers_count
 * @property-read mixed $translations
 * @method static \Database\Factories\OfferTypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType query()
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OfferType whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperOfferType {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $branch_id
 * @property array $name
 * @property array $description
 * @property string|null $image_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Branch $branch
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductAddon> $productAddons
 * @property-read int|null $product_addons_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductCategory> $productCategory
 * @property-read int|null $product_category_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductVariation> $productVariations
 * @property-read int|null $product_variations_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Recipe> $recipes
 * @property-read int|null $recipes_count
 * @property-read mixed $translations
 * @method static \Database\Factories\ProductFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperProduct {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $product_id
 * @property int $addon_product_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product $addonProduct
 * @property-read \App\Models\Product $product
 * @method static \Database\Factories\ProductAddonFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon whereAddonProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductAddon whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperProductAddon {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $menu_id
 * @property array $name
 * @property array|null $description
 * @property string|null $image_url
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Menu $menu
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Product> $products
 * @property-read int|null $products_count
 * @property-read mixed $translations
 * @method static \Database\Factories\ProductCategoryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereMenuId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperProductCategory {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $product_id
 * @property array $name
 * @property string $price
 * @property int|null $currency_id
 * @property int $stock_quantity
 * @property string $weight
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Currency|null $currency
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Offer> $offers
 * @property-read int|null $offers_count
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\Recipe|null $recipe
 * @property-read mixed $translations
 * @method static \Database\Factories\ProductVariationFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereCurrencyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereStockQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductVariation whereWeight($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperProductVariation {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property array $name
 * @property string $yield_quantity
 * @property int $number_of_portions
 * @property string $prep_time
 * @property string $cook_time
 * @property string $total_time
 * @property int $is_compound
 * @property array $category
 * @property array $cuisine_type
 * @property array $instructions
 * @property string|null $image_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RecipeIngredient> $ingredients
 * @property-read int|null $ingredients_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Product> $products
 * @property-read int|null $products_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RecipeIngredient> $recipeIngredients
 * @property-read int|null $recipe_ingredients_count
 * @property-read mixed $translations
 * @method static \Database\Factories\RecipeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe query()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereCookTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereCuisineType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereInstructions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereIsCompound($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereNumberOfPortions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe wherePrepTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereTotalTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipe whereYieldQuantity($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperRecipe {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $recipe_id
 * @property int $ingredient_id
 * @property string $ingredient_type
 * @property string $quantity
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $ingredient
 * @method static \Database\Factories\RecipeIngredientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient query()
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereIngredientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereIngredientType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereRecipeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecipeIngredient whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperRecipeIngredient {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property array $name
 * @property array $description
 * @property string $telephone
 * @property string $email
 * @property string $url
 * @property array $cuisine_type
 * @property string|null $image_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Branch> $branches
 * @property-read int|null $branches_count
 * @property-read mixed $translations
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\RestaurantFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant query()
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereCuisineType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereTelephone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Restaurant whereUrl($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperRestaurant {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $guard_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role permission($permissions, $without = false)
 * @method static \Illuminate\Database\Eloquent\Builder|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereGuardName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role withoutPermission($permissions)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperRole {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property array $name
 * @property array $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Offer> $offers
 * @property-read int|null $offers_count
 * @property-read mixed $translations
 * @method static \Database\Factories\SalesChannelFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel query()
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereJsonContainsLocale(string $column, string $locale, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereJsonContainsLocales(string $column, array $locales, ?mixed $value, string $operand = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereLocale(string $column, string $locale)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereLocales(string $column, array $locales)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalesChannel whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperSalesChannel {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Role> $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions, $without = false)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null, $without = false)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User withoutPermission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User withoutRole($roles, $guard = null)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperUser {}
}

