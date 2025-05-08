import { defineConfig } from "drizzle-kit";
import env from "~/configs/env";

export default defineConfig({
  schema: "./src/database/schema.ts",
  out: "./src/database/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
