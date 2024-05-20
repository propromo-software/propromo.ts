<script lang="ts">
	import type { MinimalRepository } from '../types';
	import Milestone from './Milestone.svelte';

	export let repositories: MinimalRepository[] = [];
</script>

<div class="p-4 border-2 rounded-xl">
	<div class="flex items-center gap-8 overflow-x-auto">
		{#each repositories as repository}
			{#if repository.milestones?.totalCount && repository.milestones?.totalCount > 0}
				<div class="flex flex-col gap-4 p-8 m-2 border-2 border-other-grey rounded-2xl">
					<h2 class="m-2 text-3xl font-koulen text-primary-blue">{repository.name}</h2>

					<div class="flex items-center h-full gap-2">
						<!-- don't forget pageInfo -->
						{#each repository.milestones?.nodes ?? [] as milestone, i}
							{#if milestone}
								<div class="flex items-center h-full gap-2">
									{#if repository.milestones?.nodes?.length && repository.milestones?.nodes?.length - 1 == i}
										<Milestone {milestone} />
									{:else}
										<!-- last item -->
										<Milestone {milestone} />
										<div class="p-4 px-6 border rounded-md bg-primary-blue" />
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		{:else}
			<div class="text-center">No repositories found</div>
		{/each}
	</div>
</div>
