<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Http\Requests\UserPasswordFormRequest;

class UserPasswordController
{

    /**
     * create an instance of the controller.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(private UserRepository $userRepository)
    {
    }

    public function edit($id)
    {
        return view('users.change-password', [
            'user' => $this->userRepository->getById($id),
        ]);
    }

    public function update(UserPasswordFormRequest $request, $id = null)
    {
        $this->userRepository->updatePassword(
            $this->userRepository->getById($id),
            $request->all()
        );
        return redirect()->route('users.index')->withFlashSuccess('Password Updated');
    }
}
