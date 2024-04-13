<script lang="ts">
	import '$main/app.css';
	import '$main/style.scss';

	/* Shoelace */
	import Shoelace from '$component/sl/Shoelace.svelte';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';

	/* Other Components */

	import ThemeSwitch from '$component/ThemeSwitch.svelte';
	import Icon from '@iconify/svelte';

	import { ModeWatcher } from 'mode-watcher';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	/* --- */

	import { enhance } from '$app/forms';
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';

	export let data: LayoutData;
	// @ts-ignore
	$: username = data?.username;
	$: loggedIn = data && typeof username === 'string' && username.length > 0;
	const nav_classes_base = 'flex items-center justify-between gap-4 uppercase bg-gray-100';
	$: nav_classes = loggedIn ? `${nav_classes_base} border-2 p-4 rounded-xl` : nav_classes_base;

	if (browser && window.location.href.includes('vercel')) {
		injectSpeedInsights();
	}
</script>

<Shoelace />
<ModeWatcher />

<header class="sticky top-0 p-4">
	<nav class={nav_classes}>
		<a class="text-5xl font-bold tracking-wider text-primary font-headline" href="/">
			Propromo
		</a>
		{#if loggedIn}
			<div class="flex items-center gap-2">
				<a href="/settings/monitors"
					><Icon
						class="transition duration-300 cursor-pointer text-primary hover:rotate-180"
						icon="mdi:settings"
						width="50px"
					/></a
				>
				<a href="/settings/security"
					><Icon
						class="cursor-pointer text-primary"
						icon="material-symbols:account-circle"
						width="50px"
					/></a
				>
				<form method="post" action="?/logout" use:enhance>
					<Sl component={ShoelaceComponentOptions.Button}>
						<sl-button variant="primary" type="submit">Sign out {username}</sl-button>
					</Sl>
				</form>
			</div>
		{:else}
			<div class="flex gap-4">
				<Sl component={ShoelaceComponentOptions.Button}>
					<sl-button variant="primary" href="/signin">register</sl-button>
					<sl-button variant="primary" href="/login">login</sl-button>
				</Sl>
			</div>
		{/if}
	</nav>
</header>

<main class="flex justify-center min-h-screen mt-12">
	<slot />
</main>

<footer class="flex flex-col items-center gap-3 p-4 shadow-inner">
	<ThemeSwitch />
</footer>
