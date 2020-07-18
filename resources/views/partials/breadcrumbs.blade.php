@if($breadcrumbs)
    <ol class="breadcrumbs">
        @foreach($breadcrumbs as $breadcrumb)
            @if($breadcrumb->url && !$loop->last)
                <li>
                    <span><x-utils.link :href="$breadcrumb->url" :text="$breadcrumb->title" /></span>
            @else
                <li>{{ $breadcrumb->title }}</li>
            @endif
        @endforeach
    </ol>
@endif
