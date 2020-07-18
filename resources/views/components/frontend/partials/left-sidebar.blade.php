<aside id="sidebar-left" class="sidebar-left">
    <div class="sidebar-header">
        <div class="sidebar-title">
            Navigation
        </div>
        <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html"
            data-fire-event="sidebar-left-toggle">  
            <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>
    <div class="nano">
        <div class="nano-content">
            <nav id="menu" class="nav-main" role="navigation">
                <ul class="nav nav-main">
                    <li class="{{ Route::is('backend.dashboard') ? 'nav-active' : '' }}">
                        <a class="nav-link" href="{{ route('backend.dashboard') }}">
                            <i class="fas fa-home" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    @if(auth()->user()->hasAnyPermission(['read-users', 'read-roles'])) 
                        <li class="nav-parent {{ 
                            Route::is('backend.users.*') || Route::is('backend.roles.*')
                            ? 'nav-expanded nav-active' 
                            : '' 
                        }}">
                            <a class="nav-link" href="#">
                                <i class="fas fa-lock" aria-hidden="true"></i>
                                <span>Authentication</span>
                            </a>
                            <ul class="nav nav-children">
                                @can('read-users')
                                    <li class="{{ Route::is('backend.users.*') ? 'nav-active' : '' }}">
                                        <a class="nav-link" href="{{ route('backend.users.index') }}">
                                            Users
                                        </a>
                                    </li>
                                @endcan
                                @can('read-roles')
                                    <li class="{{ Route::is('backend.roles.*') ? 'nav-active' : '' }}">
                                        <a class="nav-link" href="{{ route('backend.roles.index') }}">
                                            Roles
                                        </a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endif
                    @if(auth()->user()->isSuperAdmin())
                        <li>
                            <a class="nav-link" href="{{ URL::to('admin/log-viewer') }}">
                                <i class="fas fa-archive" aria-hidden="true"></i>
                                <span>Log-Viewer</span>
                            </a>
                        </li>
                    @endif
                </ul>
            </nav>
        </div>
    </div>
</aside>