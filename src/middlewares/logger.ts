import type { MiddlewareHandler } from "hono";
import { pinoLogger } from "hono-pino";
import pretty from "pino-pretty";
import pino from "pino";
import env from "~/configs/env";

function logger(): MiddlewareHandler {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL,
      },
      env.isProd ? undefined : pretty()
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}

export default logger;
