<script setup lang="ts">
import { da } from "@nuxt/ui/locale";

useHead({
  htmlAttrs: {
    lang: "da",
  },
});
</script>

<template>
  <UApp :locale="da">
    <NuxtPage />
  </UApp>
</template>
