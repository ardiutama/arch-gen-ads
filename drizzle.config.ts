import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/lib/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "./arch-gen.db",
  },
});
