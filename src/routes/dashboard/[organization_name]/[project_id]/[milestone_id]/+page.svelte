<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
	<div class="mb-4">
		<h3 class="text-6xl">Linked Repositories: {data.total_repository_count}</h3>
		<!-- __select option to choose a repo to inspect__ -->
	</div>
	<div class="flex flex-col gap-4">
		TODO
	</div>
</main>
