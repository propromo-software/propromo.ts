<script lang="ts">
	import { onMount } from "svelte";

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/input/input.component.js');
    });
</script>

<sl-input><slot>Input</slot></sl-input>
