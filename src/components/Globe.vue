<template>
  <section class="py-8 pt-48 -mt-28 bg-[#14171A]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">

      <!-- Header Section -->
      <div class="algo-header text-center mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
          Why Algo Trading?
        </h2>
        <p class="text-sm sm:text-base text-white font-[400] max-w-4xl mx-auto px-4 sm:px-6 mt-5">
          The market waits for no one. So, algo trading ensures you never miss an opportunity. Automate your trades,
          minimize risk, and trade smarter with strategies designed for success.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white sm:gap-6 md:gap-8 max-w-7xl mx-auto">

        <!-- Speed -->
        <div
          class="algo-card border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105"
          data-delay="0">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test1" class="scale-150"></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">Speed</h3>
          <p class="text-sm text-[#E8E0E0] text-[14px] text-left">
            Execute trades in milliseconds and never miss a market move.
          </p>
        </div>

        <!-- Precision -->
        <div
          class="algo-card border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105"
          data-delay="150">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test2"></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">Precision</h3>
          <p class="text-sm text-[#E8E0E0] text-[14px] text-left">
            Trade with data-driven accuracy, eliminating emotions and errors.
          </p>
        </div>

        <!-- Automation -->
        <div
          class="algo-card border border-white border-opacity-10 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105"
          data-delay="300">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test3" class="scale-150"></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">Automation</h3>
          <p class="text-sm text-[#E8E0E0] text-[14px] text-left">
            Let your trades run 24/7 while you focus on what matters.
          </p>
        </div>

      </div>
    </div>

    <!-- Promo Banner -->
    <div class="algo-banner mt-10 sm:mt-14 md:mt-16 container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
      <div
        class="relative flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#4984c4] border-opacity-40 bg-[#0d1b2e] px-8 py-8 sm:p-12 overflow-hidden">

        <div class="absolute inset-0 rounded-2xl pointer-events-none"
          style="box-shadow: inset 0 0 0 1.5px rgba(73,132,196,0.35);"></div>

        <div class="flex-1 text-left">
          <h3 class="text-white text-2xl sm:text-4xl font-bold leading-tight mb-2">
            Get 20% Off on Your First<br class="hidden sm:block" /> Algo Trading!
          </h3>
          <p class="text-[#a0aec0] text-sm sm:text-base font-normal">
            Boost your trading with AI-powered strategies.
          </p>
        </div>

        <div class="flex flex-col items-center sm:items-end gap-3 shrink-0">
          <span class="text-[#a0aec0] text-xs sm:text-sm font-medium">Limited-time offer!</span>
          <button
            class="bg-[#4984c4] hover:bg-[#3a6fa8] transition-colors duration-200 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-lg shadow-lg">
            Join Now
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Lottie from 'lottie-web';
import { onMounted, onUnmounted, ref } from 'vue';

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
    });
  } catch (error) {
    console.error('Error initializing animation:', error);
  }
};

// ── Scroll observer ──────────────────────────────────────────
let observer = null;

const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);
          setTimeout(() => el.classList.add('in-view'), delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.algo-header, .algo-card, .algo-banner').forEach((el) =>
    observer.observe(el)
  );
};

onMounted(() => {
  loadAnimation(test1, '/src/assets/json/speed.json');
  loadAnimation(test2, '/src/assets/json/test2.json');
  loadAnimation(test3, '/src/assets/json/test3.json');
  initObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
/* Header fades + rises */
.algo-header {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.algo-header.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Cards rise up with staggered data-delay */
.algo-card {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.algo-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Banner scales up subtly + fades */
.algo-banner {
  opacity: 0;
  transform: translateY(36px) scale(0.98);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.algo-banner.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>