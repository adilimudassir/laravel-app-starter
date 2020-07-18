<x-layouts.guest>
    <x-slot name="title">
        Verify Email Address
    </x-slot>
    <a href="/" class="logo mt-3 float-left">
        <h2>{{ config('app.name') }}</h2>
    </a>

    <div class="panel card-sign">
        <div class="card-title-sign mt-3 text-right">
            <h2 class="title text-uppercase font-weight-bold m-0"><i class="fas fa-user mr-1"></i> Verify Your Email Address</h2>
        </div>
        <div class="card-body text-center">
            Before proceeding, please check your email for a verification link. If you did not receive the email,
            <form class="d-inline" method="POST" action="{{ route('auth.verification.resend') }}">
                @csrf
                <button type="submit" class="btn btn-link p-0 m-0 align-baseline">click here to request another</button>.
            </form>
        </div>
    </div>
</x-layouts.guest>