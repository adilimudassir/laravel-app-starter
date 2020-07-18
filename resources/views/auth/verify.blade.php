<x-layouts.app>
    <x-slot name="title">
        Verify Email Address
    </x-slot>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Verify Your Email Address</div>

                    <div class="card-body">

                        Before proceeding, please check your email for a verification link.
                        If you did not receive the email,
                        <form class="d-inline" method="POST" action="{{ route('auth.verification.resend') }}">
                            @csrf
                            <button type="submit" class="btn btn-link p-0 m-0 align-baseline">click here to request another</button>.
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layouts.app>