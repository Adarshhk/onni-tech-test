<template>
  <section class="py-8 mt-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
          Why Algo Trading?
        </h2>
        <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-6 mt-5">
          The market waits for no one. So, algo trading ensures you never miss an opportunity. Automate your trades, minimize risk, and trade smarter with strategies designed for success. 
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        <!-- Lightning-fast execution -->
        <div class="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <img 
              src="/src/assets/svg/speed.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px]"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-left">
            Speed
          </h3>
          <p class="text-sm sm:text-base text-gray-600 text-left">
            Execute trades in milliseconds and never miss a market move.

          </p>
        </div>

        <!-- No coding required -->
        <div class="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <img 
              src="/src/assets/svg/precesion.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px] mb-3"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-left">
            Precision 
          </h3>
          <p class="text-sm sm:text-base text-gray-600 text-left">
            Trade with data-driven accuracy, eliminating emotions and errors.
          </p>
        </div>

        <!-- 24/7 market tracking -->
        <div class="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <img 
              src="/src/assets/svg/automation.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px]"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-left">
            Automation 
          </h3>
          <p class="text-sm sm:text-base text-gray-600 text-left">
            Let your trades run 24/7 while you focus on what matters.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic remains the same
</script>

<style scoped>
/* Styles remain the same as we're using Tailwind CSS */
</style>

