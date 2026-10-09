import { db, schema } from "@nuxthub/db";
import { defineEventHandler } from "nuxt/server";

export default defineEventHandler(async () => {
  return db.select().from(schema.products);
});
