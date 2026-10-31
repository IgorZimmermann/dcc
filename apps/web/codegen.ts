import type { CodegenConfig } from "@graphql-codegen/cli"

import env from "./lib/env"

const config: CodegenConfig = {
	schema: `${env.STRAPI_URL}/graphql`,
	documents: "../../packages/graphql-documents/**/*.graphql",
	generates: {
		"./types/generated/graphql.ts": {
			plugins: ["typescript-operations", "typed-document-node"],
			config: {
				scalars: { DateTime: "string" },
			},
		},
	},
}

export default config
