"use client"

import type { CSSProperties } from "react"

import { useLayoutEffect, useRef } from "react"

import { cn } from "../lib/cn"

type FlexHeadingProps = {
	text: string
	high?: number
	className?: string
	style?: CSSProperties
}

export default function FlexHeading({ text, high = 100, className, style }: FlexHeadingProps) {
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
			let hi = high
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
	}, [high])

	return (
		<h1 ref={textRef} className={cn(className)} style={style}>{text}</h1>
	)
}
