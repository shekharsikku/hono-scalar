import { defineConfig, Config } from "drizzle-kit";
import env from "@/configs/env";

export default defineConfig({
  schema: "./src/configs/db/schema.ts",
  out: "./src/configs/db/migrations",
  dialect: "sqlite",
  // driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} as Config);
