<script lang="ts">
	import Icon from '@iconify/svelte';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
	import { page } from '$app/stores';

	$: breadcrumbs = $page.route.id?.split('/') ?? [];
</script>

<section class="flex flex-col w-screen gap-4 p-4">
	<header class="flex gap-1 h-min">
		<a href="/">
			<Icon
				class="p-1 border-2 cursor-pointer text-primary rounded-xl"
				icon="material-symbols:chevron-left-rounded"
				width="70px"
			/>
		</a>
		<h1 class="flex items-center justify-center flex-shrink p-1 px-6 border-2 rounded-xl">
			Settings
		</h1>
	</header>

	<section id="settings-window" class="p-8 border-2 rounded-xl">
		<aside class="p-4 border-2 rounded-xl" id="sidebar">
			<nav class="flex flex-col gap-2">
				<Sl component={ShoelaceComponentOptions.Button}>
					<sl-button
						variant={$page.route.id?.includes('/settings/security' ?? 'NULL')
							? 'primary'
							: 'default'}
						href="/settings/security"
					>
						Security
					</sl-button>
					<sl-button
						variant={$page.route.id?.includes('/settings/monitors' ?? 'NULL')
							? 'primary'
							: 'default'}
						href="/settings/monitors"
					>
						Monitors
					</sl-button>
				</Sl>
			</nav>
		</aside>

		<main id="body" class="p-8 border-2 rounded-xl">
			<slot />
		</main>
	</section>

	<footer>
		{#each breadcrumbs as breadcrumb, i}
			{#if breadcrumbs.length > 1 && i < breadcrumbs.length - 1 && i > 0}
				<a href="/settings/{breadcrumbs[i - 1]}">{breadcrumb}</a>
				&nbsp;&nbsp;&gt;&nbsp;&nbsp;
			{:else}
				<a href="/settings/{breadcrumbs[i]}">{breadcrumb}</a>
			{/if}
		{:else}
			<!-- empty list -->
		{/each}
	</footer>
</section>

<style lang="scss">
	#settings-window {
		display: grid;
		grid:
			'sidebar body' 1fr
			/ auto 1fr;
		gap: 2rem;

		#sidebar {
			grid-area: sidebar;
		}

		#body {
			grid-area: body;
		}
	}
</style>
