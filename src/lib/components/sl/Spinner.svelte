<script lang="ts">
	import { onMount } from "svelte";

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/spinner/spinner.component.js');
    });
</script>

<sl-spinner><slot>Spinner</slot></sl-spinner>
