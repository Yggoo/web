<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-green-800 text-white py-6">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <h1 class="text-2xl font-bold">Yggoo Admin</h1>
        <UButton to="/" variant="outline" color="white">Tilbage til butik</UButton>
      </div>
    </header>

    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-lg shadow p-6">
          <p class="text-sm text-gray-500">Produkter</p>
          <p class="text-3xl font-bold text-gray-800">13</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <p class="text-sm text-gray-500">Kategorier</p>
          <p class="text-3xl font-bold text-gray-800">3</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <p class="text-sm text-gray-500">Kontakt</p>
          <p class="text-3xl font-bold text-gray-800">hedvig@yggoo.dk</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800">Produktoversigt</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Navn</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pris</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Billede</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="product in products" :key="product.name">
                <td class="px-6 py-4 text-sm text-gray-800">{{ product.name }}</td>
                <td class="px-6 py-4 text-sm text-gray-800">{{ product.price }} kr</td>
                <td class="px-6 py-4">
                  <img :src="product.image" :alt="product.name" class="h-10 w-10 rounded object-cover" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const products = [
  { name: 'Ting 1', price: 5, image: '/images/products/01.png' },
  { name: 'Ting 2', price: 5, image: '/images/products/02.png' },
  { name: 'Ting 3', price: 5, image: '/images/products/03.png' },
  { name: 'Ting 4', price: 5, image: '/images/products/04.png' },
  { name: 'Ting 5', price: 5, image: '/images/products/05.png' },
  { name: 'Ting 7', price: 10, image: '/images/products/07.png' },
  { name: 'Game 1', price: 69, image: '/images/products/game1.png' },
  { name: 'Ring 1', price: 35, image: '/images/products/ring1.png' },
  { name: 'Ring 2', price: 35, image: '/images/products/ring2.png' },
  { name: 'Ring 3', price: 35, image: '/images/products/ring3.png' },
  { name: 'Ring 4', price: 35, image: '/images/products/ring4.png' },
  { name: 'Ring 5', price: 35, image: '/images/products/ring5.png' },
]
</script>
