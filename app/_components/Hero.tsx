"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { ExternalLink, Inbox, Copy, Check, Rocket } from "lucide-react"
import { useState } from "react"
import { SiGithub, SiTelegram } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { TbSourceCode } from "react-icons/tb"

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
			<section className="relative min-h-dvh flex flex-col items-center justify-center overflow-clip">
				{/* Background layer */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/header.jpg"
						alt=""
						fill
						className="object-cover opacity-40"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background" />
				</div>

				{/* Main content */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="flex flex-1 flex-col items-center justify-center gap-8 md:gap-10 px-4 py-2 sm:py-10 max-w-5xl mx-auto w-full md:flex-row md:justify-start lg:gap-12 lg:py-12 xl:gap-16"
				>
					{/* Photo with glow */}
					<motion.div
						variants={itemVariants}
						className="relative shrink-0 p-3 sm:p-4 md:p-6"
					>
						<div className="absolute -inset-2 sm:-inset-3 rounded-full bg-primary/15 blur-2xl" />
						<div className="relative">
							<Image
								src="/portrait.jpg"
								alt="Денис Ермолаев"
								width={200}
								height={200}
								className="rounded-full border-2 border-primary/30 object-cover w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48"
								priority
							/>
						</div>
					</motion.div>

					{/* Text block */}
					<div className="text-center md:text-left">
						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary leading-tight"
						>
							Денис Ермолаев
						</motion.h1>

						{/* Profession — typing animation */}
						<motion.div variants={itemVariants} className="mt-4 min-h-8 md:min-h-9">
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
								className="font-sovngarde text-base sm:text-lg md:text-xl text-muted-foreground"
								cursor={true}
							/>
						</motion.div>

						{/* Short about */}
						<motion.p
							variants={itemVariants}
							className="font-sovngarde mt-6 text-sm sm:text-base text-muted-foreground/80 max-w-md leading-relaxed mx-auto md:mx-0"
						>
							Стремлюсь создавать полезные приложения и инструменты.
						</motion.p>

						{/* Buttons */}
						<motion.div
							variants={itemVariants}
							className="font-sovngarde mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start"
						>
							<a
								href="/documents/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-transparent px-5 py-3 sm:px-6
								bg-primary text-primary-foreground text-sm font-medium
								hover:opacity-90 transition-all
								shadow-lg shadow-primary/25
								focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							>
								<ExternalLink
									aria-hidden="true"
									className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
								/>
								Резюме (PDF)
							</a>
							<a
								href="https://time-capsule.denisermolaev.com"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 sm:px-6
								border border-border text-sm font-medium
								hover:bg-muted hover:border-primary/30 transition-all
								focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							>
								<Rocket
									aria-hidden="true"
									className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
								/>
								Демо Time Capsule
							</a>
							<a
								href="https://github.com/denis-ermolaev/bulls-pipeline"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 sm:px-6
								border border-border text-sm font-medium
								hover:bg-muted hover:border-primary/30 transition-all
								focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							>
								<TbSourceCode aria-hidden="true" className="w-4 h-4 shrink-0" />
								Проект Bulls Pipeline
							</a>
						</motion.div>
					</div>
				</motion.div>

				{/* Social links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.4 }}
					className="mt-4 shrink-0 px-4 pb-2 font-sovngarde text-sm text-muted-foreground sm:mt-10 sm:px-6 sm:pb-8 sm:text-base lg:mt-12 lg:px-8 lg:pb-10 m-0 p-0"
				>
					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
						<div className="inline-flex items-center gap-2">
							<a
								href="mailto:me@denisermolaev.com"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 py-1 hover:text-primary transition-colors"
							>
								<Inbox aria-hidden="true" className="w-4 h-4 shrink-0" />
								Email
							</a>

							<button
								type="button"
								onClick={copyEmail}
								className="inline-flex h-6 w-6 items-center justify-center hover:text-primary transition-colors"
								title="Скопировать email"
								aria-label={copied ? "Email скопирован" : "Скопировать email"}
							>
								{copied ? (
									<Check aria-hidden="true" className="w-3 h-3 shrink-0" />
								) : (
									<Copy
										aria-hidden="true"
										className="w-3 h-3 shrink-0 opacity-50 hover:opacity-100 cursor-pointer"
									/>
								)}
							</button>
						</div>
						<a
							href="https://t.me/first_millennium"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 py-1 hover:text-primary transition-colors duration-300"
						>
							<SiTelegram aria-hidden="true" className="w-4 h-4 shrink-0" />
							Telegram
						</a>
						<a
							href="https://github.com/denis-ermolaev"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 py-1 hover:text-primary transition-colors duration-300"
						>
							<SiGithub aria-hidden="true" className="w-4 h-4 shrink-0" />
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/ermolaev-denis/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 py-1 hover:text-primary transition-colors duration-300"
						>
							<FaLinkedin aria-hidden="true" className="w-4 h-4 shrink-0" />
							LinkedIn
						</a>
					</div>
					<div className="mt-6 flex flex-col items-center justify-center gap-2 text-center text-sm leading-relaxed text-muted-foreground/80">
						<p>Индивидуальный предприниматель Ермолаев Д. В.</p>
						<p>ОГРНИП: 326723200115965 ИНН: 722201039941</p>
					</div>
				</motion.div>
			</section>
		</main>
	)
}
