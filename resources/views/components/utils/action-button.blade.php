@if (isset($permission))
    @if (auth()->user()->can($permission))
        <x-utils.link :href="$href" :class="$class" :icon="$icon" :text="ucfirst($name)" />
    @endif
@else
    <x-utils.link :href="$href" :class="$class" :icon="$icon" :text="ucfirst($name)" />
@endif
