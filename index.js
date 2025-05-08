import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

await jiti.import("./src/index.ts");

/*
const server = Bun.serve({
  port: 3000,
  fetch: app.fetch,
});

console.log(`Running at: ${server.url}`);
*/
