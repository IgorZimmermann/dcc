import type { MetadataRoute } from "next"

import type { PagesSitemapQuery } from "../types/generated/graphql"

import env from "../lib/env"
import { PagesSitemapDocument } from "../types/generated/graphql"
import { getClient } from "./apollo-client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const client = getClient()

	const pagesSitemapData = await client.query<PagesSitemapQuery>({
		query: PagesSitemapDocument,
		variables: {
			status: "PUBLISHED",
		},
	})

	if (!pagesSitemapData) {
		return []
	}

	return pagesSitemapData.data?.pages.map(page => (
		{
			url: `${env.DOMAIN}/${page?.slug}`,
			lastModified: new Date(page?.updatedAt as string),
			changeFrequency: "monthly",
			priority: page?.slug === "home" ? 1 : 0.8,
		}
	),
	) ?? []
}
