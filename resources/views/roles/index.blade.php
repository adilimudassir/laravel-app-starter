<x-layouts.app>
    <x-slot name="title">
        Roles
    </x-slot>
    <x-partials.card>
        <x-slot name="body">
            <div class="row mb-2">
                <div class="col">
                    @can('create-roles')
                        <a href="{{ route('roles.create') }}" class="btn btn-success btn-sm pull-right">CREATE</a>
                    @endcan
                </div>
            </div>
            <livewire:roles-table />
        </x-slot>
    </x-partials.card>
</x-layouts.app>