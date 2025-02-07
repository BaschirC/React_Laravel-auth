<?php

declare(strict_types=1);

namespace App\Logging;

/**
 * This class extends the functionality of the default logger by adding the file path and line number where the logger was called to the context.
 */
class Log extends \Illuminate\Support\Facades\Log
{
    /**
     * Debug messages that can be useful during application development.
     */
    public static function debug(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::debug($message, self::withSource($context));
    }

    /**
     * Informational messages that can be useful during application debugging.
     */
    public static function info(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::info($message, self::withSource($context));
    }

    /**
     * Messages that can be useful during application debugging.
     */
    public static function notice(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::notice($message, self::withSource($context));
    }

    /**
     * Messages that indicate a warning.
     */
    public static function warning(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::warning($message, self::withSource($context));
    }

    /**
     * Messages that indicate an error.
     */
    public static function error(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::error($message, self::withSource($context));
    }

    /**
     * Messages that indicate a critical error.
     */
    public static function critical(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::critical($message, self::withSource($context));
    }

    /**
     * Messages that require immediate attention.
     */
    public static function alert(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::alert($message, self::withSource($context));
    }

    /**
     * System messages that indicate an emergency.
     */
    public static function emergency(string|\Stringable $message, array $context = []): void
    {
        \Illuminate\Support\Facades\Log::emergency($message, self::withSource($context));
    }

    /**
     * This method adds the file path and line number where the logger was called to the context.
     */
    private static function withSource(array $context): array
    {
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);

        return array_merge($context, [
            'src' => $trace[1]['file'] . ':' . $trace[1]['line'],
            'account' => auth()->user()->name . " | " . auth()->user()->email ?? "No user!"
        ]);
    }
}