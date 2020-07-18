<x-layouts.app>
    <x-slot name="title">
        Create Role
    </x-slot>
    {{ html()->form('POST', route('roles.store'))->class('form-horizontal')->open() }}
    <x-partials.card>
        <x-slot name="header">
            Create Role
        </x-slot>
        <x-slot name="body">
            @include('roles.form')
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Submit')->class('btn btn-success pull-right') }}
            {{ html()->a('roles.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-partials.card>
    {{ html()->form()->close() }}
</x-layouts.app>