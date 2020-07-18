<?php

namespace Domains\Auth\Listeners;

use Domains\Auth\Events\RoleCreated;
use Domains\Auth\Events\RoleUpdated;

class RoleEventSubscriber
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
     * @param [type] $event
     * @return void
     */
    public function onCreated($event)
    {
        \Log::info('Role Created: '.$event->Role->name.'. By: '.request()->Role()->name);
    }

    /**
     * @param [type] $event
     * @return void
     */
    public function onUpdated($event)
    {
        \Log::info('Role Updated: '.$event->Role->name.'. By: '.request()->Role()->name);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            RoleCreated::class,
            'Domains\Auth\Listeners\RoleEventSubscriber@onCreated'
        );

        $events->listen(
            RoleUpdated::class,
            'Domains\Auth\Listeners\RoleEventSubscriber@onUpdated'
        );
    }
}
