<?php

namespace Tests\Feature;

use Domains\Auth\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function testUserCanSeeLoginForm()
    {
        $response = $this->get(route('frontend.auth.login'));
        $response->assertSuccessful();
        $response->assertViewIs('frontend.auth.login');
    }

    public function testUserCannotViewLoginFormWhenAuthenticated()
    {
        $user = factory(User::class)->make();
        $response = $this->actingAs($user)->get(route('frontend.auth.login'));
        $response->assertRedirect(route('frontend.dashboard'));
    }

    public function testUserCanLoginWithCorrectCredentials()
    {
        $user = factory(User::class)->create();

        $response = $this->post(route('frontend.auth.login'), [
            'email' => $user->email,
            'password' => 'secret',
        ]);
        $response->assertRedirect(route('frontend.dashboard'));
        $this->assertAuthenticatedAs($user);
    }

    public function testUserCannotLoginWithIncorrectCredentials()
    {
        $user = factory(User::class)->make();
        $response = $this->from(route('frontend.auth.login'))->post(route('frontend.auth.login'), [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $response->assertRedirect(route('frontend.auth.login'));
        $response->assertSessionHasErrors('email');
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    public function testRememberMeFunctionality()
    {
        $user = factory(User::class)->create();
        $response = $this->post(route('frontend.auth.login'), [
            'email' => $user->email,
            'password' => 'secret',
            'remember' => 'on',
        ]);
        $response->assertRedirect(route('frontend.dashboard'));
        $this->assertAuthenticatedAs($user);
        $response->assertCookie(
            Auth::guard()->getRecallerName(),
            vsprintf('%s|%s|%s', [
                $user->id,
                $user->getRememberToken(),
                $user->password,
            ])
        );
    }
}
