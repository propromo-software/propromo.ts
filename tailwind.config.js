import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: { // TODO: cleanup
				primary: '#0D3269',
				secondary: '#9A9A9A',
				'propromo-green': '#229342',
				'propromo-red': '#ff2300',
				'propromo-red-light': '#ffb0a5',
				'propromo-orange':'#FBC116',
				'propromo-orange-light':'#FDE9D9',
				'propromo-yellow': '#fbc02d',
				'propromo-yellow-light': '#ffe495',
				'propromo-white': '#FFFFFF',
				'propromo-grey': '#DCDCDC'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				c: 'var(--radius-c)' /* containers */
			},
			fontFamily: {
				sans: ['"Source Sans 3"', 'normal', ...fontFamily.sans],
				headline: ['Koulen', 'normal', ...fontFamily.mono],
				text: ['Figtree', 'normal', ...fontFamily.serif]
			}
		}
	},
	plugins: [
		tailwindcssAnimate,
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	]
};

export default config;
