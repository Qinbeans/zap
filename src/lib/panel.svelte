<script lang="ts">
    import { Settings, File, themes } from '../ts/type'
    import { settings as g_settings } from '../ts/store'
    import { invoke } from '@tauri-apps/api/tauri';
    
    export let show:boolean = false;
    export let file:File = null;

    let settings: Settings;
    g_settings.subscribe((value) => {
        settings = value;
    });
    const select = (e) => {
                        const value = (e.target as HTMLTextAreaElement).value
                        g_settings.update((settings) => {
                            settings.theme = value
                            return settings
                        })
                    }
    const name_file = (e) => {
                        const value = (e.target as HTMLTextAreaElement).value
                        g_settings.update((settings) => {
                            settings.default_file.name = value
                            return settings
                        })
                    }
    const set_path = (e) => {
                        const value = (e.target as HTMLTextAreaElement).value
                        g_settings.update((settings) => {
                            settings.default_file.name = value + settings.default_file.name
                            return settings
                        })
                    }
</script>
{#if show}
    <div class="z-20 fixed w-1/6">
        <ul class="flex flex-col gap-1">
            <li class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700" on:click={() => {
                window.location.href = '/'
            }}>
                Home
            </li>
            {#if file==settings.default_file}
                <li >
                    <input
                        class="w-full p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                        type="text"
                        placeholder="/path/to/file"
                        required
                        on:change={set_path}
                    >
                </li>
            {/if}
            <li >
                <input
                    class="w-full p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                    type="t0x52696365ext"
                    placeholder="untitled"
                    required
                    on:change={name_file}
                >
            </li>
            <li>
                <select
                    class="w-full p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                    name="theme"
                    id="theme-sel"
                    width="100%"
                    on:change={select}
                >
                    {#each themes as theme}
                        {#if theme == settings.theme}
                            <option value={theme} selected>{theme}</option>
                        {:else}
                            <option value={theme}>{theme}</option>
                        {/if}
                    {/each}
                </select>
            </li>
            <li
                class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                on:click={() => {
                    console.log("Saving")
                    if(file==null){
                        alert('The file is too ambiguous')
                    }
                    invoke('save_file', {
                        content: file.content,
                        language: file.language,
                        name: file.name
                    }).catch((err) => {
                        console.log(err)
                    }).then((res) => {
                        console.log(res)
                    })
                }}
            >
                Save
            </li>
        </ul>
    </div>
{/if}