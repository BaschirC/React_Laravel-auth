<?php

namespace App\Repositories\Interfaces;

use App\Resources\BaseResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

interface EloquentRepositoryInterface
{
    public function create(array $attributes = [], ?string $successMessage, ?string $errorMessage): BaseResource;

    public function all(Request $request, ?string $errorMessage): BaseResource;

    public function one(Request $request, Model $model, ?string $errorMessage): BaseResource;

    public function update(Request $request, Model $model, ?string $successMessage, ?string $errorMessage): BaseResource;

    public function destroy(Request $request, ?string $successMessage, ?string $errorMessage): BaseResource;
}