<?php

namespace App\Docs;

use Knuckles\Camel\Extraction\ExtractedEndpointData;
use Knuckles\Scribe\Extracting\Strategies\Strategy;

class ReplaceLocalesStrategy extends Strategy
{
    public function __invoke(ExtractedEndpointData $endpointData, array $settings = []): ?array
    {
        $docBlock = $endpointData->metadata->description ?? '';
        $locales = implode(', ', array_keys(config('app.locales')));
        $docBlock = str_replace('[[LOCALES]]', $locales, $docBlock);
        $endpointData->metadata->description = $docBlock;

        return $endpointData->metadata->toArray();
    }
}
