import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nama: text("nama").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  source: text("source", { enum: ["trial", "lifetime"] }).notNull(),
  status: text("status", { enum: ["pending", "active"] })
    .notNull()
    .default("pending"),
  createdAt: text("created_at")
    .notNull()
    .default("(datetime('now'))"),
});
