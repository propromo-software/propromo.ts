<script lang="ts">
	import { onMount } from "svelte";

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.component.js');
    });
</script>

<sl-progress-bar><slot>Progress Bar</slot></sl-progress-bar>
