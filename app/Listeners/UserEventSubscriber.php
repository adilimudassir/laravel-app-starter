<?php

namespace App\Listeners;

use App\Events\UserCreated;
use App\Events\UserUpdated;
use App\Events\UserLoggedIn;
use App\Events\UserLoggedOut;

class UserEventSubscriber
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * @param $event
     */
    public function onLoggedIn($event)
    {
        // Update the logging in users time & IP
        $event->user->update([
            'last_login_at' => now(),
            'last_login_ip' => request()->getClientIp(),
        ]);

        \Log::info('User Logged In: '.$event->user->name);
    }

    /**
     * @param $event
     */
    public function onLoggedOut($event)
    {
        \Log::info('User Logged Out: '.$event->user->name);
    }

    /**
     * @param [type] $event
     * @return void
     */
    public function onCreated($event)
    {
        \Log::info('User Created: '.$event->user->name.'. By: '.optional(request()->user())->name ?? $event->user->name);

        if (config('access.confirm_email') && !$event->user->hasVerifiedEmail()) {
            $event->user?->sendEmailVerificationNotification();
        } else {
            $event->user?->markEmailAsVerified();
        }
    }

    /**
     * @param [type] $event
     * @return void
     */
    public function onUpdated($event)
    {
        \Log::info('User Updated: '.$event->user->name.'. By: '.optional(request()->user())->name ?? $event->user->name);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            UserLoggedIn::class,
            'App\Listeners\UserEventSubscriber@onLoggedIn'
        );

        $events->listen(
            UserLoggedOut::class,
            'App\Listeners\UserEventSubscriber@onLoggedOut'
        );

        $events->listen(
            UserCreated::class,
            'App\Listeners\UserEventSubscriber@onCreated'
        );

        $events->listen(
            UserUpdated::class,
            'App\Listeners\UserEventSubscriber@onUpdated'
        );
    }
}
