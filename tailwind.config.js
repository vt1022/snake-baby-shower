/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: { accent: "#7aa48b", primary: "#d29a68", secondary: "#e2ba96" },
			fontFamily: {
				title: ["Cherry Bomb One", "system-ui"],
				subtitle: ["Chewy", "system-ui"],
			},
		},
	},
	plugins: [],
}
