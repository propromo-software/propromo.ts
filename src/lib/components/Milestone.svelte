<script lang="ts">
	import type { MinimalMilestone } from '../types';

	export let milestone: MinimalMilestone;
	let shortenedTitle =
		milestone.title.length > 15 ? milestone.title.substring(0, 15) + '...' : milestone.title; // TODO: replace with css
	let dueOn = milestone.dueOn ? new Date(milestone.dueOn) : null;
	let formattedDueOn = dueOn
		? `${dueOn.getDate().toString().padStart(2, '0')}.${(dueOn.getMonth() + 1)
				.toString()
				.padStart(2, '0')}.${dueOn.getFullYear()}`
		: 'no date';

	let closed_issue_count = milestone.closed_issues.totalCount;
	let total_issues_count = milestone.open_issues.totalCount + closed_issue_count;
	let progress = Math.round(milestone.progressPercentage);
</script>

<div class="max-h-full px-6 py-4 border-2 rounded-xl border-other-grey w-max">
	<div class="flex justify-between gap-20">
		<div>
			<h1 class="text-4xl text-primary-blue font-koulen">
				{shortenedTitle}
			</h1>

			<div class="flex items-center gap-2">
				<sl-icon
					class="text-xl font-bold text-secondary-grey font-sourceSansPro"
					name="clock"
				/>
				<p class="text-xl font-bold text-secondary-grey font-sourceSansPro">
					{formattedDueOn}
				</p>
			</div>

			<div class="flex gap-2 mt-8">
				<sl-button>
					<a href="?scope=sprints"> View Sprints </a>
				</sl-button>
				<sl-button>
					<a href="?scope=tasks"> View Tasks </a>
				</sl-button>
			</div>
		</div>

		<a
			class="flex flex-row-reverse text-xl font-bold cursor-pointer text-primary-blue"
			href="?scope=milestone"
		>
			<sl-icon name="arrows-angle-expand" />
		</a>
	</div>

	<div class="w-full mt-5">
		{#if progress >= 80}
			<div class="flex justify-between">
				<div class="font-bold text-additional-green font-sourceSansPro">
					{closed_issue_count}/{total_issues_count} Tasks
				</div>
				<div class="font-bold text-additional-green font-sourceSansPro">{progress}%</div>
			</div>

			<sl-progress-bar
				class="caret-additional-green"
				style="--indicator-color: #229342; --track-color:#22934244; --height: 2rem;"
				value={progress}
			/>
		{:else if progress >= 50}
			<div class="flex justify-between">
				<div class="font-bold text-additional-orange font-sourceSansPro">
					{closed_issue_count}/{total_issues_count} Tasks
				</div>
				<div class="font-bold text-additional-orange font-sourceSansPro">{progress}%</div>
			</div>

			<sl-progress-bar
				class="caret-additional-green"
				style="--indicator-color: #FBC116; --track-color:#fbc2164f; --height: 2rem;"
				value={progress}
			/>
		{:else}
			<div class="flex justify-between">
				<div class="font-bold text-additional-red font-sourceSansPro">
					{closed_issue_count}/{total_issues_count} Tasks
				</div>
				<div class="font-bold text-additional-red font-sourceSansPro">{progress}%</div>
			</div>

			<sl-progress-bar
				class="caret-additional-green"
				style="--indicator-color: #E33B2E;--track-color:#e33a2e4e; --height: 2rem;"
				value={progress}
			/>
		{/if}
	</div>
</div>
