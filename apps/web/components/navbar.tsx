"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { cn } from "../lib/cn"

type NavbarProps = {
	links: {
		url: string
		text: string
	}[]
	socials: {
		url: string
		site: string
	}[]
	email: string
}

export default function Navbar({ links, socials, email }: NavbarProps) {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

	return (
		<>
			<div className={
				cn(
					"fixed top-0 inset-x-0 z-[1000]",
					"pb-10 pt-5 px-5",
					"bg-gradient-to-b from-black/10 to-transparent",
				)
			}
			>
				<div
					className={
						cn(
							"pointer-events-none absolute inset-x-0 top-0 h-30",
							"backdrop-blur-lg",
							"[mask-image:linear-gradient(to_top,transparent,black)]",
							"transition-[height,background] duration-300",
						)
					}
					style={
						{
							height: mobileNavOpen ? "100dvh" : undefined,
							background: mobileNavOpen ? "rgba(60,60,60,0.20)" : "transparent",
							maskImage: mobileNavOpen ? "none" : undefined,
						}
					}
				/>
				<div className={cn("w-full flex flex-row justify-between items-center")}>
					<Link href="/" className={cn("w-[40dvw] text-left z-[1001]")}>
						<span className={cn("uppercase text-[#fece1d]")}>drone construction club</span>
					</Link>
					<Link href="/" className={cn("z-[1001]")}>
						<Image src="/logo.png" alt="DCC Logo" height={100} width={100} className={cn("h-10 w-10")} />
					</Link>
					<div className={cn("w-[40dvw] text-right z-[1001]")} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<span className={cn("uppercase text-white")}>{mobileNavOpen ? "close" : "menu"}</span>
					</div>
				</div>
				<div
					className={
						cn(
							"relative flex flex-col items-end justify-center gap-20 text-right",
							"h-[calc(100dvh-(var(--spacing)*25))] ",
							"opacity-0 transition-opacity duration-100 hidden",
						)
					}
					style={{ opacity: mobileNavOpen ? 1 : undefined, display: mobileNavOpen ? "flex" : undefined }}
				>
					<ul className={cn("flex flex-col gap-3")}>
						{links.map(link => (
							<li key={link.text}>
								<Link href={link.url} className={cn("uppercase")}>{link.text}</Link>
							</li>
						))}
					</ul>
					<ul className={cn("flex flex-col gap-3")}>
						{socials.map(social => (
							<li key={social.site}>
								<Link href={social.url} target="_blank">
									<Image src={`/social/${social.site}.svg`} alt={social.site} height={100} width={100} className={cn("h-6 w-6")} />
								</Link>
							</li>
						))}
					</ul>
					<Link href={`mailto:${email}`} className={cn("uppercase")}>{email}</Link>
				</div>
			</div>
		</>
	)
}
