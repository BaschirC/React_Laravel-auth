<?php

namespace App\Logging;

use Monolog\Formatter\JsonFormatter;
use Monolog\Handler\AbstractProcessingHandler;

class CustomJsonFormatter
{
    /**
     * Customize the given handler to use a JSON formatter.
     *
     * @param  AbstractProcessingHandler  $handler
     * @return void
     */
    public function __invoke($logger)
    {
        foreach ($logger->getHandlers() as $handler) {
            $handler->setFormatter(new JsonFormatter());
        }
    }
}
