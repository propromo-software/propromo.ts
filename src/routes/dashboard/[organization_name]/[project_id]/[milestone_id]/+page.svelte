<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$component/ui/badge/badge.svelte';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
	<div class="mb-4">
		<h3 class="text-6xl">Linked Repositories: {data.total_repository_count}</h3>
		<!-- __select option to choose a repo to inspect__ -->
	</div>
	<div class="flex flex-col gap-4">
		{#each data?.milestones ?? [] as milestone}
			<Card.Root>
				<Card.Header>
					<Card.Title
						>{milestone?.title ?? 'no title...'} ({milestone?.filtered_issues
							?.totalCount})</Card.Title
					>
					<Card.Description
						>{milestone?.dueOn ?? ''}
						{milestone?.dueOn && milestone?.closedAt ? '|' : ''}
						{milestone?.closedAt ?? ''}</Card.Description
					>
				</Card.Header>
				<Card.Content>
					{milestone?.createdAt ?? ''} | {milestone?.updatedAt ?? ''}
				</Card.Content>
				<Card.Footer>
					{milestone?.progressPercentage + '/100%' ?? ''}
				</Card.Footer>
			</Card.Root>

			<!-- show on click, first, only fetch milestone info -->
			<div class="flex flex-col gap-2 mr-36">
				{#each milestone?.filtered_issues?.nodes as issue}
					<Card.Root>
						<Card.Header>
							<Card.Title
								><a href={issue?.url ?? ''}>{issue?.title ?? ''}</a></Card.Title
							>
						</Card.Header>
						<Card.Content>
							{#each issue?.labels?.nodes as label}
								<Badge class="m-1"
									><a
										href={label?.url ?? '/'}
										style="color: {label.color ?? '#000000'};"
										>{label.name ?? ''}</a
									></Badge
								>
							{:else}
								<!-- no labels... -->
							{/each}
						</Card.Content>
					</Card.Root>
				{:else}
					<!-- no issues... -->
				{/each}
			</div>
		{:else}
			<!-- no milestones... -->
		{/each}
	</div>
</main>
