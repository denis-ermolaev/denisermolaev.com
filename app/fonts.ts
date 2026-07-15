import localFont from "next/font/local"

export const sovngarde = localFont({
	src: [
		{
			path: "./_fonts/SovngardeConsoleFixed.woff2",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-sovngarde",
	display: "swap",
})
