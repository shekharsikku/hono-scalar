/* eslint-disable node/no-process-env */
import { cleanEnv, str, url, num, port, bool } from "envalid";

const env = cleanEnv(process.env, {
  DATABASE_URL: url(),

  STRICT_MODE: bool({ default: false }),
  CORS_ORIGIN: str({ default: "*" }),
  BODY_LIMIT: num({ default: 10 }),
  PORT: port({ default: 4000 }),

  LOG_LEVEL: str({
    choices: ["info", "fatal", "error", "warn", "debug", "trace"],
    default: "debug",
  }),
  NODE_ENV: str({
    choices: ["development", "production"],
    default: "development",
  }),
});

export default env;
