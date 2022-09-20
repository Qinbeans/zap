<script lang="ts">
    import Editor from '../lib/editor.svelte';
    import type { File } from '../ts/type';
    import { file as g_file } from '../ts/store';

    let file: File = null;
    g_file.subscribe((value) => {
        file = value;
    });
</script>

<div class="bg-transparent">
    <Editor file={file}/>
</div>
