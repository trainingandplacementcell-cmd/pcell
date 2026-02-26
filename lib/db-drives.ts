import { createClient, Client } from "@libsql/client";

let drivesDb: Client;

if (process.env.TURSO_DRIVES_DATABASE_URL && process.env.TURSO_DRIVES_AUTH_TOKEN) {
  drivesDb = createClient({
    url: process.env.TURSO_DRIVES_DATABASE_URL,
    authToken: process.env.TURSO_DRIVES_AUTH_TOKEN,
  });
} else {
  // Create a mock client for build time when env vars aren't available
  drivesDb = {
    execute: async () => ({ rows: [] }),
    batch: async () => [],
    transaction: async () => ({
      execute: async () => ({ rows: [] }),
      commit: async () => {},
      rollback: async () => {},
      close: async () => {},
    }),
    close: async () => {},
  } as unknown as Client;
}

export { drivesDb };