@if (isset($permission))
    @if (auth()->user()->can($permission))
        <x-utils.form-button
            :action="$href"
            method="delete"
            name="delete-item"
            :button-class="$class"
        >
            <i class="{{ $icon }}"></i> {{ $text ?? 'Delete' }}
        </x-utils.form-button>
    @endif
@else
    <x-utils.form-button
        :action="$href"
        method="delete"
        name="delete-item"
        :button-class="$class"
    >
        <i class="{{ $icon }}"></i> {{ $text ?? 'Delete' }}
    </x-utils.form-button>
@endif
