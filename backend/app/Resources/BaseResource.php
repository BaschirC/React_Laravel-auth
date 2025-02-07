<?php

namespace App\Resources;

use Illuminate\Http\Request;

class BaseResource extends ExtendedJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request, ?\Throwable $e = null): array
    {
        $response = parent::toArray($request);

        return $response;
    }
}