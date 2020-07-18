@impersonating
    <div class="alert alert-warning justify-content-center text-center">
        You are currently logged in as {{ auth()->user()->name }} <a href="{{ route('impersonate.leave') }}">Return to your account</a>.
    </div><!--alert alert-warning-->
@endImpersonating
