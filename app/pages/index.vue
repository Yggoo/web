<template>
  <div class="min-h-screen bg-red-50">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-red-600 to-green-600 text-white py-24">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Velkommen til Yggoo
        </h1>
      </div>
    </section>

    <!-- Placeholder Content Section -->
    <section class="py-16 product-section">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">
          Yggoo står for: Ypperlige Gode Gaver Omsorgsfuldt Opfundet!

        </h2>
        <h3 class="font-semibold text-gray-800 mb-8">
          Kontakt <UButton to="mailto:hedvig@yggoo.dk">Hedvig</UButton> for yderligere infomation, samt bestilling og
          betaling.
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 1 <span class="text-red-600">❄</span>
              </h3>
              <NuxtImg src="/images/products/01.png" class="rounded-lg mb-4" />
              <p class="text-gray-700">
                Tilfældig tekst for ting 1. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 5 kr</ui-button>
            </div>
          </ui-card>

          <!-- Card 2 -->
          <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 2 <span class="text-red-600">❄</span>
              </h3>
              <NuxtImg src="/images/products/02.png" class="rounded-lg mb-4" />
              <p class="text-gray-700">
                Tilfældig tekst for ting 2. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 5 kr</ui-button>
            </div>
          </ui-card>

          <!-- Card 3 -->
          <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 3 <span class="text-red-600">❄</span>
              </h3>
              <NuxtImg src="/images/products/03.png" class="rounded-lg mb-4" />
              <p class="text-gray-700">
                Tilfældig tekst for ting 3. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 5 kr</ui-button>
            </div>
          </ui-card>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 4 -->
          <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 4 <span class="text-red-600">❄</span>
              </h3>
              <NuxtImg src="/images/products/04.png" class="rounded-lg mb-4" />
              <p class="text-gray-700">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 5 kr</ui-button>
            </div>
          </ui-card>
          <!-- Card 5 -->
          <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 5 <span class="text-red-600">❄</span>
              </h3>
              <NuxtImg src="/images/products/05.png" class="rounded-lg mb-4" />
              <p class="text-gray-700">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 5 kr</ui-button>
            </div>
          </ui-card>        
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 7 -->
        <ui-card class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ting 7 <span class="text-red-600">❄</span>
            </h3>
            <NuxtImg src="/images/products/07.png" class="rounded-lg mb-4" />
            <p class="text-gray-700">
              Tilfældig tekst for ting . Der kommer snart flere detaljer.
            </p>
            <ui-button class="mt-6 w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-green-700 transition-all">Koster 10 kr</ui-button>
          </div>
        </ui-card>
      </div>
  </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-green-800 text-white py-6 mt-16">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; 2025 Yggoo.
      </p>
    </div>
  </footer>
  </div>
</template>

<script setup>
// No JavaScript needed for this simple layout
</script>

<style scoped>
.hero {
  background-image: url("https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=2070");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

.product-section {
  background-image: url("https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.product-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 0;
}

.product-section>div {
  position: relative;
  z-index: 1;
}

.contact {
  color: black;
}
</style>
