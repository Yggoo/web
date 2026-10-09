import { eq } from "drizzle-orm";
import { db, schema } from "@nuxthub/db";
import { defineEventHandler, getRouterParam, readValidatedBody } from "nuxt/server";

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  const body = await readValidatedBody(event, validateProductInput);

  const result = await db
    .update(schema.products)
    .set({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    })
    .where(eq(schema.products.id, id))
    .returning();

  return result[0];
});
