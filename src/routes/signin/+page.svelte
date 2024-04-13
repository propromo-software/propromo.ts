<script lang="ts">
	import Icon from '@iconify/svelte';
	import { enhance } from '$app/forms';
	import Sl, { ShoelaceComponentOptions } from '$component/sl/sl.svelte';
	import Stepper from '$component/Stepper.svelte';
</script>

<svelte:head>
	<title>SignIn</title>
</svelte:head>

<div class="flex flex-col max-w-full mx-auto w-[600px]">
	<Stepper currentStep={2} totalSteps={2}></Stepper>
	<section class="p-16 border rounded-2xl border-gray-200 min-h-[500px]">
		<h1 style="line-height: 1;" class="uppercase text-[100px] font-headline text-primary lg:text-right text-center">Register</h1>
	
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

					<sl-input type="password"
					placeholder="∗∗∗∗∗∗∗∗"
					name="password"
					id="password"
					size="large">Retype Password</sl-input>
				</div>
	
				<div>
					<div class="flex items-end justify-between gap-4">
						<p class="flex justify-center">
							<a href="/login" class="hover:underline">Already Registered?</a>
						</p>
						
						<sl-button
						type="submit"
						variant="primary">
						Sign Up
						</sl-button>
					</div>
	
					<div class="flex flex-col justify-center">
						<div class="grid items-center grid-cols-[1fr_auto_1fr] w-full gap-2 mt-12 mb-4"><div class="border-b-2 border-gray-200"></div>or<div class="border-b-2 border-gray-200"></div></div>
						<span class="flex justify-center gap-4">
							<a href="/login/github" class="transition duration-400 hover:text-primary">
								<Icon icon="mdi:github" width="50px" />
							</a>
						</span>
					</div>
				</div>
			</Sl>
		</form>
	</section>
</div>
