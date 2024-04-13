<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => { // needs if(browser) api-functions
        await import('@shoelace-style/shoelace/dist/components/button/button.component.js');
    });
</script>

<sl-button {...$$props}><slot>Button</slot></sl-button>
