@props(['dismissable' => true, 'type' => 'success', 'ariaLabel' => 'Close'])

<div {{ $attributes->merge(['class' => 'alert alert-'.$type]) }} role="alert">
    @if ($dismissable)
        <button type="button" class="close" data-dismiss="alert" aria-label="{{ $ariaLabel }}">
            <span aria-hidden="true">&times;</span>
        </button>
    @endif

    {{ $slot }}
</div>
