<template>
  <div class="min-h-screen bg-(--ui-bg)">
    <!-- Hero Section -->
    <section class="relative py-32 bg-cover bg-center" style="background-image: url('/header.jpg');">
      <div class="absolute inset-0 bg-black/40" />
      <UContainer class="relative text-center">
        <p class="text-5xl mb-4">🐣</p>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Velkommen til Yggoo
        </h1>
        <p class="text-lg text-white/90 drop-shadow">
          Ypperlige Gode Gaver Omsorgsfuldt Opfundet!
        </p>
      </UContainer>
    </section>

    <!-- Products Section -->
    <section class="py-16">
      <UContainer>
        <p class="text-center font-semibold mb-12 text-(--ui-text-muted)">
          Kontakt <UButton to="mailto:hedvig@yggoo.dk" variant="link">Hedvig</UButton> for yderligere information, samt bestilling og betaling.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="product in products"
            :key="product.id"
            class="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <img :src="product.image" :alt="product.name" class="rounded-lg mb-4 w-full aspect-square object-cover" />
            <h3 class="text-xl font-bold mb-2 text-(--ui-color-primary-700)">{{ product.name }}</h3>
            <p class="text-(--ui-text-muted) text-sm mb-4">{{ product.description }}</p>
            <UButton block color="secondary" variant="soft" class="font-bold">
              {{ product.price }} kr
            </UButton>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Footer Section -->
    <footer class="bg-(--ui-color-primary-50) py-8 mt-16">
      <UContainer class="text-center">
        <p class="text-sm text-(--ui-color-primary-400)">&copy; 2025 Yggoo 🐰</p>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
</script>
