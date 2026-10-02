import Image from "next/image"
import Link from "next/link"

import { cn } from "../lib/cn"

export default function Navbar() {
	return (
		<div className={
			cn(
				"fixed top-0 inset-x-0 z-[1000]",
				"flex flex-row justify-between items-center",
				"pb-10 pt-5 px-5",
				"bg-gradient-to-b from-black/10 to-transparent",
			)
		}
		>
			<div className={
				cn(
					"pointer-events-none absolute inset-x-0 top-0 h-30",
					"backdrop-blur-lg",
					"[mask-image:linear-gradient(to_top,transparent,black)]",
				)
			}
			/>
			<Link href="/" className={cn("w-[40dvw] text-left z-[1001]")}>
				<span className={cn("uppercase text-[#fece1d]")}>drone construction club</span>
			</Link>
			<Link href="/" className={cn("z-[1001]")}>
				<Image src="/logo.png" alt="DCC Logo" height={100} width={100} className={cn("h-10 w-10")} />
			</Link>
			<div className={cn("w-[40dvw] text-right z-[1001]")}>
				<span className={cn("uppercase text-white")}>menu</span>
			</div>
		</div>
	)
}
