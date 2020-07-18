<?php

namespace Backend\Http\Controllers;

use App\Http\Controllers\Controller;
use Backend\Http\Requests\UserFormRequest;
use Domains\Auth\Repositories\RoleRepository;
use Domains\Auth\Repositories\UserRepository;

class UserController extends Controller
{
    /**
     * Undocumented variable.
     *
     * @var [UserRepository]
     */
    protected $userRepository;

    /**
     * create an instance of the controller.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index()
    {
        $this->authorize('read-users');

        return view('backend.users.index', [
            //
        ]);
    }

    public function create(RoleRepository $roleRepository)
    {
        $this->authorize('create-users');

        return view('backend.users.create', [
            'roles' => $roleRepository->all()->pluck('name', 'id'),
        ]);
    }

    public function store(UserFormRequest $request)
    {
        $this->authorize('created-users');

        $this->userRepository->create($request);

        return redirect()
            ->route('backend.users.index')
            ->withFlashSuccess('User Added Successfully!');
    }

    public function show($id)
    {
        $this->authorize('read-users');

        return view('backend.users.show', [
            'user' => $this->userRepository->getById($id),
        ]);
    }

    public function edit($id, RoleRepository $roleRepository)
    {
        $this->authorize('update-users');

        return view('backend.users.edit', [
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
            ->route('backend.users.index')
            ->withFlashSuccess('User Updated Successfully!');
    }

    public function destroy($id)
    {
        $this->authorize('delete-users');

        $this->userRepository->delete($id);

        return redirect()
            ->route('backend.users.index')
            ->withFlashSuccess('User Deleted Successfully!');
    }
}
