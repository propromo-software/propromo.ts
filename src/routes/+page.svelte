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
			<h1 class="uppercase text-8xl font-headline text-primary">Propromo</h1>
			<h2
				class="text-4xl pr-[0.7px] text-gray-400 uppercase border-b-[5px] border-gray-400 font-headline"
			>
				Project Progress Monitoring
			</h2>
			<div class="mr-[0.7px] border-r-[5px] border-gray-400">
				<div class="mr-2">
					<div class="flex gap-1 pt-1">
						<a href="/login/github" class="transition duration-400 hover:text-primary"
							><Icon icon="mdi:github" width="50px" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<h3 class="mt-16 mb-1 text-3xl font-bold uppercase text-primary">Join a Project:</h3>
	<div class="flex gap-2">
		<Input
			class="px-6 py-8 text-2xl"
			type="text"
			name="url"
			placeholder="url"
			id="url"
			bind:value={url}
		/>
		<Button href={id} class="h-full max-w-full text-2xl uppercase min-w-32">join</Button>
	</div>
</div>
