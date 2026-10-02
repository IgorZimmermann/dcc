import Image from "next/image"
import Link from "next/link"

import { cn } from "../lib/cn"

type FooterProps = {
	motto: string
	links: {
		url: string
		text: string
	}[]
	socials: {
		url: string
		site: string
	}[]
	email: string
	year: number
}

export default function Footer({ motto, links, socials, email, year }: FooterProps) {
	return (
		<div className={cn("bg-black p-5 h-[80dvh] flex flex-col items-center justify-between")}>
			<div className={cn("flex flex-row justify-between w-full")}>
				<Image
					src="/logo-text.png"
					alt="drone construction club logo with text"
					height={400}
					width={700}
					className={cn("h-15 w-auto")}
				/>
				<Image
					src="/sdu-logo.png"
					alt="sdu logo with text"
					height={400}
					width={700}
					className={cn("h-15 w-auto")}
				/>
			</div>
			<p className={cn("uppercase")}>{motto}</p>
			<div className={cn("flex flex-col items-center gap-5")}>
				<span className={cn("uppercase text-[#fece1d]")}>website</span>
				<ul className={cn("text-center flex flex-col gap-5")}>
					{links.map(link => (
						<li className={cn("uppercase leading-5")} key={link.text}>
							<Link href={link.url} className={cn("m-0")}>{link.text}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={cn("flex flex-col items-center gap-5")}>
				<span className={cn("uppercase text-[#fece1d]")}>social media</span>
				<ul className={cn("text-center flex flex-row gap-10")}>
					{socials.map(social => (
						<li className={cn("uppercase")} key={social.site}>
							<Link href={social.url}>
								<Image src={`/social/${social.site}.svg`} alt={social.site} height={100} width={100} className={cn("h-6 w-6")} />
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={cn("flex flex-col items-center gap-5")}>
				<span className={cn("uppercase text-[#fece1d]")}>email</span>
				<Link href={`mailto:${email}`} className={cn("uppercase")}>{email}</Link>
			</div>
			<span className={cn("uppercase")}>
				&copy;
				{" "}
				{year}
				{" "}
				Drone Construction Club - SDU Sønderborg
			</span>
		</div>
	)
}
