import Image from "next/image"

import { cn } from "../lib/cn"
import FlexHeading from "./flex-heading"

type HeaderProps = {
	title: string
	background: string
	/** Transparent PNG with the same dimensions as `background`. */
	backgroundHover: string | null
	index: number
}

export default function Header({ title, background, backgroundHover, index }: HeaderProps) {
	const zIndex = index * 10

	return (
		<>
			{/* Background: sticks */}
			<Image
				src={background}
				alt=""
				width={1920}
				height={1080}
				sizes="100vw"
				priority
				className={cn("sticky top-0 h-dvh w-full object-cover object-center")}
				style={{ zIndex }}
			/>

			{/* Hover image: same size as the background, sticks in sync above the text */}
			{backgroundHover != null && (
				<Image
					src={backgroundHover}
					alt=""
					width={1920}
					height={1080}
					sizes="100vw"
					priority
					className={cn("sticky top-0 h-dvh w-full -mt-[100dvh] object-cover object-center pointer-events-none")}
					style={{ zIndex: zIndex + 2 }}
				/>
			)}

			{/* Text: scrolls normally */}
			<div
				className={cn("relative flex justify-center items-center h-dvh w-full px-5 -mt-[100dvh] snap-start")}
				style={{ zIndex: zIndex + 1 }}
			>
				<FlexHeading
					text={title}
					className={cn("font-bold text-6xl uppercase text-[#fece1d] whitespace-nowrap shrink-0")}
				/>
			</div>
		</>
	)
}
