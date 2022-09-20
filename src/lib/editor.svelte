<script lang="ts">
    import Panel from './panel.svelte';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import TextEditor from './text_editor.svelte';
    import FaSolidChevronRight from 'svelte-icons-pack/fa/FaSolidChevronRight';
    import FaSolidChevronLeft from 'svelte-icons-pack/fa/FaSolidChevronLeft';
    import { settings as g_settings } from '../ts/store';
    import { languages, type File, type Settings } from '../ts/type';

    export let file: File = null;

    let show:boolean = false;

    //get default settings
    let settings: Settings;

    g_settings.subscribe((value) => {
        settings = value;
    });
    
    if(settings.default_file != undefined && file != undefined){
        if(file == null){
            file = settings.default_file;
        }
        console.log(file);
    }

</script>
<div class="z-50 fixed {show?'w-1/5':'w-fit'}">
    <div class="w-full flex justify-center">
        <Panel show={show}/>
    </div>
    <div class="flex">
        {#if show}
            <div class="w-full bg-black opacity-30" />
        {/if}
        <div class="z-10 relative cursor-pointer h-screen grid place-content-center bg-black opacity-50 hover:opacity-40" on:click={
            () => {
                show = !show;
            }
        }>
            {#if show}
                <Icon src={FaSolidChevronLeft} color="rgb(253, 126, 255)" className="bg-transparent" />
            {:else}
                <Icon src={FaSolidChevronRight} color="rgb(253, 126, 255)" className="bg-transparent" />
            {/if}
        </div>
    </div>
</div>
<TextEditor
    text={(file == null)?"" : file.content}
    mode={(file.language == null)?"text" : file.language.id}
    theme={settings.theme}
    fontSize={settings.font_size}
    tabSize={settings.tab_size}
/>