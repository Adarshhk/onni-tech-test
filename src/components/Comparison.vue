<template>
  <section class="max-w-7xl my-24 mx-auto text-center px-4 md:px-8 relative">
    <div class="absolute inset-0 w-full flex justify-between">
      <div class="bg-[#172F49] h-[200px] w-[200px] blur-3xl bg-opacity-50"></div>
      <div class="bg-[#172F49] h-[200px] w-[200px] blur-3xl bg-opacity-50"></div>
    </div>

    <!-- Header -->
    <div class="max-w-4xl mx-auto observe-fade" data-delay="0">
      <h2 class="text-2xl md:text-4xl font-extrabold text-white">
        Say goodbye to stress and hello to smart trading
      </h2>
      <p class="text-[#E8E0E0] mt-5 max-w-2xl mx-auto">
        Unlike traditional manual trading, we offer automation powered by smart strategies to enhance your trading
        experience.
      </p>
    </div>

    <!-- Steps Section -->
    <div
      class="mt-12 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-4 lg:gap-12">

      <!-- Step 1 -->
      <div class="flex flex-col items-center md:w-[45%] lg:w-auto observe-rise" data-delay="0">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <div ref="signupAnimation" class="w-16 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Sign up in minutes and get started.</p>
      </div>

      <!-- Connector 1 -->
      <div class="md:hidden lg:block observe-fade" data-delay="100">
        <img src="../assets/img/Ellipse.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 2 -->
      <div class="flex flex-col items-center md:w-[45%] lg:w-auto observe-rise" data-delay="150">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <div ref="connectAnimation" class="w-16 p-1 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Connect your broker for seamless integration.</p>
      </div>

      <!-- Connector 2 -->
      <div class="md:hidden lg:block observe-fade" data-delay="200">
        <img src="../assets/img/Ellipse2.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col items-center md:w-[45%] lg:w-auto observe-rise" data-delay="300">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <div ref="strategyAnimation" class="w-16 p-2 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Choose a strategy that fits your trading style.</p>
      </div>

      <!-- Connector 3 -->
      <div class="md:hidden lg:block observe-fade" data-delay="350">
        <img src="../assets/img/Ellipse.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 4 -->
      <div class="flex flex-col items-center md:w-[45%] lg:w-auto observe-rise" data-delay="450">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <div ref="aiAnimation" class="w-16 h-16 p-2"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Deploy trades automatically and let AI work for you.
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="w-full py-10 relative mt-32">
      <div class="bg-[#172F49] absolute h-[200px] w-full z-[-1] blur-3xl bg-opacity-60"></div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div class="bg-[#4984C4] py-8 rounded-lg observe-rise" data-delay="0">
          <h3 class="text-3xl font-extrabold text-white">{{ count1 }}+</h3>
          <p class="text-white mt-1">Customizable Strategies</p>
        </div>

        <div class="bg-[#4984C4] py-8 rounded-lg observe-rise" data-delay="150">
          <h3 class="text-3xl font-extrabold text-white">{{ formatNumber(count2) }}+</h3>
          <p class="text-white mt-1">Active Users</p>
        </div>

        <div class="bg-[#4984C4] py-8 rounded-lg observe-rise" data-delay="300">
          <h3 class="text-3xl font-extrabold text-white">{{ count3 }}%</h3>
          <p class="text-white mt-1">Trade Execution Accuracy</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Lottie from 'lottie-web';
import { onMounted, onUnmounted, ref } from 'vue';

const signupAnimation = ref(null);
const connectAnimation = ref(null);
const strategyAnimation = ref(null);
const aiAnimation = ref(null);

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
          const delay = el.dataset.delay || 0;
          setTimeout(() => {
            el.classList.add('in-view');
          }, Number(delay));
          observer.unobserve(el); // animate once
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.observe-rise, .observe-fade').forEach((el) => {
    observer.observe(el);
  });
};

// ── Counting animation ───────────────────────────────────────
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);

const formatNumber = (num) => new Intl.NumberFormat().format(num);

const animateValue = (target, duration, element) => {
  const increment = (target / duration) * 10;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.value = target;
      clearInterval(timer);
    } else {
      element.value = Math.round(current * 100) / 100;
    }
  }, 10);
};

onMounted(() => {
  loadAnimation(signupAnimation, '/src/assets/json/tap.json');
  loadAnimation(connectAnimation, '/src/assets/json/link.json');
  loadAnimation(strategyAnimation, '/src/assets/json/graph.json');
  loadAnimation(aiAnimation, '/src/assets/json/ai.json');

  initObserver();

  animateValue(30, 2000, count1);
  animateValue(5000, 2000, count2);
  animateValue(90.99, 2000, count3);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
/* ── Rise animation (steps & stat cards) ── */
.observe-rise {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.observe-rise.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ── Fade animation (connectors & header) ── */
.observe-fade {
  opacity: 0;
  transition: opacity 0.7s ease;
}

.observe-fade.in-view {
  opacity: 1;
}
</style>