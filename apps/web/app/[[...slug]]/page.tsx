import type { Metadata } from "next"

import { notFound } from "next/navigation"
import { cache } from "react"
import { Fragment } from "react/jsx-runtime"

import type { PageSlugsQuery, PagesQuery } from "../../types/generated/graphql"

import Content from "../../components/content"
import Header from "../../components/header"
import SponsorsHeader from "../../components/sponsors-header"
import TeamGroup from "../../components/team-group"
import { capitalize } from "../../lib/capitalize"
import env from "../../lib/env"
import { PagesDocument, PageSlugsDocument } from "../../types/generated/graphql"
import { getClient, query } from "../apollo-client"

export const revalidate = 120

export async function generateStaticParams() {
	const client = getClient()
	const content = await client.query<PageSlugsQuery>({
		query: PageSlugsDocument,
		variables: {
			status: "PUBLISHED",
		},
	})

	return content.data?.pages?.flatMap(page =>
		page?.slug ? [{ slug: [page.slug] }] : [],
	) ?? []
}

const getPage = cache(async (slug: string) => {
	const pageData = await query<PagesQuery>({
		query: PagesDocument,
		variables: {
			filters: {
				slug: { eq: slug },
			},
		},
	})

	return pageData.data?.pages?.[0] ?? null
})

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params

	if (slug && slug.length > 1)
		return {}

	const id = slug?.[0] ?? "home"

	const pageData = await getPage(id)

	if (!pageData) {
		return {}
	}

	return {
		title: capitalize(pageData.title),
		description: pageData.description,
		openGraph: {
			title: capitalize(pageData.title),
			description: pageData.description,
			url: `${env.DOMAIN}/${id ?? ""}`,
			images: [{
				url: `/api/og?slug=${id}`,
			}],
		},
		twitter: {
			card: "summary_large_image",
			images: [`/api/og?slug=${id}`],
		},
	}
}

type PageProps = {
	params: Promise<{ slug?: string[] }>
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params

	if (slug && slug.length > 1)
		notFound()

	const id = slug?.[0] ?? "home"

	const pageData = await getPage(id)

	return (
		<>
			{
				pageData
				&& pageData.sections.filter(x => x !== null && x.__typename !== "Error").map((section, i) => (
					<Fragment key={section.id}>
						{
							section.__typename === "ComponentSectionsSponsorSection"
								? (
									<SponsorsHeader
										title={section.title}
										background={section.background}
										foreground={section.foreground}
										index={i + 1}
										sponsors={section.sponsors.filter(x => x !== null)}
									/>
								)
								: (
									<Header
										title={section.title}
										background={section.background}
										foreground={section.foreground}
										index={i + 1}
									/>
								)
						}
						{(() => {
							switch (section.__typename) {
								case "ComponentSectionsSponsorSection":
								case "ComponentSectionsTextSection":
									return (
										<>
											{section.contents.filter(x => x !== null).map(content => (
												<Content key={content.id} {...content} index={i + 1} />
											))}
										</>
									)
								case "ComponentSectionsTeamSection":
									return (
										<>
											{section.groups.filter(x => x !== null).map(group => (
												<TeamGroup
													key={group.title}
													title={group.title}
													members={group.members.filter(x => x !== null)}
													index={i + 1}
												/>
											))}
										</>
									)
								default:
									return null
							}
						})()}
					</Fragment>
				))
			}
		</>
	)
}
