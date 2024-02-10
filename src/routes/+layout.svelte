<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitch from '$component/ThemeSwitch.svelte';
	import '$main/app.css';
	import '$main/style.scss';

	injectSpeedInsights();
</script>

<ModeWatcher />

<header class="sticky top-0 p-4">
	<nav class="flex justify-between gap-4 uppercase">
		<a class="text-4xl font-bold tracking-wider text-primary font-headline" href="/">
			Propromo
		</a>
		<div>
			<a class="px-4 py-2 hover:underline rounded-xl" href="/signin"> register </a>
			<a class="px-4 py-2 hover:underline rounded-xl" href="/login"> login </a>
		</div>
	</nav>
</header>

<main class="flex justify-center min-h-screen mt-12">
	<slot />
</main>

<footer class="flex flex-col items-center gap-3 p-4 shadow-inner">
	<ThemeSwitch />
</footer>
