<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';

	export let data: PageData;
</script>

<div>
	<h1 class="flex items-end font-bold text-8xl">Account Information</h1>

	<div class="pt-2 pb-4">
		<p class="text-4xl">User id: {data.userId}</p>
		<p class="text-4xl">Username: {data.username}</p>
	</div>
	<form method="post" action="?/logout" use:enhance>
		<Sl component={ShoelaceComponentOptions.Button}><sl-button type="submit">Sign out</sl-button></Sl>
	</form>
</div>
