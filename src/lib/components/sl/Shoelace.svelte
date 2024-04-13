<script>
    import { onMount } from 'svelte';

    /* Shoelace */

	/* import '@shoelace-style/shoelace/dist/components/icon/icon.js';
	import '@shoelace-style/shoelace/dist/components/button/button.js';
	import '@shoelace-style/shoelace/dist/components/input/input.js';
	import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
	import '@shoelace-style/shoelace/dist/components/select/select.js';
	import '@shoelace-style/shoelace/dist/components/option/option.js';
	import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
	import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
	import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
	import '@shoelace-style/shoelace/dist/components/alert/alert.js';
	import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'; */

	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
	setBasePath('/');

    onMount(async () => {
        // await import('');

        // activates shoelace web components
        await import('@shoelace-style/shoelace/dist/shoelace.js');
    });
</script>

{#await import("@shoelace-style/shoelace/dist/components/input/input.js")}
    <!-- promise is pending -->
{:then value}
    <sl-input></sl-input>
{:catch error}
    <!-- promise was rejected -->
{/await}
