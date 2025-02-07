<x-filament-panels::page>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <x-filament-panels::form wire:submit="save" class="">
            {{ $this->form }}
     
            <x-filament-panels::form.actions
                :actions="$this->getCachedFormActions()"
                :full-width="$this->hasFullWidthFormActions()"
            />
        </x-filament-panels::form>
     
        @if (count($relationManagers = $this->getRelationManagers()))
            <x-filament-panels::resources.relation-managers
                :active-manager="$this->activeRelationManager"
                :managers="$relationManagers"
                :owner-record="$record"
                :page-class="static::class"
            />
        @endif

    </div>
</x-filament-panels::page>