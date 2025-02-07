<?php

namespace App\Traits;

trait HasRequestValidator
{
    /**
     * Check if the update request is containing valid locales as per model provided.
     */
    function checkLocales(string $attribute, mixed $value, \Closure $fail): void
    {
        $allowedLocales = config('app.locales');

        $invalidKeys = array_diff(array_keys($value), $allowedLocales);
        if (!empty($invalidKeys)) {
            $fail("The $attribute array contains invalid locale keys: " . implode(', ', $invalidKeys));
        }
    }
}
