<x-backend.layouts.app>
    <x-slot name="title">
        Edit Role
    </x-slot>
    {{ html()->modelForm($role, 'PATCH', route('backend.roles.update', $role->id))->class('form-horizontal')->open() }}
    <x-backend.partials.card>
        <x-slot name="header">
            Edit Role
        </x-slot>
        <x-slot name="body">
            @include('backend.roles.form')
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Update')->class('btn btn-success pull-right') }}
            {{ html()->a('backend.roles.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-backend.partials.card>
    {{ html()->form()->close() }}
</x-backend.layouts.app>