<script lang="ts">
	import { enhance } from '$app/forms';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
	import Stepper from '$component/Stepper.svelte';
</script>

<svelte:head>
	<title>LogIn</title>
</svelte:head>

<div class="flex flex-col max-w-full mx-auto w-[600px]">
	<Stepper currentStep={2} totalSteps={2}></Stepper>
	<section class="p-16 border rounded-2xl border-gray-200 min-h-[500px]">
		<h1 style="line-height: 1;" class="uppercase text-[100px] font-headline text-primary lg:text-right text-center">Log In</h1>
	
		<form method="post" use:enhance class="flex flex-col justify-between h-[calc(100%-8rem)] gap-2 mt-8">
			<Sl component={[ShoelaceComponentOptions.Input, ShoelaceComponentOptions.Button]}>
				<div class="flex flex-col gap-2">
					<sl-input type="text"
					placeholder="jonesis69@propromo.user"
					name="username"
					id="username"
					size="large">Username</sl-input>
	
					<sl-input type="password"
					placeholder="∗∗∗∗∗∗∗∗"
					name="password"
					id="password"
					size="large">Password</sl-input>
				</div>
	
				<div class="flex items-end justify-between gap-4">
					<p class="flex justify-center">
						<a href="/signin" class="hover:underline">No Account?</a>
					</p>
					
					<sl-button
					type="submit"
					variant="primary">
					Sign In
					</sl-button>
				</div>
			</Sl>
		</form>
	</section>
</div>
