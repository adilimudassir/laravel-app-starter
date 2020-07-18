<?php

namespace Backend\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AccessBackend
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! Auth::check()) {
            return redirect(home_route());
        }

        if (! optional(optional(auth())->user())->can('access-backend')) {
            return redirect(home_route());
        }

        return $next($request);
    }
}
