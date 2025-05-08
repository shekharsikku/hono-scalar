/** Types Import */
import type { Context } from "hono";

/** Hono Dependencies */
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { bodyLimit } from "hono/body-limit";
import { requestId } from "hono/request-id";
import { poweredBy } from "hono/powered-by";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { Scalar } from "@scalar/hono-api-reference";

/** Custom Utils/Middlewares */
import { favicon, logger } from "~/middlewares";
import env from "~/configs/env";
import routes from "~/routes";

/** Version Import */
import { version } from "~/package.json";

const app = new OpenAPIHono({ strict: env.STRICT_MODE });

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
    maxAge: 3600,
  })
);

app.use(
  bodyLimit({
    maxSize: env.BODY_LIMIT * 1024 * 1024,
    onError: (ctx: Context) => {
      return ctx.json({ message: "Request payload is too large!" }, 413);
    },
  })
);

app.use(requestId());
app.use(poweredBy());
app.use(prettyJSON());
app.use(secureHeaders());

/** Custom Middleware */
app.use(favicon("🔥"));
app.use(logger());

/** Docs Endpoint */
app.doc("/api/docs", {
  openapi: "3.1.0",
  info: {
    title: "OpenAPIHono",
    version,
  },
  tags: [{ name: "api", description: "OpenAPIHono" }],
});

/** Scaler API Reference */
app.get(
  "/api/reference",
  Scalar({
    theme: "default",
    layout: "modern",
    defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch",
    },
    pageTitle: "OpenAPIHono",
    url: "/api/docs",
  })
);

/** Api Routes */
app.route("/api", routes);

/** Simple GET Route */
app.get("/hello", (ctx: Context) => {
  const message = "Hono + Bun says hello. Ready to serve your requests!";
  return ctx.json({ message }, 200);
});

app.onError((err: Error, ctx: Context) => {
  const message = err.message || "Oops! Something went wrong!";
  console.error(`Error: ${message}`);
  return ctx.json({ message }, 500);
});

app.notFound((ctx: Context) => {
  const message = `Requested url '${ctx.req.path}' not found on the server!`;
  return ctx.json({ message }, 404);
});

export default app;
