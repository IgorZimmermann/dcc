import { notFound } from "next/navigation"
import { Fragment } from "react/jsx-runtime"

import type { PagesQuery } from "../../types/generated/graphql"

import Content from "../../components/content"
import Header from "../../components/header"
import SponsorsHeader from "../../components/sponsors-header"
import TeamGroup from "../../components/team-group"
import { PagesDocument } from "../../types/generated/graphql"
import { query } from "../apollo-client"

type Props = {
	params: Promise<{ slug?: string[] }>
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	if (slug && slug.length > 1)
		notFound()

	const id = slug?.[0] ?? "home"

	const pageData = await query<PagesQuery>({
		query: PagesDocument,
		variables: {
			filters: {
				slug: { eq: id },
			},
		},
	})

	return (
		<>
			{
				pageData.data
				&& pageData.data.pages[0]
				&& pageData.data.pages[0].sections.filter(x => x !== null && x.__typename !== "Error").map((section, i) => (
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
