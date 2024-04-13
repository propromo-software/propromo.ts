<script lang="ts">
	import { onMount } from "svelte";

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/alert/alert.component.js');
    });
</script>

<sl-alert><slot>Spinner</slot></sl-alert>
