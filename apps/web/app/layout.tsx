import type { Metadata, Viewport } from "next"

import "./globals.css"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#fece1d",
}

export const metadata: Metadata = {
	title: "DCC",
	description: "Drone Construction Club - SDU Sønderborg",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
	const navbarData = {
		links: [
			{
				url: "/",
				text: "home",
			},
			{
				url: "/about",
				text: "about",
			},
			{
				url: "/team",
				text: "team",
			},
			{
				url: "/gallery",
				text: "gallery",
			},
			{
				url: "/sponsorships",
				text: "sponsorships",
			},
		],
		socials: [
			{
				url: "https://instagram.com/droneconstructionclub",
				site: "instagram",
			},
			{
				url: "https://www.youtube.com/@DroneConstructionClub",
				site: "youtube",
			},
			{
				url: "https://linkedin.com/company/drone-construction-club",
				site: "linkedin",
			},
		],
		email: "dcc@org.sdu.dk",
		motto: "student-led drone engineering club at sdu sønderborg",
		year: 2026,
	}

	return (
		<html lang="en" className="antialiased">
			<body className="min-h-dvh">
				<Navbar {...navbarData} />

				<main>
					{children}
				</main>

				<Footer {...navbarData} />
			</body>
		</html>
	)
}
