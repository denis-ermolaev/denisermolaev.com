"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { ExternalLink, Inbox, Eye, Copy, Check } from "lucide-react"
import { useState } from "react"
import { SiGithub, SiTelegram } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1] as const,
		},
	},
}

export function Hero() {
	const [copied, setCopied] = useState(false)

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText("me@denisermolaev.com")
			setCopied(true)

			setTimeout(() => setCopied(false), 3000)
		} catch (err) {
			console.error("Failed to copy:", err)
		}
	}
	return (
		<main>
			<section className="relative h-dvh flex flex-col items-center justify-center overflow-hidden">
				{/* Background layer */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/header.jpg"
						alt=""
						fill
						className="object-cover opacity-15"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background" />
				</div>

				{/* Main content */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4 max-w-5xl mx-auto w-full"
				>
					{/* Photo with glow */}
					<motion.div variants={itemVariants} className="relative shrink-0">
						<div className="absolute -inset-3 rounded-full bg-primary/15 blur-2xl" />
						<div className="relative">
							<Image
								src="/portrait.jpg"
								alt="Денис Ермолаев"
								width={200}
								height={200}
								className="rounded-full border-2 border-primary/30 object-cover w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
								priority
							/>
						</div>
					</motion.div>

					{/* Text block */}
					<div className="text-center md:text-left">
						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight"
						>
							Денис Ермолаев
						</motion.h1>

						{/* Profession — typing animation */}
						<motion.div variants={itemVariants} className="mt-3 h-8">
							<TypeAnimation
								sequence={[
									"Python-разработчик",
									2000,
									"Backend-разработчик",
									2000,
									"Fullstack-разработчик",
									2000,
								]}
								wrapper="p"
								speed={40}
								repeat={Infinity}
								className="font-sovngarde text-lg md:text-xl text-muted-foreground"
								cursor={true}
							/>
						</motion.div>

						{/* Short about */}
						<motion.p
							variants={itemVariants}
							className="font-sovngarde mt-6 text-sm md:text-base text-muted-foreground/80 max-w-md leading-relaxed mx-auto md:mx-0"
						>
							Интересуюсь веб-разработкой, анализом данных и биоинформатикой.
							Стремлюсь создавать полезные программы и инструменты.
						</motion.p>

						{/* Buttons */}
						<motion.div
							variants={itemVariants}
							className="font-sovngarde mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
						>
							<a
								href="/documents/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
								bg-primary text-primary-foreground text-sm font-medium
								hover:opacity-90 transition-all
								shadow-lg shadow-primary/25"
							>
								<ExternalLink className="w-4 h-4 mb-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
								Резюме (PDF)
							</a>
							<a
								href="https://time-capsule.denisermolaev.com"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
								border border-border text-sm font-medium
								hover:bg-muted hover:border-primary/30 transition-all"
							>
								<Eye className="w-4 h-4 mb-1 mr-1 group-hover:animate-ping" />
								Проект TimeCapsule
							</a>
						</motion.div>
					</div>
				</motion.div>

				{/* Social links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.4 }}
					className="font-sovngarde mt-4 mx-4 flex-wrap md:flex-nowrap justify-center
				gap-x-6 gap-y-3 md:absolute md:bottom-16 flex items-center text-sm text-muted-foreground"
				>
					<div className="inline-flex items-center gap-2">
						<a
							href="mailto:me@denisermolaev.com"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
						>
							<Inbox className="w-4 h-4 mb-1" />
							Email
						</a>

						<button
							type="button"
							onClick={copyEmail}
							className="hover:text-primary transition-colors"
							title="Скопировать email"
						>
							{copied ? (
								<Check className="w-3 h-3 mb-1" />
							) : (
								<Copy className="w-3 h-3 mb-1 opacity-50 hover:opacity-100 cursor-pointer" />
							)}
						</button>
					</div>
					<a
						href="https://t.me/first_millennium"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
					>
						<SiTelegram className="w-4 h-4 mb-1" />
						Telegram
					</a>
					<a
						href="https://github.com/denis-ermolaev"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
					>
						<SiGithub className="w-4 h-4 mb-1" />
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/ermolaev-denis/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
					>
						<FaLinkedin className="w-4 h-4 mb-1" />
						LinkedIn
					</a>
				</motion.div>
			</section>
		</main>
	)
}
