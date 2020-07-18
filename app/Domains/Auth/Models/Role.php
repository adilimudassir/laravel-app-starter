<?php

namespace Domains\Auth\Models;

use Altek\Accountant\Contracts\Recordable;
use Illuminate\Support\Collection;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole implements Recordable
{
    use \Altek\Accountant\Recordable;

    /**
     * @return string
     */
    public function getPermissionsLabelAttribute(): string
    {
        if ($this->id === 1) {
            return 'All';
        }

        if (! $this->permissions->count()) {
            return 'None';
        }

        return collect($this->getPermissionDescriptions())
            ->implode('<br/>');
    }

    /**
     * @return Collection
     */
    public function getPermissionDescriptions(): Collection
    {
        return $this->permissions->pluck('description');
    }
}
