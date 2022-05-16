<?php

namespace App\Models;

use Altek\Accountant\Contracts\Recordable;
use Spatie\Permission\Models\Permission as SpatiePermission;

class Permission extends SpatiePermission implements Recordable
{
    use \Altek\Accountant\Recordable;

    protected $fillable = [
        'name',
        'description',
        'guard_name',
    ];
}
