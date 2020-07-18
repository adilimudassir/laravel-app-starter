
    <x-utils.action-button 
        name="view" 
        :href="route('backend.users.show', $model)" 
        permission="read-users"
        class="btn btn-info btn-sm" 
        icon="fas fa-search"
    />
    <x-utils.action-button 
        name="edit" 
        :href="route('backend.users.edit', $model)" 
        permission="update-users" 
        class="btn btn-success btn-sm"
        icon="fas fa-edit"
    />
    @if ($model->id !== 1 && $model->id !== auth()->id())
        <x-utils.delete-button 
            :href="route('backend.users.delete', $model)" 
            permission="delete-users" 
            class="btn btn-danger btn-sm" 
            icon="fas fa-trash"
        />
    @endif

    @if ($model->isActive())
        <div class="dropdown d-inline-block">
            <a class="btn btn-sm btn-secondary dropdown-toggle" id="dropdownMenuLink" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="margin: 0px;">
                <a class="dropdown-item" href="#">Clear Session</a>
                @canBeImpersonated($model)
                    <x-utils.link
                        :href="route('impersonate', $model->id)"
                        class="dropdown-item"
                        :text="'Login as ' . $model->name"
                        permission="impersonate-users" 
                    />
                @endCanBeImpersonated
                <x-utils.link
                    :href="route('backend.users.change-password', $model->id)"
                    class="dropdown-item"
                    :text="'Change Password'"
                    permission="update-users" 
                />
            </div>
        </div>
    @endif