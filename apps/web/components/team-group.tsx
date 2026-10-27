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
		} | null
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
						"sticky inset-y-0 w-full h-dvh flex flex-row justify-center px-10",
						"lg:justify-start lg:items-center",
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
						"lg:hidden",
					)
				}
				/>
				<FlexHeading
					text={title}
					className={cn(
						"mt-20 whitespace-nowrap uppercase text-[#fece1d] relative",
						"lg:mt-0",
					)}
					style={{ zIndex: zIndex + 2 }}
				/>
			</div>
			<div className={cn("w-full -mt-[100dvh]", "lg:ml-auto lg:w-[70dvw] lg:grid lg:grid-cols-2")}>
				{members.filter(m => m.portrait !== null).map(member => (
					<div
						className={cn("h-dvh flex flex-col justify-end items-center gap-10 relative")}
						key={member.name + title}
					>
						<div className={cn("flex flex-col items-center gap-0")}>
							<span className={cn("text-4xl uppercase text-[#fece1d]")}>{member.name}</span>
							{member.title && <span className={cn("uppercase")}>{member.title}</span>}
						</div>
						<Image
							src={member.portrait!.url}
							alt={`${member.name} portrait`}
							height={2000}
							width={1500}
							className={cn("w-auto h-auto max-h-[50svh]")}
						/>
					</div>
				))}
				{Array.from({ length: Math.ceil(members.filter(m => m.portrait === null).length / 3) }, (_, i) => {
					const membersGroup = members.filter(m => m.portrait === null).slice(i * 3, i * 3 + 3)
					return (
						<div
							key={`${title}no_portrait${i}`}
							className={cn("col-span-2 grid grid-cols-subgrid")}
						>
							{membersGroup.map(member => (
								<div key={title + member.name} className={cn("px-10 py-20")}>
									<div className={cn("flex flex-col items-center gap-0")}>
										<span className={cn("text-4xl uppercase text-[#fece1d]")}>{member.name}</span>
										{member.title && <span className={cn("uppercase")}>{member.title}</span>}
									</div>
								</div>
							))}
						</div>
					)
				})}
			</div>
		</div>
	)
}
