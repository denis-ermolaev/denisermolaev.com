"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { Download, Mail } from "lucide-react"

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
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background layer */}
			<div className="absolute inset-0 -z-10">
				<Image src="/header.png" alt="" fill className="object-cover opacity-10" priority />
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
							src="/portrait.jpeg"
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
						Люблю Python и создаю проекты в веб-разработке, автоматизации и
						биоинформатике.
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={itemVariants}
						className="font-sovngarde mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
					>
						<a
							href="/resume.pdf"
							download
							className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
								bg-primary text-primary-foreground text-sm font-medium
								hover:opacity-90 transition-all
								shadow-lg shadow-primary/25"
						>
							<Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
							Резюме (PDF)
						</a>
						<a
							href="mailto:me@denisermolaev.com"
							className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
								border border-border text-sm font-medium
								hover:bg-muted hover:border-primary/30 transition-all"
						>
							<Mail className="w-4 h-4 group-hover:rotate-6 transition-transform" />
							me@denisermolaev.com
						</a>
					</motion.div>
				</div>
			</motion.div>

			{/* Social links */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 1.4 }}
				className="absolute bottom-2 md:bottom-12 flex items-center gap-6 text-sm text-muted-foreground"
			>
				<a
					href="https://t.me/first_millennium"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
						<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
					</svg>
					Telegram
				</a>
				<a
					href="https://github.com/denis-ermolaev"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/ermolaev-denis/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
					LinkedIn
				</a>
			</motion.div>
		</section>
	)
}
