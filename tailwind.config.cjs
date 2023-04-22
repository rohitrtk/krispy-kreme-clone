/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				"kk-red": "#CF2E2E",
				"kk-green": "#006938"
			},
		}
	},
	plugins: [],
}
