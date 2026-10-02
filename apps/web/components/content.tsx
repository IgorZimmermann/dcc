import Link from "next/link"

import { cn } from "../lib/cn"
import FlexHeading from "./flex-heading"

type ContentProps = {
	title: string
	text: string
	index: number
	action: {
		link: string
		text: string
	}
}

export default function Content({ title, text, index, action }: ContentProps) {
	const zIndex = index * 10 + 7

	return (
		<div
			className={cn(
				"h-dvh relative p-5 flex flex-col items-center justify-center gap-25",
				"bg-[rgba(60,60,60,0.20)] backdrop-blur-lg",
				"snap-start",
			)}
			style={{ zIndex }}
		>
			<FlexHeading className={cn("whitespace-nowrap uppercase text-[#fece1d]")} text={title} />
			{/* eslint-disable-next-line react/dom-no-dangerously-set-innerhtml */}
			<p className={cn("[&_mark]:text-[#fece1d] [&_mark]:bg-transparent uppercase text-justify")} dangerouslySetInnerHTML={{ __html: text }} />
			<div className={cn("flex flex-row w-full justify-around")}>
				<Link href={action.link} className={cn("px-8 py-3 uppercase text-xl bg-[#fece1d]")} key={action.text}>
					{action.text}
				</Link>
			</div>
		</div>
	)
}
