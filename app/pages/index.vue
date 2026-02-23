<template>
  <div class="min-h-screen bg-(--ui-bg-muted)">
    <!-- Hero Section -->
    <section class="bg-(--ui-bg-inverted) text-(--ui-text-inverted) py-24">
      <UContainer class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Velkommen til Yggoo
        </h1>
      </UContainer>
    </section>

    <!-- Products Section -->
    <section class="py-16">
      <UContainer class="text-center">
        <h2 class="text-3xl font-semibold mb-8">
          Yggoo står for: Ypperlige Gode Gaver Omsorgsfuldt Opfundet!
        </h2>
        <p class="font-semibold mb-8">
          Kontakt <UButton to="mailto:hedvig@yggoo.dk" variant="link">Hedvig</UButton> for yderligere information, samt bestilling og betaling.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <UCard
            v-for="product in products"
            :key="product.id"
            class="hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h3 class="text-2xl font-bold mb-4">{{ product.name }}</h3>
            <img :src="product.image" :alt="product.name" class="rounded-lg mb-4 w-full" />
            <p class="text-(--ui-text-muted) mb-4">{{ product.description }}</p>
            <UButton block class="mt-6 font-bold">Koster {{ product.price }} kr</UButton>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Footer Section -->
    <footer class="bg-(--ui-bg-inverted) text-(--ui-text-inverted) py-6 mt-16">
      <UContainer class="text-center">
        <p class="text-sm">&copy; 2025 Yggoo.</p>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
</script>
