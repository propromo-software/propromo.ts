import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// adapters
import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import adapterBun from 'svelte-adapter-bun';
import adapterDeno from 'sveltekit-adapter-deno';

/**
 * @param {string | undefined} value
 */
function getEnvVariableAsBoolean(value) {
	return JSON.parse(value?.toLowerCase() ?? "false") === true;
}

const BUILD_FOR_NODE_ENVIRONMENT = getEnvVariableAsBoolean(process.env.BUILD_FOR_NODE_ENVIRONMENT);
const BUILD_FOR_DENO_ENVIRONMENT = getEnvVariableAsBoolean(process.env.BUILD_FOR_DENO_ENVIRONMENT);
const BUILD_FOR_BUN_ENVIRONMENT = getEnvVariableAsBoolean(process.env.BUILD_FOR_BUN_ENVIRONMENT);

const adapter = function () {
	if (!BUILD_FOR_NODE_ENVIRONMENT && !BUILD_FOR_DENO_ENVIRONMENT && !BUILD_FOR_BUN_ENVIRONMENT) {
		console.log('No environment specified, using adapter-auto');

		return adapterAuto();
	} else {
		let chosenAdapter = BUILD_FOR_NODE_ENVIRONMENT ? 'node' : BUILD_FOR_DENO_ENVIRONMENT ? 'deno' : BUILD_FOR_BUN_ENVIRONMENT ? 'bun' : 'auto';
		let adapter = BUILD_FOR_NODE_ENVIRONMENT && !BUILD_FOR_DENO_ENVIRONMENT && !BUILD_FOR_BUN_ENVIRONMENT ? adapterNode : adapterAuto;
		adapter = BUILD_FOR_DENO_ENVIRONMENT && !BUILD_FOR_NODE_ENVIRONMENT && !BUILD_FOR_BUN_ENVIRONMENT ? adapterDeno : adapter;
		adapter = BUILD_FOR_BUN_ENVIRONMENT && !BUILD_FOR_NODE_ENVIRONMENT && !BUILD_FOR_DENO_ENVIRONMENT ? adapterBun : adapter;

		console.log('Using adapter', chosenAdapter);
		return adapter();
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$store: 'src/lib/stores',
			$server: 'src/lib/server',
			$component: 'src/lib/components',
			$main: 'src'
		}
	}
};

export default config;
