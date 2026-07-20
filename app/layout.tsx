import type { Metadata, Viewport } from "next"
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
	description: "Личный сайт Дениса Ермолаева — Python-разработчика. Резюме, контакты, проекты.",
	alternates: { canonical: "/" },
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

export const viewport: Viewport = {
	themeColor: "#0a0a0a",
	colorScheme: "dark",
}

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Денис Ермолаев",
	url: "https://denisermolaev.com",
	image: "https://denisermolaev.com/portrait.jpg",
	jobTitle: "Python-разработчик",
	email: "mailto:me@denisermolaev.com",
	description:
		"Python-разработчик. Интересуюсь веб-разработкой, анализом данных и биоинформатикой.",
	sameAs: [
		"https://github.com/denis-ermolaev",
		"https://www.linkedin.com/in/ermolaev-denis/",
		"https://t.me/first_millennium",
	],
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				{children}
			</body>
		</html>
	)
}
