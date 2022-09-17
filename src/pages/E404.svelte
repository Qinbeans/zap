<script lang="ts">
    import '../assets/style.css'
</script>

<div class="w-screen h-screen grid place-content-center text-center">
    <h1>Error 404</h1>
    <span class="p-1 text-blue-400 bg-indigo-700 rounded-md cursor-pointer hover:bg-zinc-700" on:click={() => {
        window.location.href = '/'
    }}>Go back</span>
</div>