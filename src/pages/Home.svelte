<script lang="ts">
    import '../assets/style.css'
</script>

<div class="home w-screen h-screen grid place-content-center text-center">
    <h1>Welcome, Let's get started</h1>
    <div class="flex justify-center">
        <ul class="flex gap-1 flex-col w-fit text-blue-400">
            <li class="p-1 bg-indigo-700 rounded-md cursor-pointer hover:bg-zinc-700">
                Settings
            </li>
            <li class="p-1 bg-indigo-700 rounded-md cursor-pointer hover:bg-zinc-700" on:click={() => {
                window.location.href = '/editor'
            }}>
                New
            </li>
            <li class="p-1 bg-indigo-700 rounded-md cursor-pointer hover:bg-zinc-700" on:click={() => {
                window.location.href = '/open'
            }}>
                Open
            </li>
        </ul>
    </div>
</div>