<template>
  <UMain>
    <UPageHero
      headline="🐣 Yggoo"
      title="Velkommen til Yggoo"
      description="Ypperlige Gode Gaver Omsorgsfuldt Opfundet!"
      orientation="horizontal"
      :links="[
        {
          label: 'Kontakt Hedvig',
          to: 'mailto:hedvig@yggoo.dk',
          icon: 'i-lucide-mail',
        },
      ]"
    >
      <NuxtImg
        src="/header.jpg"
        alt="Udvalg af håndlavede gaver fra Yggoo"
        width="720"
        height="540"
        class="aspect-4/3 w-full rounded-lg object-cover ring ring-default"
      />
    </UPageHero>

    <UPageSection
      title="Ypperlige gaver"
      description="Kontakt Hedvig for yderligere information samt bestilling og betaling."
    >
      <UPageGrid>
        <UPageCard
          v-for="product in products"
          :key="product.id"
          :title="product.name"
          :description="product.description"
          variant="subtle"
        >
          <template #header>
            <NuxtImg
              :src="product.image"
              :alt="product.name"
              provider="none"
              width="640"
              height="640"
              class="aspect-square w-full rounded-lg object-cover"
            />
          </template>

          <template #footer>
            <UBadge :label="`${product.price} kr`" color="secondary" variant="soft" />
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>
  </UMain>

  <UFooter>
    <template #left>
      <UBadge :label="`© ${new Date().getFullYear()} Yggoo 🐰`" color="neutral" variant="subtle" />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const { data: products } = await useFetch("/api/products");
</script>
