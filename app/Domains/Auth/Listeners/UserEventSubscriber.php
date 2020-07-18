<?php

namespace Domains\Auth\Listeners;

use Domains\Auth\Events\UserCreated;
use Domains\Auth\Events\UserLoggedIn;
use Domains\Auth\Events\UserLoggedOut;
use Domains\Auth\Events\UserUpdated;

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
            'Domains\Auth\Listeners\UserEventSubscriber@onLoggedIn'
        );

        $events->listen(
            UserLoggedOut::class,
            'Domains\Auth\Listeners\UserEventSubscriber@onLoggedOut'
        );

        $events->listen(
            UserCreated::class,
            'Domains\Auth\Listeners\UserEventSubscriber@onCreated'
        );

        $events->listen(
            UserUpdated::class,
            'Domains\Auth\Listeners\UserEventSubscriber@onUpdated'
        );
    }
}
