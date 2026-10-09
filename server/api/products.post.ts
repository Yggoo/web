import { db, schema } from "@nuxthub/db";
import { defineEventHandler, readValidatedBody } from "nuxt/server";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, validateProductInput);

  const result = await db
    .insert(schema.products)
    .values({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    })
    .returning();

  return result[0];
});
