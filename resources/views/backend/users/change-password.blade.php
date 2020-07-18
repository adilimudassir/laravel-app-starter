<x-backend.layouts.app>
    <x-slot name="title">
        Change User Password
    </x-slot>
    {{  html()->form('POST', route('backend.users.change-password', $user->id))->class('form-horizontal')->open() }}
    <x-backend.partials.card>
        <x-slot name="header">
            Change User Password
        </x-slot>
        <x-slot name="body">
            <div class="row">
                @if(Route::is('backend.change-password'))
                    <div class="form-group col-lg-12">
                        <x-forms.password name="current password" />
                    </div>
                @endif
                <div class="form-group col-lg-12">
                    <x-forms.password name="password" />
                </div>
                <div class="form-group col-lg-12">
                    <x-forms.confirm-password />
                </div>
            </div>
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Update')->class('btn btn-success pull-right') }}
            {{ html()->a('backend.users.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-backend.partials.card>
    {{ html()->form()->close() }}
</x-backend.layouts.app>