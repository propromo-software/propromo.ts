<script lang="ts">
	import { page } from '$app/stores';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
</script>

<section class="flex flex-col items-center h-screen text-center">
	<h1 class="text-8xl">{$page.status} {$page?.error?.message}</h1>
	<p class="mb-4 text-4xl text-primary">Pfad: {$page.url.pathname}</p>
	<Sl component={ShoelaceComponentOptions.Button}><sl-button href="/">Home</sl-button></Sl>
</section>
