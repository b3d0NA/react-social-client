module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins"],
				gruffly: ["Gruffly", "brush"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
