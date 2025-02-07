<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Container\Container;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;
use App\Logging\Log;

class ExtendedJsonResource extends JsonResource
{
    public function __construct(
        public $status,
        public $message,
        $resource = [],
        public int $code = 200,
        public ?array $extras = []
    ) {
        $this->resource = $resource;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if ($this->resource === null) {
            return [
                'status' => $this->status,
                'message' => $this->message,
            ];
        }

        Log::info('the info', [
            'res' => $this->resource
        ]);

        $resArray = is_array($this->resource) ? $this->resource : $this->resource?->toArray();

        return array_merge(
            [
                'status' => $this->status,
                'message' => $this->message,
                'extras' => $this->extras,
                'content' => $resArray,
            ]
        );
    }

    public function resolve($request = null)
    {
        $data = $this?->toArray(
            $request ?: Container::getInstance()->make('request')
        );

        if ($data instanceof Arrayable) {
            $data = $data?->toArray();
        } elseif ($data instanceof JsonSerializable) {
            $data = $data->jsonSerialize();
        }

        $result = ['data' => $data];

        if (!empty($this->extras)) {
            $result['extras'] = $this->extras;
        }

        return $result;
    }

    public function toResponse($request)
    {
        return response()->json($this->resolve($request), $this->code);
    }
}