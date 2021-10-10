<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserFormRequest;
use Domains\Auth\Repositories\RoleRepository;
use Domains\Auth\Repositories\UserRepository;

class UserController extends Controller
{
    /**
     * create an instance of the controller.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(private UserRepository $userRepository)
    {}

    public function index()
    {
        $this->authorize('read-users');

        return view('users.index', [
            //
        ]);
    }

    public function create(RoleRepository $roleRepository)
    {
        $this->authorize('create-users');

        return view('users.create', [
            'roles' => $roleRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function store(UserFormRequest $request)
    {
        $this->authorize('created-users');

        $this->userRepository->create($request);

        return redirect()
            ->route('users.index')
            ->withFlashSuccess('User Added Successfully!');
    }

    public function show($id)
    {
        $this->authorize('read-users');

        return view('users.show', [
            'user' => $this->userRepository->getById($id),
        ]);
    }

    public function edit($id, RoleRepository $roleRepository)
    {
        $this->authorize('update-users');

        return view('users.edit', [
            'user' => $this->userRepository->getById($id),
            'roles' => $roleRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function update(UserFormRequest $request, $id)
    {
        $this->authorize('update-users');

        $this->userRepository->update(
            $request,
            $this->userRepository->getById($id)
        );

        return redirect()
            ->route('users.index')
            ->withFlashSuccess('User Updated Successfully!');
    }

    public function destroy($id)
    {
        $this->authorize('delete-users');

        $this->userRepository->deleteById($id);

        return redirect()
            ->route('users.index')
            ->withFlashSuccess('User Deleted Successfully!');
    }
}
