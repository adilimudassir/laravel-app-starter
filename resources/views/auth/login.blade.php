<x-layouts.guest>
    <x-slot name="title">
        Login
    </x-slot>
    <a href="/" class="logo mt-3 float-left">
        <h2>{{ config('app.name') }}</h2>
    </a>

    <div class="panel card-sign">
        <div class="card-title-sign mt-3 text-right">
            <h2 class="title text-uppercase font-weight-bold m-0"><i class="fas fa-user mr-1"></i> Sign In</h2>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('auth.login') }}">
                @csrf
                <div class="form-group mb-3">
                    <x-forms.email name="email" />
                </div>
                <div class="form-group mb-3">
                    <x-forms.password name="password" />
                </div>

                <div class="row">
                    <div class="col-sm-8">
                        <div class="checkbox-custom checkbox-default">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                            <label class="form-check-label" for="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-4 text-right">
                        <button type="submit" class="btn btn-primary mt-2">Sign In</button>
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