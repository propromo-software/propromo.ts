<script lang="ts">
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/logo.svg';
	import Input from '$component/ui/input/input.svelte';
	import Button from '$component/ui/button/button.svelte';

	let url = '/dashboard/propromo-software/1/1?depth=info,issues&issue_states=open';
	$: id = url.trim();
</script>

<div class="flex flex-col">
	<div class="flex gap-12">
		<img src={logo} alt="logo" style="height: 300px;" />
		<div>
			<h1 class="uppercase text-8xl">Propromo</h1>
			<h2 class="text-4xl text-gray-400 uppercase">Project Progress Monitoring</h2>
			<div class="mt-8">
				<div class="text-2xl">Works with:</div>
				<div class="flex gap-1">
					<a href="/login/github"><Icon icon="mdi:github" width="50px" /></a>
					<Icon icon="mdi:jira" width="50px" />
				</div>
			</div>
		</div>
	</div>

	<h3 class="mt-16 mb-2 text-2xl">Join a Project:</h3>
	<div class="flex gap-2">
		<Input type="text" name="url" placeholder="url" id="url" bind:value={url} />
		<Button href={id} class="uppercase">join</Button>
	</div>
</div>
