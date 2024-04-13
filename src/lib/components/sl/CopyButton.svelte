<script lang="ts">
	import { onMount } from "svelte";

    export let text: string;

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/copy-button/copy-button.component.js');
    });
</script>

<sl-icon-button value={text}><slot>Spinner</slot></sl-icon-button>
