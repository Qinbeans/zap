<script lang="ts">
    import { open } from "@tauri-apps/api/dialog";
    import { BaseDirectory, createDir, exists, writeFile } from "@tauri-apps/api/fs";
    import { settings as g_setting } from "../ts/store";
    import { find_lang_by_name, languages, themes } from "../ts/type";

    let settings;
    g_setting.subscribe((value) => {
        settings = value;
    });

    const change_font = (event) => {
        settings.font_size = parseInt((event.target as HTMLTextAreaElement).value);
    }

    const change_tab = (event) => {
        settings.tab_size = parseInt((event.target as HTMLTextAreaElement).value);
    }

    const change_loc = async () => {
        await open({
            directory: true,
            multiple: false,
        }).then((value) => {
            settings.location = value.toString();
            settings.default_file.path = value.toString();
        });
    }

    const select_theme = (event) => {
        settings.theme = (event.target as HTMLTextAreaElement).value;
    }

    const select_lang = (event) => {
        settings.default_file.language = find_lang_by_name((event.target as HTMLTextAreaElement).value);
    }
    const change_file_name = (event) => {
        settings.default_file.name = (event.target as HTMLTextAreaElement).value;
    }
    const change_file_content = (event) => {
        settings.default_file.content = (event.target as HTMLTextAreaElement).value;
    }
    const save = async () => {
        await exists("zap",{
            dir: BaseDirectory.Config
        }).catch(async (err) => {
            createDir("zap",{
                dir: BaseDirectory.Config
            });
        });
        await writeFile({
            contents: JSON.stringify(settings),
            path: "zap/settings.json",
        },{
            dir: BaseDirectory.Config
        }).then(() => alert("Saved")).catch((err) => {
            console.log(err);
        });
    }

</script>
<div
    class="text-2xl w-fit p-1 text-secondary opacity-70 bg-slate-700 rounded-md cursor-pointer text-center hover:bg-zinc-700 border-solid border-secondary border-2"
    on:click={() => {
        window.location.href = "/";
    }}>
    Back
</div>
<div class="pt-6 w-full h-fit grid place-content-center grid-cols-1">    
    <div class="w-full flex justify-center">
        <div class="p-1 bg-slate-700 opacity-70 w-3/4 text-center rounded-md border-solid border-secondary border-2">
            <span class="text-4xl underline text-secondary">Font</span>
            <div class="flex justify-center">
                <label for="font-size" class="w-2/12 text-2xl text-secondary">
                    Font Size
                    <input id="font-size" type="number" step=1 max="36" min="16" class="text-center w-5/12 bg-default rounded-md" value={settings.font_size} on:click={change_font}>px
                </label>
            </div>
        </div>
    </div>
    <div class="divider" />
    <div class="w-full flex justify-center">
        <div class="p-1 bg-slate-700 opacity-70 w-3/4 text-center rounded-md border-solid border-secondary border-2">
            <span class="text-4xl underline text-secondary">Editor</span>
            <ul class="flex justify-center flex-col gap-1">
                <li>
                    <label for="tab-size" class="text-2xl text-secondary">
                        Tab Size
                        <input id="tab-size" type="number" step=1 max="6" min="1" class="text-center bg-default rounded-md" value={settings.tab_size} on:change={change_tab}>px
                    </label>
                </li>
                <li>
                    <label for="theme" class="text-2xl text-secondary">
                        Theme
                        <select
                            class="w-fit p-1 text-blue-400 bg-default rounded-md cursor-pointer text-center hover:bg-zinc-700"
                            name="theme"
                            id="theme-sel"
                            width="100%"
                            on:change={select_theme}
                        >
                            {#each themes as theme}
                                {#if theme == settings.theme}
                                    <option value={theme} selected>{theme}</option>
                                {:else}
                                    <option value={theme}>{theme}</option>
                                {/if}
                            {/each}
                        </select>
                    </label>
                </li>
                <li>
                    <!-- location -->
                    <label for="location" class="text-2xl text-secondary">
                        Location
                        <span
                            class="p-1 text-blue-400 bg-default rounded-md cursor-pointer text-center hover:bg-zinc-700"
                            on:click={change_loc}
                        >
                            {settings.location}
                        </span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
    <div class="divider" />
    <div class="w-full flex justify-center">
        <div class="p-1 bg-slate-700 opacity-70 w-3/4 text-center rounded-md border-solid border-secondary border-2">
            <span class="text-4xl underline text-secondary">Default</span>
            <ul class="flex justify-center flex-col gap-1">
                <li>
                    <label for="language" class="w-2/12 text-2xl text-secondary">
                        Language
                        
                        <select
                            class="w-fit p-1 text-blue-400 bg-default rounded-md cursor-pointer text-center hover:bg-zinc-700"
                            name="theme"
                            id="theme-sel"
                            width="100%"
                            on:change={select_lang}
                        >
                            {#each languages as language}
                                {#if language.name == settings.default_file.language.name}
                                    <option value={language.name} selected>{language.name}</option>
                                {:else}
                                    <option value={language.name}>{language.name}</option>
                                {/if}
                            {/each}
                        </select>
                    </label>
                </li>
                <li>
                    <label for="file-name" class="w-2/12 text-2xl text-secondary">
                        File Name
                        <input id="file-name" type="text" class="text-center bg-default rounded-md" value={settings.default_file.name} on:change={change_file_name}>
                    </label>
                </li>
                <li>
                    <label for="file-content" class="w-2/12 text-2xl text-secondary">
                        File Content
                        <textarea id="file-content" class="bg-default rounded-md" value={settings.default_file.content} on:change={change_file_content}/>
                    </label>
                </li>
            </ul>
        </div>
    </div>
    <div class="divider" />
    <div class="flex justify-center">
        <div
            class="text-2xl w-fit p-1 text-secondary opacity-70 bg-slate-700 rounded-md cursor-pointer text-center hover:bg-zinc-700 border-solid border-secondary border-2"
            on:click={save}
        >
            Save
        </div>
    </div>
</div>