import type { MiddlewareHandler, Context, Next } from "hono";

function favicon(emoji: string): MiddlewareHandler {
  return async (ctx: Context, next: Next) => {
    if (ctx.req.path === "/favicon.ico") {
      ctx.header("Content-Type", "image/svg+xml");
      return ctx.body(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" x="-0.1em" font-size="92">${emoji}</text></svg>`
      );
    }
    return next();
  };
}

export default favicon;
