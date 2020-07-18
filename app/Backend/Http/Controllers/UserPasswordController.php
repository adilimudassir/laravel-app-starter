<?php

namespace Backend\Http\Controllers;

use Backend\Http\Requests\UserPasswordFormRequest;
use Domains\Auth\Repositories\UserRepository;

class UserPasswordController
{
    /**
     *  @var [UserRepository]
     */
    private UserRepository $userRepository;

    /**
     * create an instance of the controller.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function edit($id = null)
    {
        return view('backend.users.change-password', [
            'user' => $this->userRepository->getById($id ?? auth()->user()->id),
        ]);
    }

    public function update(UserPasswordFormRequest $request, $id = null)
    {
        $this->userRepository->updatePassword(
            $this->userRepository->getById($id ?? auth()->user()->id),
            $request->all()
        );

        if ($request->has('current_password')) {
            return redirect()->route('backend.dashboard')->withFlashSuccess('Password Updated');
        } else {
            return redirect()->route('backend.users.index')->withFlashSuccess('Password Updated');
        }
    }
}
