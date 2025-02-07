    <div x-data="{ tab: 'simple' }">
        <x-filament-panels::resources.tabs />
        <x-filament::tabs label="Content tabs" class="w-fit">
            <x-filament::tabs.item @click="tab = 'simple'" :alpine-active="'tab === \'simple\''">
                Simple
            </x-filament::tabs.item>
            <x-filament::tabs.item @click="tab = 'compound'" :alpine-active="'tab === \'compound\''">
                Compound
            </x-filament::tabs.item>
        </x-filament::tabs>

        <div class="mt-2">
            <div x-show="tab === 'simple'">
                <livewire:list-ingredients/>
            </div>
            <div x-show="tab === 'compound'">
                <livewire:list-compound-ingredients/>
            </div>
        </div>
    </div>
