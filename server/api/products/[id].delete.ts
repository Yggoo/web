import { eq } from "drizzle-orm";
import { db, schema } from "@nuxthub/db";
import { defineEventHandler, getRouterParam } from "nuxt/server";

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  await db.delete(schema.products).where(eq(schema.products.id, id));

  return { deleted: true };
});
