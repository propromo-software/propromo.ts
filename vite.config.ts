import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import { ngrok } from 'vite-plugin-ngrok';

const environment = loadEnv('development', process.cwd(), [
	'VITE_'
]);
const VITE_NGROK_AUTH_TOKEN = environment.VITE_NGROK_AUTH_TOKEN; // import.meta.env.VITE_NGROK_AUTH_TOKEN;
const VITE_PORT = !isNaN(Number(environment.VITE_PORT)) ? Number(environment.VITE_PORT) : undefined; // import.meta.env.VITE_PORT;

export default defineConfig({
	plugins: [
		sveltekit(),
		ngrok({
			authtoken: VITE_NGROK_AUTH_TOKEN
		})
	],
	server: {
		port: 5000,
		strictPort: false,
		hmr: {
			// use reverse proxy with vite hmr
			clientPort: 443
		}
	},
	preview: {
		port: VITE_PORT ?? 3000, // PORT is the actual port of the bun server, VITE_PORT is just for the preview and the nodeJS server
		strictPort: false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
