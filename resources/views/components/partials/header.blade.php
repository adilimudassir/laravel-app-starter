<header class="header">
	<div class="logo-container">
		<a href="{{ route('dashboard') }}" class="logo">
			<span class="font-16">
				Admin<strong>CP</strong>
			</span>
		</a>
		<div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html"
			data-fire-event="sidebar-left-opened">
			<i class="fas fa-bars" aria-label="Toggle sidebar"></i>
		</div>
	</div>
	
	<div class="header-right">
		<span class="separator"></span>
		<div id="userbox" class="userbox">
			<a href="#" data-toggle="dropdown">
				<figure class="profile-picture">
					<i class="fa fa-user"></i>
				</figure>
				<div class="profile-info" data-lock-name="{{ auth()->user()->name }}" data-lock-email="{{ auth()->user()->email }}">
					<span class="name">{{ auth()->user()->name }}</span>
					<span class="role">{{ auth()->user()->getRoleNames()->first() }}</span>
				</div>

				<i class="fa custom-caret"></i>
			</a>

			<div class="dropdown-menu">
				<ul class="list-unstyled mb-2">
					<li class="divider"></li>
					<li>
						<a role="menuitem" tabindex="-1" href="{{ route('profile') }}"><i class="fas fa-user"></i> My
							Profile</a>
					</li>
					<li>
						<a role="menuitem" tabindex="-1" href="{{ route('change-password') }}"><i class="fas fa-lock"></i>
						Change Password
						</a>
					</li>
					<li>
						<a role="menuitem" tabindex="-1" href="{{ route('auth.logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
							<i class="fas fa-power-off"></i>
							Logout
						</a>

						<form id="logout-form" action="{{ route('auth.logout') }}" method="POST"
							style="display: none;">
							@csrf
						</form>
					</li>

				</ul>
			</div>
		</div>
	</div>
</header>