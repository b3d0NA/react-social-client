module.exports = {
	style: {
		postcss: {
			plugins: [
				require("tailwindcss"),
				require("autoprefixer"),
				// require("tailwind-scrollbar"),
			],
		},
	},
	theme: {
		extend: {
			maxHeight: {
				notific: "40rem",
			},
		},
	},
};
