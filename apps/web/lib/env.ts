import { z } from "zod"
import "dotenv/config"

const envSchema = z.object({
	NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
})

/* eslint-disable-next-line node/no-process-env */
const env = envSchema.parse(process.env)

export default env
