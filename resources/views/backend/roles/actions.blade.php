
    <x-utils.action-button 
        name="view" 
        :href="route('backend.roles.show', $model)" 
        permission="read-roles"
        class="btn btn-info btn-sm" 
        icon="fas fa-search"
    />
    @if($model->id !== 1)
        <x-utils.action-button 
            name="edit" 
            :href="route('backend.roles.edit', $model)" 
            permission="update-roles" 
            class="btn btn-success btn-sm"
            icon="fas fa-edit"
        />
        <x-utils.delete-button 
            :href="route('backend.roles.delete', $model)" 
            permission="delete-roles" 
            class="btn btn-danger btn-sm" 
            icon="fas fa-trash"
        />
    @endif