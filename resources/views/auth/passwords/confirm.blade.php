<x-layouts.guest>
    <x-slot name="title">
        Confirm Password
    </x-slot>
    <a href="/" class="logo mt-3 float-left">
        <h2>{{ config('app.name') }}</h2>
    </a>

    <div class="panel card-sign">
        <div class="card-title-sign mt-3 text-right">
            <h2 class="title text-uppercase font-weight-bold m-0"><i class="fas fa-user mr-1"></i> Confirm Password</h2>
        </div>
        <div class="card-body">
            Please confirm your password before continuing.
            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf
                <div class="form-group mb-3">
                    <x-forms.password name="password" />
                </div>

                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-block btn-primary mt-2">Confirm Password</button>
                    </div>
                </div>
                @if (Route::has('auth.password.request'))
                <a class="btn btn-link text-center" href="{{ route('auth.password.request') }}">
                    Forgot Your Password?
                </a>
                @endif
            </form>
        </div>
    </div>
</x-layouts.guest>