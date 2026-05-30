import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const functionEntry = resolve(".vercel/output/functions/__server.func/index.mjs");

if (!existsSync(functionEntry)) {
  console.error("[fix-vercel-output] Vercel function entry not found.");
  process.exit(1);
}

writeFileSync(
  functionEntry,
  `import ssr from "./_ssr/index.mjs";

const handler = {
  fetch(request, context) {
    request.runtime ??= { name: "vercel" };
    request.runtime.vercel = { context };
    request.waitUntil = context?.waitUntil;
    return ssr.fetch(request, {}, context);
  },
};

export default handler;
`,
);

console.info("[fix-vercel-output] Routed Vercel function to TanStack Start SSR.");
