<script lang="ts">
	import { enhance } from '$app/forms';
	import { buttonVariants } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1 class="flex items-end font-bold text-8xl">Account Information</h1>

	<div class="pt-2 pb-4">
		<p class="text-4xl">User id: {data.userId}</p>
		<p class="text-4xl">Username: {data.username}</p>
	</div>
	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" class={buttonVariants({ variant: 'outline' })} />
	</form>
</div>
