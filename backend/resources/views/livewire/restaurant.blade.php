<div class="grid grid-cols-2 gap-4">
    {{-- Restaurant form --}}
    <div>
        <form wire:submit.prevent="save">
            @csrf
            {{-- Include restaurant fields here --}}
            <input type="text" wire:model="restaurant.name" placeholder="Restaurant Name" />

            <button type="submit">Save</button>
        </form>
    </div>

    {{-- Branches table --}}
    <div>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Branch Name</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($branches as $branch)
                    <tr>
                        <td>{{ $branch->name }}</td>
                        <td>{{ $branch->location }}</td>
                        <td>
                            <button wire:click="edit({{ $branch->id }})">Edit</button>
                            <button wire:click="delete({{ $branch->id }})">Delete</button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
