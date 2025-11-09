<template>
  <div class="min-h-screen bg-red-50 relative">
    <!-- Snow Animation -->
    <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
    </div>
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 1 -->
          <div class="festive-card w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 1 <span class="text-red-600">❄</span>
              </h3>
              <img src="/images/products/01.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfäldig tekst for ting 1. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 5 kr</UButton>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 2 <span class="text-red-600">❄</span>
              </h3>
              <img src="/images/products/02.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting 2. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 5 kr</UButton>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 3 <span class="text-red-600">❄</span>
              </h3>
              <img src="/images/products/03.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting 3. Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 5 kr</UButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Card 4 -->
          <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 4 <span class="text-red-600">❄</span>
              </h3>
              <img src="/images/products/04.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 5 kr</UButton>
            </div>
          </div>
          <!-- Card 5 -->
          <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span class="text-red-600">❄</span> Ting 5 <span class="text-red-600">❄</span>
              </h3>
              <img src="/images/products/05.png" class="rounded-lg mb-4" />
              <p class="text-gray-700 mb-4">
                Tilfældig tekst for ting . Der kommer snart flere detaljer.
              </p>
              <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 5 kr</UButton>
            </div>
          </div>        
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Card 7 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ting 7 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/07.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ting . Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 10 kr</UButton>
          </div>
        </div>
        <!-- Card 8 - Game -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Game 1 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/game1.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for game. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 69 kr</UButton>
          </div>
        </div>
        <!-- Card 9 - Ring 1 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ring 1 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/ring1.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ring. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 35 kr</UButton>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Card 10 - Ring 2 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ring 2 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/ring2.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ring. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 35 kr</UButton>
          </div>
        </div>
        <!-- Card 11 - Ring 3 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ring 3 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/ring3.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ring. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 35 kr</UButton>
          </div>
        </div>
        <!-- Card 12 - Ring 4 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ring 4 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/ring4.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ring. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 35 kr</UButton>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Card 13 - Ring 5 -->
        <div class="festive-card rounded-lg overflow-hidden w-full max-w-sm mx-auto bg-gradient-to-br from-white to-green-50 shadow-2xl border-4 border-red-300 hover:shadow-red-200 hover:scale-105 transition-all duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span class="text-red-600">❄</span> Ring 5 <span class="text-red-600">❄</span>
            </h3>
            <img src="/images/products/ring5.png" class="rounded-lg mb-4" />
            <p class="text-gray-700 mb-4">
              Tilfældig tekst for ring. Der kommer snart flere detaljer.
            </p>
            <UButton class="mt-6 w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Koster 35 kr</UButton>
          </div>
        </div>
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

/* Snow Animation */
.snowflakes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -10%;
  color: white;
  font-size: 1.5em;
  opacity: 0.8;
  animation: fall linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}

.snowflake:nth-child(1) {
  left: 10%;
  animation-duration: 10s;
  animation-delay: 0s;
  font-size: 1.2em;
}

.snowflake:nth-child(2) {
  left: 20%;
  animation-duration: 12s;
  animation-delay: 1s;
  font-size: 1.8em;
}

.snowflake:nth-child(3) {
  left: 30%;
  animation-duration: 8s;
  animation-delay: 2s;
  font-size: 1.5em;
}

.snowflake:nth-child(4) {
  left: 40%;
  animation-duration: 14s;
  animation-delay: 0.5s;
  font-size: 2em;
}

.snowflake:nth-child(5) {
  left: 50%;
  animation-duration: 11s;
  animation-delay: 1.5s;
  font-size: 1.3em;
}

.snowflake:nth-child(6) {
  left: 60%;
  animation-duration: 9s;
  animation-delay: 3s;
  font-size: 1.7em;
}

.snowflake:nth-child(7) {
  left: 70%;
  animation-duration: 13s;
  animation-delay: 0s;
  font-size: 1.4em;
}

.snowflake:nth-child(8) {
  left: 80%;
  animation-duration: 10s;
  animation-delay: 2.5s;
  font-size: 1.6em;
}

.snowflake:nth-child(9) {
  left: 90%;
  animation-duration: 12s;
  animation-delay: 1s;
  font-size: 1.9em;
}

.snowflake:nth-child(10) {
  left: 15%;
  animation-duration: 11s;
  animation-delay: 3.5s;
  font-size: 1.1em;
}

.snowflake:nth-child(11) {
  left: 65%;
  animation-duration: 9s;
  animation-delay: 2s;
  font-size: 2.1em;
}

.snowflake:nth-child(12) {
  left: 85%;
  animation-duration: 13s;
  animation-delay: 0.5s;
  font-size: 1.4em;
}
</style>
