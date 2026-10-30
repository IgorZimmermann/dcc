import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

import type { PagesQuery } from "../../../types/generated/graphql"

import { PagesDocument } from "../../../types/generated/graphql"
import { getClient } from "../../apollo-client"

// Uses node:fs, so this must run on the Node.js runtime
export const runtime = "nodejs"

const size = { width: 1200, height: 630 }

type Media = { alternativeText: string | null, url: string }
type HeaderData = {
	title: string
	background: Media
	foreground: Media | null
}

async function getHeader(slug: string): Promise<HeaderData | null> {
	const client = getClient()
	const pageData = await client.query<PagesQuery>(
		{
			query: PagesDocument,
			variables: {
				filters: {
					slug: { eq: slug },
				},
			},
		},
	)

	const mainSection = pageData.data?.pages?.[0]?.sections?.[0] as HeaderData | null

	return mainSection ? { ...mainSection } : null
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get("slug")?.split("/").filter(Boolean)[0] ?? "home"

	const data = await getHeader(id)

	if (!data) {
		return new Response("Not found", { status: 404 })
	}

	const { title, background, foreground } = data

	const fontBold = await readFile(join(process.cwd(), "assets/fonts/DINCondensedBold.ttf"))

	const imgStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	} as const

	return new ImageResponse(
		(
			<div style={{ display: "flex", position: "relative", width: "100%", height: "100%" }}>
				{/* Background */}
				<img src={background.url} alt={background.alternativeText ?? ""} style={imgStyle} />

				{/* Text */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "0 40px",
					}}
				>
					<div
						style={{
							display: "flex",
							fontSize: 1200 / (title.length),
							fontWeight: 700,
							textTransform: "uppercase",
							color: "#fece1d",
							textAlign: "center",
							whiteSpace: "nowrap",
						}}
					>
						{title}
					</div>
				</div>

				{/* Foreground, layered above the text */}
				{foreground != null && (
					<img src={foreground.url} alt={foreground.alternativeText ?? ""} style={imgStyle} />
				)}

				<img
					src="http://localhost:3000/logo-text.png"
					alt="Drone Construction Club"
					style={{
						position: "absolute",
						left: 20,
						bottom: 20,
						height: 100,
					}}
				/>
			</div>
		),
		{
			...size,
			fonts: [{ name: "DIN Condensed", data: fontBold, weight: 700, style: "normal" }],
			headers: {
				"Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
			},
		},
	)
}
