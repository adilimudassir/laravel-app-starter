<x-layouts.app>
    <x-slot name="title">
        Edit Role
    </x-slot>
    {{ html()->modelForm($role, 'PATCH', route('roles.update', $role->id))->class('form-horizontal')->open() }}
    <x-partials.card>
        <x-slot name="header">
            Edit Role
        </x-slot>
        <x-slot name="body">
            @include('roles.form')
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Update')->class('btn btn-success pull-right') }}
            {{ html()->a('roles.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-partials.card>
    {{ html()->form()->close() }}
</x-layouts.app>