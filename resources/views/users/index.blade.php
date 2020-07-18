<x-layouts.app>
    <x-slot name="title">
        Users
    </x-slot>
    <x-partials.card>
        <x-slot name="body">
            <div class="row mb-2">
                <div class="col">
                    @can('create-users')
                    <a href="{{ route('users.create') }}" class="btn btn-success btn-sm pull-right">CREATE</a>
                    @endcan
                </div>
            </div>
            <livewire:users-table />
        </x-slot>
    </x-partials.card>
</x-layouts.app>