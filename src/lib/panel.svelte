<script lang="ts">
    import { Settings, File, themes } from '../ts/type'
    import { settings as g_settings, file as g_file } from '../ts/store'
    import { save } from '@tauri-apps/api/dialog'
    import { writeFile } from '@tauri-apps/api/fs';
    
    export let show:boolean = false;
    let file:File = null;

    g_file.subscribe(value => {
        file = value;
    })

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
    const change_font = (e) => {
        const value = (e.target as HTMLTextAreaElement).value
        g_settings.update((settings) => {
            settings.font_size = parseInt(value)
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
            <li >
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
            <li class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700">
                Font Size
                <input class="text-center bg-transparent" type="number" value={settings.font_size} step="1" max="36" min="16" on:change={change_font}/>
            </li>
            <li
                class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                on:click={async () => {
                    console.log("Saving")
                    await save({
                        filters: [
                            {
                                name: "All Files",
                                extensions: ["*"]
                            }
                        ]
                    }).catch((err) => {
                        console.log(err)
                    }).then((res) => {
                        if (res) {
                            g_file.update((val) => {
                                let split = res.split("/")
                                if(split.length == 1){
                                    split = res.split("\\")
                                }
                                val.name = split.pop().split(".")[0]
                                val.path = split.join("/") + "/"
                                console.log(val)
                                return file
                            })
                            writeFile(
                                res,
                                file.content
                            ).catch((err) => {
                                console.log(err)
                            })
                        }
                    })
                }}
            >
                Save As
            </li>
            <li
                class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer text-center hover:bg-zinc-700"
                on:click={async () => {
                    if(file.path.length > 0){
                        writeFile(
                            `${file.path}${file.name}.${file.language.extension}`,
                            file.content
                        ).catch((err) => {
                            console.log(err)
                        })
                    }else{
                        await save({
                            filters: [
                                {
                                    name: "All Files",
                                    extensions: ["*"]
                                }
                            ]
                        }).catch((err) => {
                            console.log(err)
                        }).then((res) => {
                            if (res) {
                                g_file.update((val) => {
                                    let split = res.split("/")
                                    if(split.length == 1){
                                        split = res.split("\\")
                                    }
                                    val.name = split.pop().split(".")[0]
                                    val.path = split.join("/") + "/"
                                    console.log(val)
                                    return file
                                })
                                writeFile(
                                    res,
                                    file.content
                                ).catch((err) => {
                                    console.log(err)
                                })
                            }
                        })
                    }
                }}
            >
                Save
            </li>
        </ul>
    </div>
{/if}