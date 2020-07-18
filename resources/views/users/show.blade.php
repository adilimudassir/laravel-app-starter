<x-layouts.app>
    <x-slot name="title">
        View User
    </x-slot>
    <div class="row">
        <div class="col">
           @can('update-users')
                <div class="btn-group flex-wrap pull-right">
                    <a href="{{ route('users.edit', $user->id) }}" class="btn btn-sm btn-success">EDIT</a>
                </div>
           @endcan
        </div>
    </div>
    @include('partials._user-details', ['user' => $user])
</x-layouts.app>