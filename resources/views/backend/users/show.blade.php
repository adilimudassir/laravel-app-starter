<x-backend.layouts.app>
    <x-slot name="title">
        View User
    </x-slot>
    <div class="row">
        <div class="col">
           @can('update-users')
                <div class="btn-group flex-wrap pull-right">
                    <a href="{{ route('backend.users.edit', $user->id) }}" class="btn btn-sm btn-success">EDIT</a>
                </div>
           @endcan
        </div>
    </div>
    @include('backend.partials._user-details', ['user' => $user])
</x-backend.layouts.app>