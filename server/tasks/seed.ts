import { db, schema } from '@nuxthub/db'

export default defineTask({
  meta: {
    name: 'seed',
    description: 'Seed the database with product data',
  },
  async run() {
    const existing = await db.select().from(schema.products)
    if (existing.length > 0) {
      return { result: 'Database already seeded' }
    }

    await db.insert(schema.products).values([
      { name: 'Ting 1', description: 'Tilfældig tekst for ting 1. Der kommer snart flere detaljer.', price: 5, image: '/images/products/01.png' },
      { name: 'Ting 2', description: 'Tilfældig tekst for ting 2. Der kommer snart flere detaljer.', price: 5, image: '/images/products/02.png' },
      { name: 'Ting 3', description: 'Tilfældig tekst for ting 3. Der kommer snart flere detaljer.', price: 5, image: '/images/products/03.png' },
      { name: 'Ting 4', description: 'Tilfældig tekst for ting. Der kommer snart flere detaljer.', price: 5, image: '/images/products/04.png' },
      { name: 'Ting 5', description: 'Tilfældig tekst for ting. Der kommer snart flere detaljer.', price: 5, image: '/images/products/05.png' },
      { name: 'Ting 7', description: 'Tilfældig tekst for ting. Der kommer snart flere detaljer.', price: 10, image: '/images/products/07.png' },
      { name: 'Game 1', description: 'Tilfældig tekst for game. Der kommer snart flere detaljer.', price: 69, image: '/images/products/game1.png' },
      { name: 'Ring 1', description: 'Tilfældig tekst for ring. Der kommer snart flere detaljer.', price: 35, image: '/images/products/ring1.png' },
      { name: 'Ring 2', description: 'Tilfældig tekst for ring. Der kommer snart flere detaljer.', price: 35, image: '/images/products/ring2.png' },
      { name: 'Ring 3', description: 'Tilfældig tekst for ring. Der kommer snart flere detaljer.', price: 35, image: '/images/products/ring3.png' },
      { name: 'Ring 4', description: 'Tilfældig tekst for ring. Der kommer snart flere detaljer.', price: 35, image: '/images/products/ring4.png' },
      { name: 'Ring 5', description: 'Tilfældig tekst for ring. Der kommer snart flere detaljer.', price: 35, image: '/images/products/ring5.png' },
    ])

    return { result: 'Database seeded with 12 products' }
  },
})
