import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import env from "~/configs/env";
import * as schema from "~/database/schema";

const pool = await mysql.createPool({
  uri: env.DATABASE_URL,
});

export const db = drizzle(pool, { schema, mode: "default" });
