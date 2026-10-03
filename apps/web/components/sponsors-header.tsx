import Image from "next/image"

import { cn } from "../lib/cn"
import FlexHeading from "./flex-heading"

type SponsorsHeaderProps = {
	title: string
	background: string
	/** Transparent PNG with the same dimensions as `background`. */
	backgroundHover: string | null
	sponsors: {
		image: string
		url: string
		name: string
	}[]
	index: number
}

export default function SponsorsHeader({ title, background, backgroundHover, sponsors, index }: SponsorsHeaderProps) {
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
				className={cn("relative flex flex-col justify-center overflow-x-hidden h-dvh w-full px-5 -mt-[100dvh] snap-start")}
				style={{ zIndex: zIndex + 1 }}
			>
				<FlexHeading
					text={title}
					className={cn("font-bold text-6xl uppercase text-[#fece1d] whitespace-nowrap shrink-0")}
				/>
				<div className={cn("w-max flex flex-row items-center mt-60 animate-marquee")}>
					{[...sponsors, ...sponsors].map((sponsor, i) => (
						<Image
							src={sponsor.image}
							alt={i < sponsors.length ? sponsor.name : ""}
							aria-hidden={i >= sponsors.length}
							width={1200}
							height={1200}
							className={cn("w-[80dvw] h-auto shrink-0 mx-[calc(10dvw-(var(--spacing)_*_5))]")}
							// eslint-disable-next-line react/no-array-index-key
							key={sponsor.name + i}
						/>
					))}
				</div>
			</div>
		</>
	)
}
