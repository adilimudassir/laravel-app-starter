<x-layouts.app>
    <x-slot name="title">
        Edit User
    </x-slot>
    {{  html()->modelForm($user, 'PATCH', route('users.update', $user->id))->class('form-horizontal')->open() }}
    <x-partials.card>
        <x-slot name="header">
            Edit User
        </x-slot>
        <x-slot name="body">
            <div class="row">
                <div class="form-group col-lg-12">
                    <x-forms.text name="name" />
                </div>
                <div class="form-group col-lg-12">
                    <x-forms.email name="email" />
                </div>
                <div class="form form-group col-lg-12">
                    <x-forms.multiple-checkbox name="roles" :modelValues="$user->getRoleNames()" :options="$roles" />        
                </div>
                <div class="form-group col-lg-12">
                    <x-forms.checkbox name="status" :checked="$user->isActive()" labelName="Active" value="Active" />
                </div>
                <div class="form-group col-lg-12">
                    <x-forms.checkbox name="confirmed" :checked="$user->hasVerifiedEmail()" labelName="Yes" value="True" />
                </div>
            </div>
        </x-slot>
        <x-slot name="footer">
            {{ html()->submit('Update')->class('btn btn-success pull-right') }}
            {{ html()->a('users.index', 'Back')->class('btn btn-danger') }}
        </x-slot>
    </x-partials.card>
    {{ html()->form()->close() }}
</x-layouts.app>