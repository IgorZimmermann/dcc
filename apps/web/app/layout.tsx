import type { Metadata, Viewport } from "next"

import "./globals.css"

import type { NavigationQuery } from "../types/generated/graphql"

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { NavigationDocument } from "../types/generated/graphql"
import { query } from "./apollo-client"

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#fece1d",
}

export const metadata: Metadata = {
	title: {
		template: "%s | Drone Construction Club - SDU Sønderborg",
		default: "Drone Construction Club - SDU Sønderborg",
	},
}

export const revalidate = 60

export default async function RootLayout({ children }: LayoutProps<"/">) {
	const navigationData = await query<NavigationQuery>({ query: NavigationDocument })

	return (
		<html lang="en" className="antialiased">
			<body className="min-h-dvh">
				{navigationData.data && navigationData.data.navigation && (
					<Navbar
						email={navigationData.data.navigation.email.address}
						links={navigationData.data.navigation.links.filter(x => x !== null)}
						socials={navigationData.data.navigation.socials.filter(x => x !== null)}
					/>
				)}

				<main>
					{children}
				</main>

				{navigationData.data && navigationData.data.navigation && (
					<Footer
						email={navigationData.data.navigation.email.address}
						links={navigationData.data.navigation.links.filter(x => x !== null)}
						socials={navigationData.data.navigation.socials.filter(x => x !== null)}
						motto={navigationData.data.navigation.motto}
					/>
				)}
			</body>
		</html>
	)
}
