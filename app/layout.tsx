import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { sovngarde } from "./fonts"
import "./globals.css"
import { SmoothScroll } from "./_components/SmoothScroll"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})
export const metadata: Metadata = {
	metadataBase: new URL("https://denisermolaev.com"),
	title: "Денис Ермолаев | Python-разработчик",
	description: "Личный сайт Дениса Ермолаева — Python-разработчика. Резюме, контакты.",
	openGraph: {
		title: "Денис Ермолаев | Python-разработчик",
		description: "Python-разработчик. Резюме, контакты, портфолио.",
		url: "https://denisermolaev.com",
		siteName: "denisermolaev.com",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "ru_RU",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Денис Ермолаев",
		description: "Python-разработчик",
		images: ["/og.jpg"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="ru"
			className={`${geistSans.variable} ${geistMono.variable} ${sovngarde.variable} h-full antialiased dark`} // Только тёмный режим
		>
			<body className="min-h-full flex flex-col">
				<SmoothScroll />
				{children}
			</body>
		</html>
	)
}
