<?php

namespace Domains\Auth\Repositories;

use App\Repositories\BaseRepository;
use Domains\Auth\Models\Permission;

class PermissionRepository extends BaseRepository
{
    /**
     * create an instance of the class.
     *
     * @param Permission $permission
     */
    public function __construct(Permission $permission)
    {
        $this->model = $permission;
    }
}
