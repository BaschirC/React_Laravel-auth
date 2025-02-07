<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use Illuminate\Auth\Authenticatable;

trait HasUserAccess
{
    public static function checkPermissions(User|Authenticatable $user, string $permission): bool
    {
        if ($user->hasPermissionTo($permission)) {
            return true;
        }

        if ($user->hasRole(Role::all())) {
            foreach ($user->roles as $role) {
                if ($role->hasPermissionTo($permission)) {
                    return true;
                }
            }
        }

        return false;
    }
}
