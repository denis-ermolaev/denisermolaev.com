"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			smoothWheel: true,
			autoRaf: true,
			content: document.body, // На html плохо работает, застревание прокруки
		})

		return () => {
			lenis.destroy()
		}
	}, [])

	return null
}
