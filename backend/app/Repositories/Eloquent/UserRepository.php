<?php

namespace App\Repositories\Eloquent;
use App\Models\User;
use Z3rka\Queryfi\HasRelations;

class UserRepository extends BaseRepository
{
    use HasRelations;

    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}