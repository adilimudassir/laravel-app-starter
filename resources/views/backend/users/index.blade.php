<x-backend.layouts.app>
    <x-slot name="title">
        Users
    </x-slot>
    <x-backend.partials.card>
        <x-slot name="body">
            <div class="row mb-2">
                <div class="col">
                    @can('create-users')
                    <a href="{{ route('backend.users.create') }}" class="btn btn-success btn-sm pull-right">CREATE</a>
                    @endcan
                </div>
            </div>
            <livewire:users-table />
        </x-slot>
    </x-backend.partials.card>
</x-backend.layouts.app>