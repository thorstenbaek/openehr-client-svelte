<script lang="ts">
	import Compositions from './Compositions.svelte';
    import {openEHR} from "./openehrStore.ts";
</script>

{#if $openEHR}
    Welcome to OpenEHR!
    <Compositions/>    
{:else}
    Loading client...
{/if}

