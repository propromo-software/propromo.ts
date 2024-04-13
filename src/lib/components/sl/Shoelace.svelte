<script>
	/* Svelte */
    import { onMount } from 'svelte';

    /* Shoelace */
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
	setBasePath('/'); // asset location

    onMount(async () => {
        // imports and activates all shoelace web-components
        await import('@shoelace-style/shoelace/dist/shoelace.js');
    });
</script>

<slot>
    no shoelace component passed...
</slot>

<!-- {#await import("@shoelace-style/shoelace/dist/components/<component__entry_path>")} -->
    <!-- promise is pending -->
<!-- {:then value} -->
    <!-- use component -->
<!-- {:catch error} -->
    <!-- promise was rejected -->
<!-- {/await} -->
