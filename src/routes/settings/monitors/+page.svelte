<script lang="ts">
	import type { PageData } from './$types';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data: PageData;

	$: joinProject = $page.url.searchParams.get('join'); // else createProject
	$: action =
		joinProject == '1' || joinProject == 'true' || joinProject == '' ? 'JOIN' : 'CREATE';

	$: projectIdToJoin = action == 'join' ? $page.url.searchParams.get('projectId') : null;

	function updatePath(event: Event) {
		const element = event?.target as HTMLInputElement;
		$page.url.searchParams.set('projectId', element?.value);
		goto(`?${$page.url.searchParams.toString()}`);
	}
</script>

<div class="flex gap-4">
	<Sl component={ShoelaceComponentOptions.Button}>
		<sl-button
			variant={action == 'CREATE' ? 'primary' : 'default'}
			href="/settings/monitors?create"
		>
			<h3>CREATE</h3>
		</sl-button>
		<sl-button
			variant={action == 'JOIN' ? 'primary' : 'default'}
			href="/settings/monitors?join"
		>
			<h3>JOIN</h3>
		</sl-button>
	</Sl>
</div>

<div class="p-4 mt-4 border-2 rounded-xl">
	{#if action == 'CREATE'}
		<form method="post" action="?/create" use:enhance class="flex flex-col gap-4">
			<Sl component={[ShoelaceComponentOptions.Input, ShoelaceComponentOptions.Button]}>
				<sl-input
					class="text-2xl"
					type="text"
					name="project_name"
					placeholder="project name"
					id="project_name"
				/>

				<sl-input
					class="text-2xl"
					type="text"
					name="project_url"
					placeholder="project url"
					id="project_url"
				/>

				<sl-button variant="primary" class="mt-4 text-2xl uppercase min-w-32" type="submit"
					>create</sl-button
				>
			</Sl>
		</form>
	{:else if action == 'JOIN'}
		<form method="post" action="?/join" use:enhance class="flex flex-col gap-4">
			<Sl component={[ShoelaceComponentOptions.Input, ShoelaceComponentOptions.Button]}>
				<sl-input
					class="text-2xl"
					type="text"
					name="project_id"
					placeholder="project id"
					value={projectIdToJoin}
					id="project_id"
					on:sl-change={updatePath}
				/>

				<sl-button variant="primary" class="mt-4 text-2xl uppercase min-w-32" type="submit"
					>join</sl-button
				>
			</Sl>
		</form>
	{/if}
</div>
