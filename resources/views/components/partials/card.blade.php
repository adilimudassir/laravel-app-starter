<div class="card">
    @if (isset($header))
    <div class="card-header">
        {{ $header }}
        @if (isset($headerActions))
        <div class="card-header-actions">
            {{ $headerActions }}
        </div>
        @else
        <div class="card-actions">
            <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
            <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
        </div>
        @endif
    </div>
    @endif
    @if (isset($body))
    <div class="card-body">
        {{ $body }}
    </div>
    @endif
    @if (isset($footer))
    <div class="card-footer">
        {{ $footer }}
    </div>
    @endif
</div>