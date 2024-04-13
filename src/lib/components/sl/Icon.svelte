<script lang="ts">
	import { onMount } from "svelte";

    export let name: string = 'wrench-adjustable';

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/icon/icon.component.js');
    });
</script>

<sl-icon {name}><slot>Icon</slot></sl-icon>
