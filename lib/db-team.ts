import { createClient } from "@libsql/client";
import type { Client } from "@libsql/client";

export const teamDb = createClient({
  url: process.env.TURSO_TEAM_DATABASE_URL!,
  authToken: process.env.TURSO_TEAM_AUTH_TOKEN!,
})
