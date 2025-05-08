import env from "~/configs/env";
import app from "~/app";

const server = Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
  maxRequestBodySize: env.BODY_LIMIT * 1024 * 1024,
});

console.log(`Server is running at: ${server.url}`);
