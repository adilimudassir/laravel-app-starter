<?php

namespace App\Http\Livewire;

use Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\TableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Link;

class UsersTable extends TableComponent
{
    public $tableClass = 'table table-bordered';

    public function query(): Builder
    {
        return User::query();
    }

    public function columns(): array
    {
        return [
            Column::make('ID')
                ->searchable()
                ->sortable(),
            Column::make('Name')
                ->searchable()
                ->sortable(),
            Column::make('E-mail', 'email')
                ->searchable()
                ->sortable(),
            Column::make('Role', 'roles_label'),

            Column::make('Created At')
                ->searchable()
                ->sortable(),
            Column::make('Actions')
                ->view('users.actions'),
            // ->components([
            //     Link::make('Edit')
            //         ->icon('fas fa-pencil-alt')
            //         ->class('btn btn-primary btn-sm')
            //         ->href(function ($model) {
            //             return route('users.edit', $model->id);
            //         })
            //         ->hideIf(auth()->user()->can('users.edit')),
            //     Link::make('Delete')
            //         ->icon('fas fa-trash')
            //         ->class('btn btn-danger btn-sm')
            //         ->href(function ($model) {
            //             return route('users.delete', $model->id);
            //         })
            // ])
        ];
    }
}
