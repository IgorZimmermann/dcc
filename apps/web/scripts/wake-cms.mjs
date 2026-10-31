/* eslint-disable no-console, node/no-process-env */
import "dotenv/config"

const url = `${process.env.STRAPI_URL}/_health`
const deadline = Date.now() + 180_000

while (Date.now() < deadline) {
	try {
		const res = await fetch(url, { signal: AbortSignal.timeout(10_000) })
		console.log(`Status: ${res.status}`)
		if (res.status === 204) {
			console.log("CMS is awake")
			process.exit(0)
		}
	}
	catch (err) {
		console.log(`Error: ${err.name}: ${err.message}`, err.cause?.code ?? "")
	}
	console.log("Waiting for CMS...")
	await new Promise(r => setTimeout(r, 5_000))
}

console.error("CMS did not wake up in time")
process.exit(1)
