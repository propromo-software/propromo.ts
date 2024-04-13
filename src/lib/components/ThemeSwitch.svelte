<script lang="ts">
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
	import { toggleMode, mode as mw_mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	onMount(() => {
		mode.checked = $mw_mode === 'dark' ? true : false;
	});

	$: if (mode) {
		toggleMode();
	}

	$: mode = { checked: false };
</script>

<Sl component={[ShoelaceComponentOptions.Switch]}>
	<sl-switch on:sl-change={() => toggleMode()} defaultChecked={mode.checked} style="--width: 40px; --height: 20px; --thumb-size: 18px;"></sl-switch>
</Sl>
