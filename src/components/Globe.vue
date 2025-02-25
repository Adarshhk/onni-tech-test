<template>
  <section class="py-8 pt-48 -mt-28 bg-[#14171A]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
          Why Algo Trading?
        </h2>
        <p class="text-sm sm:text-base text-white font-[400] max-w-4xl mx-auto px-4 sm:px-6 mt-5">
          The market waits for no one. So, algo trading ensures you never miss an opportunity. Automate your trades, minimize risk, and trade smarter with strategies designed for success. 
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        <!-- Lightning-fast execution -->
        <div class="border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <!-- <img 
              src="/src/assets/svg/speed.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px]"
            /> -->
            <div ref="test1" class="scale-150 "></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Speed
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Execute trades in milliseconds and never miss a market move.

          </p>
        </div>

        <!-- No coding required -->
        <div class="border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <!-- <img 
              src="/src/assets/svg/precesion.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px]"
            /> -->
            <div ref="test2" ></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Precision 
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Trade with data-driven accuracy, eliminating emotions and errors.
          </p>
        </div>

        <!-- 24/7 market tracking -->
        <div class="border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <!-- <img 
              src="/src/assets/svg/automation.svg"
              alt="Code interface" 
              class="w-full h-auto object-contain max-h-[200px]"
            /> -->
            <div ref="test3" class="scale-150"></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Automation 
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Let your trades run 24/7 while you focus on what matters.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Lottie from 'lottie-web';
import { onMounted, ref } from 'vue';


const test1 = ref(null);
const test2 = ref(null);
const test3 = ref(null);

const loadAnimation = (container, path) => {
      try {
        Lottie.loadAnimation({
          container: container.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: path,
          onError: (error) => {
            console.error(`Error loading animation from ${path}:`, error);
          },
        });
      } catch (error) {
        console.error('Error initializing animation:', error);
      }
    };
onMounted(() => {
  loadAnimation(test1, '/src/assets/json/speed.json');
  loadAnimation(test2, '/src/assets/json/test2.json');
  loadAnimation(test3, '/src/assets/json/test3.json');
  
})
// Component logic remains the same
</script>

<style scoped>
/* Styles remain the same as we're using Tailwind CSS */
</style>

