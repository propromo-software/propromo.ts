<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Repositories from '$component/Repositories.svelte';

	export let data: PageData;
	$: selfUrl = $page.url.pathname
		.replace('[login_name]', data?.login_name ?? '')
		.replace('[project_id]', data?.project_id ?? '');

	// TODO: add indicator about closedAt, createdAt, updatedAt
</script>

<div class="items-center max-w-full p-5 border-2 h-fit rounded-xl">
	<div class="flex items-center justify-between p-4 mb-5 border-2 rounded-xl">
		<a
			class="px-6 py-3 text-lg font-bold border-2 rounded-xl text-secondary-grey font-sourceSansPro border-other-grey {data
				?.project?.public
				? 'border-green-500'
				: 'border-red-500'}"
			href={selfUrl}
			title="Show Monitor"
		>
			{data?.login_name}/<a href={data?.project?.url} target="_blank"
				>{data?.project?.title}</a
			>
		</a>

		<div class="flex items-center gap-2">
			<a
				class="flex items-center gap-1 px-6 py-3 border-2 rounded-xl"
				href="/chat"
				title="Show User"
			>
				<sl-icon
					class="text-xl font-bold text-secondary-grey font-sourceSansPro"
					name="chat"
				/>
				<div class="text-lg font-bold text-secondary-grey font-sourceSansPro">CONTACT</div>
			</a>

			<sl-icon-button
				class="text-3xl text-secondary-grey"
				name="arrow-repeat"
				label="Reload"
				type="submit"
			/>
		</div>
	</div>

	<Repositories repositories={data?.repositories} />

	<div class="grid grid-cols-3 gap-8 mt-8">
		<div class="col-span-2">
			<div class="p-6 border-2 border-other-grey rounded-2xl">
				<sl-icon name="info-circle" class="text-6xl font-bold text-primary-blue" />
				<div class="mt-4 prose">
					{data?.project?.readme}
				</div>
				<div class="mt-12 w-min">
					<sl-button>
						<a href={data?.project?.url} target="_blank">View Source</a>
					</sl-button>
				</div>
			</div>
		</div>
		<div class="p-5 border-2 border-other-grey rounded-2xl">Deployments</div>
	</div>
</div>
