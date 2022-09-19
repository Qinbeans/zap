<script lang="ts">
    import '../assets/style.css'
    import { open } from '@tauri-apps/api/dialog';
    import { invoke } from '@tauri-apps/api/tauri'; 
    const quit = () => {
        invoke('quit');
    }
</script>

<div class="bg-default w-screen h-screen grid place-content-center text-center">
    <span class="text-4xl text-secondary">Welcome, Let's get started</span>
    <div class="divider "></div>
    <div class="flex justify-center">
        <ul class="text-2xl flex gap-4 flex-col w-fit text-secondary">
            <li class="p-1 bg-tertiary rounded-md cursor-pointer hover:bg-zinc-700" on:click={() => {
                window.location.href = '/settings'
            }}>
                Settings
            </li>
            <li class="p-1 bg-tertiary rounded-md cursor-pointer hover:bg-zinc-700" on:click={() => {
                window.location.href = '/editor'
            }}>
                New
            </li>
            <li class="p-1 bg-tertiary rounded-md cursor-pointer hover:bg-zinc-700" on:click={async () => {
                await open({
                    multiple: false,
                }).then((res) => {
                    console.log("Home Open:",res)
                    //flatten res from list to string
                    const path = res.toString()
                    if (path) {
                        window.location.href = `/editor?file=${path}`
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }}>
                Open File
            </li>
            <li class="p-1 bg-tertiary rounded-md cursor-pointer hover:bg-zinc-700" on:click={quit}>
                Quit
            </li>
        </ul>
    </div>
</div>