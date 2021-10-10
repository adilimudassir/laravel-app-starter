<x-layouts.guest>
    <x-slot name="title">
        Register
    </x-slot>
    <a href="/" class="logo mt-3 float-left">
        <h2>{{ config('app.name') }}</h2>
    </a>

    <div class="panel card-sign">
        <div class="card-title-sign mt-3 text-right">
            <h2 class="title text-uppercase font-weight-bold m-0"><i class="fas fa-user mr-1"></i> Register</h2>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="form-group mb-3">
                    <x-forms.text name="name" />
                </div>
                <div class="form-group mb-3">
                    <x-forms.email name="email" />
                </div>
                <div class="form-group mb-3">
                    <x-forms.password name="password" />
                </div>
                <div class="form-group mb-3">
                    <x-forms.confirm-password />
                </div>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-block btn-primary mt-2">Register</button>
                    </div>
                </div>
                <a class="btn btn-link text-center" href="{{ route('login') }}">
                    Already have account?
                </a>
            </form>
        </div>
    </div>
</x-layouts.guest>