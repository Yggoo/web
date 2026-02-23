import { eq } from 'drizzle-orm'
import { db, schema } from '@nuxthub/db'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)

  const result = await db.update(schema.products)
    .set({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    })
    .where(eq(schema.products.id, id))
    .returning()

  return result[0]
})
