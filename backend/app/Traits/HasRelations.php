<?php

namespace App\Traits;

use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

trait HasRelations
{
    function withRelation(Request $request, Builder $builder): Builder
    {
        if ($request->with) {
            $with = explode(",", $request->with);

            foreach ($with as $value) {
                $nestedWith = explode(".", $value);

                if (count($nestedWith) > 1) {
                    $table = array_splice($nestedWith, 0, 1)[0];
                    $nestedWith = array_map(function ($item) use ($table) {
                        return "$table.$item";
                    }, $nestedWith);

                    foreach ($nestedWith as $nestedValue) {
                        $builder->with($table, $nestedValue);
                    }
                } else {
                    $builder->with($nestedWith);
                }
            }

        }

        return $builder;
    }

    public function processModel(Request $request, Model $builder): Builder
    {
        try {
            $preparedModel = $builder->newQuery();

            if ($request->paginate) {
                $preparedModel->paginate($request->paginate);
            }

            // only recipe related
            $compound = $request->compound;
            if ($compound !== null) {
                $preparedModel = $preparedModel->where('is_compound', !!$compound);
            }

            // only recipe/ingredients related
            if ($request->orphans !== null) {
                if (!!$request->orphans) {
                    $preparedModel = $preparedModel->whereDoesntHave('recipeIngredients');
                } else if (!!!$request->orphans) {
                    $preparedModel = $preparedModel->wherehas('recipeIngredients');
                }
            }

            return $this->withRelation($request, $preparedModel);
        } catch (Exception $e) {
            return $builder->newQuery();
        }
    }
}
