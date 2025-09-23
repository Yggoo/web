<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-500 to-teal-400 text-white py-24">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Velkommen til Yggoo
        </h1>       
      </div>
    </section>

    <!-- Placeholder Content Section -->
    <section class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">
          Yggoo står for: Ypperlige Gode Gaver Omsorgsfuldt Opfundet!
              
        </h2>
        <h3 class="font-semibold text-gray-800 mb-8">
          Kontakt <UButton to="mailto:hedvig@yggoo.dk">Hedvig</UButton> for yderligere infomation, samt bestilling og betaling.
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 1
              </h3>
              <NuxtImg src="/images/products/01.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting 1. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 5 kr</ui-button>
            </div>
          </ui-card>

          <!-- Card 2 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 2
              </h3>
              <NuxtImg src="/images/products/02.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting 2. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 5 kr</ui-button>
            </div>
          </ui-card>

          <!-- Card 3 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 3
              </h3>
              <NuxtImg src="/images/products/03.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting 3. Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 5 kr</ui-button>
            </div>
          </ui-card>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 4 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 4
              </h3>
              <NuxtImg src="/images/products/04.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 5 kr</ui-button>
            </div>
          </ui-card>
          <!-- Card 5 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 5
              </h3>
              <NuxtImg src="/images/products/05.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 5 kr</ui-button>
            </div>
          </ui-card>
          <!-- Card 6 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 6
              </h3>
              <NuxtImg src="/images/products/06.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 10 kr</ui-button>
            </div>
          </ui-card>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          <!-- Card 7 -->
          <ui-card class="w-full max-w-sm mx-auto bg-white shadow-lg">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Ting 7
              </h3>
              <NuxtImg src="/images/products/07.png" />
              <p class="text-gray-600">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <ui-button class="mt-6 w-full text-center text-blue-600">Koster 10 kr</ui-button>
            </div>
          </ui-card>
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
  background-image: url("@/assets/images/two.jpg");
  background-repeat: no-repeat;
  background-color: rgb(122, 141, 141);
  background-position: center;
  height: 500px;
}

.contact {
  color: black;
}
</style>
