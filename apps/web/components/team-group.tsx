import Image from "next/image"

import { cn } from "../lib/cn"
import FlexHeading from "./flex-heading"

type TeamGroupProps = {
	title: string
	members: {
		name: string
		portrait: {
			alternativeText: string | null
			url: string
		}
		title: string | null
	}[]
	index: number
}

export default function TeamGroup({ title, members, index }: TeamGroupProps) {
	const zIndex = index * 10

	return (
		<div
			className={cn(
				"w-full relative",
				"bg-[rgba(60,60,60,0.20)] backdrop-blur-lg",
			)}
			style={{ zIndex }}
		>
			<div
				className={
					cn(
						"sticky inset-y-0 w-full flex flex-row justify-center px-10",
					)
				}
				style={{ zIndex: zIndex + 1 }}
			>
				<div className={
					cn(
						"pointer-events-none absolute inset-x-0 top-0 h-90",
						"backdrop-blur-lg",
						"[mask-image:linear-gradient(to_top,transparent_0%,rgba(0,0,0,0.70)_73%,black_100%)]",
						"bg-[rgba(60,60,60,0.20)]",
					)
				}
				/>
				<FlexHeading
					text={title}
					className="mt-20 whitespace-nowrap uppercase text-[#fece1d] relative"
					style={{ zIndex: zIndex + 2 }}
				/>
			</div>
			<div className={cn("w-full")}>
				{members.map(member => (
					<div
						className={cn("h-dvh flex flex-col justify-end items-center gap-10 relative")}
						key={member.name + title}
					>
						<div className={cn("flex flex-col items-center gap-0")}>
							<span className={cn("text-4xl uppercase text-[#fece1d]")}>{member.name}</span>
							{member.title && <span className={cn("uppercase")}>{member.title}</span>}
						</div>
						<Image
							src={member.portrait.url}
							alt={`${member.name} portrait`}
							height={2000}
							width={1500}
							className={cn("w-auto h-auto max-h-[50svh]")}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
