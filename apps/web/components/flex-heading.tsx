"use client"

import { useLayoutEffect, useRef } from "react"

import { cn } from "../lib/cn"

type FlexHeadingProps = {
	text: string
	className?: string
}

export default function FlexHeading({ text, className }: FlexHeadingProps) {
	const textRef = useRef<HTMLHeadingElement>(null)

	// Scale the title to the largest font size that fits on one line
	useLayoutEffect(() => {
		const text = textRef.current
		const container = text?.parentElement
		if (!container || !text)
			return

		const fit = () => {
			const style = getComputedStyle(container)
			const available
				= container.clientWidth - Number.parseFloat(style.paddingLeft) - Number.parseFloat(style.paddingRight)

			let lo = 8
			let hi = 200
			while (hi - lo > 0.5) {
				const mid = (lo + hi) / 2
				text.style.fontSize = `${mid}px`
				if (text.scrollWidth <= available)
					lo = mid
				else hi = mid
			}
			text.style.fontSize = `${lo}px`
		}
		fit()
		document.fonts?.ready.then(fit) // refit once web fonts load

		const observer = new ResizeObserver(fit)
		observer.observe(container)
		return () => observer.disconnect()
	}, [])

	return (
		<h1 ref={textRef} className={cn(className)}>{text}</h1>
	)
}
