<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleFormRequest;
use Domains\Auth\Repositories\RoleRepository;
use Domains\Auth\Repositories\PermissionRepository;

class RoleController extends Controller
{
    /**
     * create an instance of the controller.
     *
     * @param RoleRepository $roleRepository
     */
    public function __construct(private RoleRepository $roleRepository)
    {}

    public function index()
    {
        $this->authorize('read-roles');

        return view('roles.index', [
            //
        ]);
    }

    public function create(PermissionRepository $permissionRepository)
    {
        $this->authorize('create-roles');

        return view('roles.create', [
            'permissions' => $permissionRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function store(RoleFormRequest $request)
    {
        $this->authorize('create-roles');

        $this->roleRepository->create($request);

        return redirect()
            ->route('roles.index')
            ->withFlashSuccess('Role Added Successfully!');
    }

    public function show($id)
    {
        $this->authorize('read-roles');

        return view('roles.show', [
            'role' => $this->roleRepository->getById($id),
        ]);
    }

    public function edit($id, PermissionRepository $permissionRepository)
    {
        $this->authorize('update-roles');

        return view('roles.edit', [
            'role' => $this->roleRepository->getById($id),
            'permissions' => $permissionRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function update(RoleFormRequest $request, $id)
    {
        $this->authorize('update-roles');

        $this->roleRepository->update(
            $request,
            $this->roleRepository->getById($id)
        );

        return redirect()
            ->route('roles.index')
            ->withFlashSuccess('Role Updated Successfully!');
    }

    public function destroy($id)
    {
        $this->authorize('delete-roles');

        $this->roleRepository->deleteById($id);

        return redirect()
            ->route('roles.index')
            ->withFlashSuccess('Role Deleted Successfully!');
    }
}
