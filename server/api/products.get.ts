import { db, schema } from '@nuxthub/db'

export default defineEventHandler(async () => {
  return db.select().from(schema.products)
})
