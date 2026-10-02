import type { Metadata, Viewport } from "next"

import "./globals.css"

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
	return (
		<html lang="en" className="antialiased">
			<body className="min-h-dvh">{children}</body>
		</html>
	)
}
