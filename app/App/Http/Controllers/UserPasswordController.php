<?php

namespace App\Http\Controllers;

use Domains\Auth\Repositories\UserRepository;
use App\Http\Requests\UserPasswordFormRequest;

class UserPasswordController
{

    /**
     * create an instance of the controller.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(private UserRepository $userRepository)
    {}

    public function edit($id = null)
    {
        return view('users.change-password', [
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
            return redirect()->route('dashboard')->withFlashSuccess('Password Updated');
        } else {
            return redirect()->route('users.index')->withFlashSuccess('Password Updated');
        }
    }
}
