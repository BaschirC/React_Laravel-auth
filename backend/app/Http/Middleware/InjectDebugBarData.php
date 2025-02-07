<?php

namespace App\Http\Middleware;

use Barryvdh\Debugbar\Facades\Debugbar;
use Closure;

class InjectDebugBarData
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Only proceed for JSON responses
        if ($response->headers->get('Content-Type') === 'application/json' && Debugbar::isEnabled()) {
            $debugbarData = Debugbar::getData();

            // Decode the existing JSON response
            $originalData = json_decode($response->getContent(), true);

            if (isset($originalData['data'])) {
                // Inject debugbar into the existing 'data' key
                $originalData['data']['debugbar'] = $debugbarData;
            } else {
                // Fallback: Add debugbar separately if 'data' key doesn't exist
                $originalData['debugbar'] = $debugbarData;
            }

            // Set the modified response content
            $response->setContent(json_encode($originalData));
        }

        return $response;
    }
}
