<script lang="ts">
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/logo.svg';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';

	$: project = 'propromo-software/1';

	function handleURLChange(event: Event) {
		const element = event?.target as HTMLInputElement;
		const url = element?.value.trim();

		const params = url.split('/');
		const login_type = params[3];
		const login_name = params[4];
		const project_id = params[6];

		console.log('type: ', login_type, 'name: ', login_name, 'id: ', project_id);
		project = `${login_name}/${project_id}?type=${login_type}`;
	}
</script>

<div class="flex flex-col max-w-full mx-auto w-[58rem]">
	<div class="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto]">
		<img src={logo} alt="logo" class="w-1/2 mx-auto max-w-full lg:mx-0 lg:min-w-[315px]" />
		<div class="px-8 mt-6 min-w-fit-content">
			<h1
				style="line-height: 1;"
				class="uppercase text-[100px] font-headline text-primary lg:text-right text-center"
			>
				Propromo
			</h1>
			<h2
				style="line-height: 1;"
				class="lg:text-right text-center text-[48px] pr-[0.7px] text-gray-400 uppercase border-b-[5px] border-gray-400 font-headline"
			>
				Project Progress Monitoring
			</h2>
			<div class="border-r-[5px] border-gray-400">
				<div class="mr-2">
					<div class="flex gap-1 pt-1">
						<a href="/login/github" class="transition duration-400 hover:text-primary">
							<Icon icon="mdi:github" width="50px" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col px-8 mb-8">
		<h3 class="mt-20 mb-1 text-3xl font-bold uppercase text-primary">Join a Project:</h3>
		<div class="flex gap-4">
			<Sl component={[ShoelaceComponentOptions.Input, ShoelaceComponentOptions.Button]}>
				<sl-input
					size="large"
					class="text-2xl"
					type="text"
					name="url"
					value="https://github.com/orgs/propromo-software/projects/1/views/1"
					placeholder="url"
					id="url"
					on:sl-change={handleURLChange}
				/>

				<sl-button
					variant="primary"
					size="large"
					href={'/dashboard/' + project}
					class="text-2xl uppercase min-w-32"
					type="button">join</sl-button
				>
			</Sl>
		</div>
	</div>
</div>
