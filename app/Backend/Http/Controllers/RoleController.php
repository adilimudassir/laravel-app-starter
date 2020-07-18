<?php

namespace Backend\Http\Controllers;

use App\Http\Controllers\Controller;
use Backend\Http\Requests\RoleFormRequest;
use Domains\Auth\Repositories\PermissionRepository;
use Domains\Auth\Repositories\RoleRepository;

class RoleController extends Controller
{
    /**
     * Undocumented variable.
     *
     * @var [RoleRepository]
     */
    protected $roleRepository;

    /**
     * create an instance of the controller.
     *
     * @param RoleRepository $roleRepository
     */
    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    public function index()
    {
        $this->authorize('read-roles');

        return view('backend.roles.index', [
            //
        ]);
    }

    public function create(PermissionRepository $permissionRepository)
    {
        $this->authorize('create-roles');

        return view('backend.roles.create', [
            'permissions' => $permissionRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function store(RoleFormRequest $request)
    {
        $this->authorize('create-roles');

        $this->roleRepository->create($request);

        return redirect()
            ->route('backend.roles.index')
            ->withFlashSuccess('Role Added Successfully!');
    }

    public function show($id)
    {
        $this->authorize('read-roles');

        return view('backend.roles.show', [
            'role' => $this->roleRepository->getById($id),
        ]);
    }

    public function edit($id, PermissionRepository $permissionRepository)
    {
        $this->authorize('update-roles');

        return view('backend.roles.edit', [
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
            ->route('backend.roles.index')
            ->withFlashSuccess('Role Updated Successfully!');
    }

    public function destroy($id)
    {
        $this->authorize('delete-roles');

        $this->roleRepository->delete($id);

        return redirect()
            ->route('backend.roles.index')
            ->withFlashSuccess('Role Deleted Successfully!');
    }
}
