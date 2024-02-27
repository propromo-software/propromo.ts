import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import { ngrok } from 'vite-plugin-ngrok';

const VITE_NGROK_AUTH_TOKEN = loadEnv('development', process.cwd(), [
	'VITE_'
]).VITE_NGROK_AUTH_TOKEN; // import.meta.env.VITE_NGROK_AUTH_TOKEN;

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
		port: 6000,
		strictPort: false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
