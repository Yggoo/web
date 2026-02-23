import { db, schema } from '@nuxthub/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await db.insert(schema.products).values({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
  }).returning()

  return result[0]
})
