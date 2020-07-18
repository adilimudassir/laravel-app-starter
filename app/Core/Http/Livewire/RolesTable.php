<?php

namespace App\Http\Livewire;

use Domains\Auth\Models\Role;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class RolesTable extends TableComponent
{
    public $tableClass = 'table table-bordered';

    public function query(): Builder
    {
        return Role::with('permissions:id,name,description')
            ->withCount('users');
    }

    public function columns(): array
    {
        return [
            Column::make('ID')
                ->searchable()
                ->sortable(),
            Column::make('Name')
                ->sortable()
                ->searchable(),
            Column::make('Permissions', 'permissions_label')
                ->customAttribute()
                ->html()
                ->searchable(function ($builder, $term) {
                    return $builder->orWhereHas('permissions', function ($query) use ($term) {
                        return $query->where('name', 'like', '%'.$term.'%');
                    });
                }),
            Column::make('Number of Users', 'users_count')
                ->sortable(),
            Column::make('Actions')
                ->view('backend.roles.actions'),
        ];
    }
}
