<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Interfaces\EloquentRepositoryInterface;
use App\Resources\BaseResource;
use Z3rka\Queryfi\HasRelations;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\Request;
use App\Logging\Log;

class BaseRepository implements EloquentRepositoryInterface
{
    use HasRelations;

    public function __construct(protected Model $model)
    {
        //
    }

    public function create(
        array $attributes = [],
        ?string $successMessage,
        ?string $errorMessage
    ): BaseResource {
        try {
            return new BaseResource(
                true,
                $successMessage,
                $this->model->create($attributes)
            );
        } catch (Exception $e) {
            return new BaseResource(
                false,
                $errorMessage,
                [
                    'error' => $e
                ],
                $this->getStatusCode($e)
            );
        }
    }

    public function all(Request $request, ?string $errorMessage): BaseResource
    {
        try {
            $model = $this->processModel($request, $this->model);

            Log::info('the model', [
                'model' => $model
            ]);

            return new BaseResource(true, 'Success', $model);
        } catch (Exception $e) {
            $this->spitError($e);
            return new BaseResource(
                false,
                $errorMessage,
                $this->model->get(),
                $this->getStatusCode($e),
                [
                    "error" => $e,
                ]
            );
        }
    }

    public function count(Request $request)
    {
        return [
            'count' => $this->processModel($request, $this->model)
        ];
    }

    public function one(Request $request, Model $model, ?string $errorMessage): BaseResource
    {
        try {
            $preparedModel = $this->processModel($request, $model);

            return new BaseResource(true, "success", $preparedModel->find($model->id));
        } catch (Exception $e) {
            $this->spitError($e);
            return new BaseResource(
                false,
                "Fail",
                $model,
                $this->getStatusCode($e),
                [
                    "error" => $e,
                ]
            );
        }
    }

    public function spitError(Exception $e): void
    {
        if ($e instanceof RelationNotFoundException) {
            Log::error("The relation $e->relation does not exist.", [
                "exception" => $e,
            ]);
        } else {
            Log::error(
                "An error occurred when trying to get all resources of model " .
                get_class($this->model) .
                " instance " .
                $this->model->getKey(),
                [
                    "exception" => $e,
                ]
            );
        }
    }

    public function update(Request $request, Model $model, ?string $successMessage, ?string $errorMessage): BaseResource
    {
        try {
            $model->update($request->all());
            $prepareModel = $this->processModel($request, $model);

            return new BaseResource(
                true,
                $successMessage,
                $prepareModel->find($model->id)
            );
        } catch (Exception $e) {
            $this->spitError($e);
            return new BaseResource(
                false,
                $errorMessage,
                $model,
                $this->getStatusCode($e),
                [
                    "error" => $e,
                ]
            );
        }
    }

    public function destroy(Request $request, ?string $successMessage, ?string $errorMessage): BaseResource
    {
        try {
            $ids = $request->all();

            foreach ($ids as $id) {
                $this->model->find($id)?->delete();
            }

            return new BaseResource(
                true,
                $successMessage,
                []
            );
        } catch (Exception $e) {
            return new BaseResource(
                true,
                $errorMessage,
                [
                    'error' => $e
                ],
                $this->getStatusCode($e),
            );
        }
    }

    public function getStatusCode($e)
    {
        return $e instanceof HttpException ? $e->getStatusCode() : 500;
    }
}
