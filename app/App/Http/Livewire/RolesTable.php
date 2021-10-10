<?php

namespace App\Http\Livewire;

use Domains\Auth\Models\Role;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\DataTableComponent;

class RolesTable extends DataTableComponent
{
    public function query(): Builder
    {
        return Role::with('permissions:id,name,description')
            ->withCount('users');
    }

    public function columns(): array
    {
        return [
            Column::make('ID', 'id')
                ->searchable()
                ->sortable(),
            Column::make('Name')
                ->sortable()
                ->searchable(),
            Column::make('Permissions', 'permissions_label')
                ->searchable(
                    fn ($builder, $term) =>
                    $builder->orWhereHas(
                        'permissions',
                        fn ($query)  =>
                        $query->where('name', 'like', '%' . $term . '%')
                    )
                )->asHtml(),
            Column::make('Number of Users', 'users_count')
                ->sortable(),
            Column::make('Actions')
                ->format(fn ($row) => view('backend.roles.actions')->withModel($row)),
        ];
    }
}
