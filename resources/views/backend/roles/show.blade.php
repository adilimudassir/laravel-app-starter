<x-backend.layouts.app>
    <x-slot name="title">
        View Role
    </x-slot>
    <div class="row">
        <div class="col">
            @can('update-roles')
                <div class="btn-group flex-wrap pull-right">
                    <a href="{{ route('backend.roles.edit', $role->id) }}" class="btn btn-sm btn-success">EDIT</a>
                </div>
            @endcan
        </div>
    </div>
    <x-backend.partials.tabs>
        <x-slot name="headers">
            <x-backend.partials.tab-header id="overview" :active="true">
                Overview
            </x-backend.partials.tab-header>
        </x-slot>
        <x-slot name="contents">
            <x-backend.partials.tab-content id="overview" :active="true">
                <table class="table table-bordered">
                    <tr>
                        <th>Name</th>
                        <td>{{ $role->name }}</td>
                    </tr>
                    <tr>
                        <th>Permissions</th>
                        <td>
                            <table class="table table-bordered">
                                @foreach($role->permissions as $key => $permission)
                                <tr>
                                    <td>{{++$key}}</td>
                                    <td>{{ $permission->description }}</td>
                                </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>
                </table>
            </x-backend.partials.tab-content>
        </x-slot>
    </x-backend.partials.tabs>
</x-backend.layouts.app>