/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			Oswald: ['Oswald', 'Arial'],
			Ubuntu: ['Ubuntu', 'sands-serif'],
			Lato: ['Lato', 'sands-serif'],
		},
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.p-block-1': { 'padding-block': '0.25rem' },
				'.p-block-2': { 'padding-block': '0.5rem' },
				'.p-block-4': { 'padding-block': '1rem' },
				'.pt-block-2': { 'padding-block-start': '0.5rem' },
				'.pb-block-2': { 'padding-block-end': '0.5rem' },
			});
		}),
	],
};
