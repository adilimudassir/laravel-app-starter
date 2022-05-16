<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use App\Http\Requests\RoleFormRequest;
use App\Events\RoleCreated;
use App\Events\RoleUpdated;
use App\Exceptions\RoleException;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

class RoleRepository extends BaseRepository
{
    /**
     * create instance of the class.
     *
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        $this->model = $role;
    }

    public function create(RoleFormRequest $request): Role
    {
        return DB::transaction(function () use ($request) {
            $newRole = $this->model::create([
                'name' => $request->name,
            ]);

            if (! $newRole) {
                throw new RoleException('Role could not be created at the moment');
            }

            $newRole->syncPermissions($request->permissions);

            event(new RoleCreated($newRole));

            return $newRole;
        });
    }

    public function update(RoleFormRequest $request, Role $role): Role
    {
        return DB::transaction(function () use ($request, $role) {
            if (! $role->update([
                'name' => $request->name,
            ])) {
                throw new RoleException('Role Could not be updated');
            }

            $role->syncPermissions($request->permissions);

            event(new RoleUpdated($role));

            return $role;
        });
    }
}
