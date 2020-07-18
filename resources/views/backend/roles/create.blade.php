<x-backend.layouts.app>
    <x-slot name="title">
        Create Role
    </x-slot>
    {{ html()->form('POST', route('backend.roles.store'))->class('form-horizontal')->open() }}
    <x-backend.partials.card>
        <x-slot name="header">
            Create Role
        </x-slot>
        <x-slot name="body">
            @include('backend.roles.form')
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Submit')->class('btn btn-success pull-right') }}
            {{ html()->a('backend.roles.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-backend.partials.card>
    {{ html()->form()->close() }}
</x-backend.layouts.app>