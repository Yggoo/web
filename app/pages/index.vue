<template>
  <div class="min-h-screen bg-gray-50 relative">
    <!-- Hero Section -->
    <section class="hero text-white py-24">
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 1 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 1</h3>
              <img src="/images/products/01.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfäldig tekst for ting 1. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 5 kr</UButton>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 2</h3>
              <img src="/images/products/02.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting 2. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 5 kr</UButton>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 3</h3>
              <img src="/images/products/03.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting 3. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 5 kr</UButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 4 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 4</h3>
              <img src="/images/products/04.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 5 kr</UButton>
            </div>
          </div>
          <!-- Card 5 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 5</h3>
              <img src="/images/products/05.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 5 kr</UButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 7 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ting 7</h3>
              <img src="/images/products/07.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 10 kr</UButton>
            </div>
          </div>
          <!-- Card 8 - Game -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Game 1</h3>
              <img src="/images/products/game1.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for game. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 69 kr</UButton>
            </div>
          </div>
          <!-- Card 9 - Ring 1 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ring 1</h3>
              <img src="/images/products/ring1.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ring. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 35 kr</UButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 10 - Ring 2 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ring 2</h3>
              <img src="/images/products/ring2.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ring. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 35 kr</UButton>
            </div>
          </div>
          <!-- Card 11 - Ring 3 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ring 3</h3>
              <img src="/images/products/ring3.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ring. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 35 kr</UButton>
            </div>
          </div>
          <!-- Card 12 - Ring 4 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ring 4</h3>
              <img src="/images/products/ring4.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ring. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 35 kr</UButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 13 - Ring 5 -->
          <div class="w-full max-w-sm mx-auto bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ring 5</h3>
              <img src="/images/products/ring5.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ring. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center font-bold py-3 rounded-lg transition-all">Koster 35 kr</UButton>
            </div>
          </div>
        </div>
  </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-gray-800 text-white py-6 mt-16">
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
  background-color: #1f2937;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-section {
  position: relative;
}
</style>
