<script lang="ts">
	import { onMount } from "svelte";

    export let name: string = 'wrench-adjustable';

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/icon-button/icon-button.component.js');
    });
</script>

<sl-icon-button {name}><slot>Spinner</slot></sl-icon-button>
