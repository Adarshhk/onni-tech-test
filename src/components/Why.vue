<template>
  <div class="bg-[#14171A] py-24 px-4 md:px-6 lg:px-16 font-satoshi min-h-screen">

    <!-- Header -->
    <div class="pricing-header text-center mb-12 max-w-3xl mx-auto">
      <h2 class="text-2xl text-white md:text-4xl font-extrabold mb-4 max-w-md mx-auto">Pick a plan that suits you!</h2>
      <p class="text-[#E8E0E0] max-w-2xl mx-auto">Get the right tools, automation, and strategies to maximize your
        trading success.</p>
    </div>

    <!-- Tabs -->
    <div
      class="pricing-tabs flex flex-wrap items-center justify-center sm:gap-3 border border-[#4984C4] rounded-full w-max mx-auto p-1">
      <button v-for="item in tabs" :key="item" :class="[
        'py-2 px-4 sm:px-6 rounded-full font-medium transition-colors text-sm md:text-base',
        item === activeTab ? 'bg-[#4984C4] text-white' : 'text-[#A0ABBB]'
      ]" @click="activeTab = item">
        {{ item }}
      </button>
    </div>

    <!-- Save badge desktop -->
    <div class="pricing-save mx-auto flex max-w-xl mb-10 flex-col items-end">
      <div ref="desktopLottieContainer" class="w-24 h-16 pr-6 rotate-45"></div>
      <span class="text-[#21A5F0]">Save 25%</span>
    </div>

    <!-- Save badge mobile -->
    <div
      class="pricing-save flex flex-col items-center justify-center text-center transform translate-x-16 mb-8 md:hidden">
      <div ref="mobileLottieContainer" class="w-16 h-16 rotate-45"></div>
      <span class="text-[#21A5F0] text-md">Save 25%</span>
    </div>

    <!-- Cards -->
    <div class="flex flex-col text-white lg:flex-row justify-center gap-6 max-w-7xl mx-auto">
      <div v-for="(plan, index) in plans" :key="index" :data-delay="index * 150" :class="['pricing-card flex-1 p-6 rounded-xl max-w-md mx-auto w-full',
        plan.featured ? 'bg-[#21A5F0] text-white' : 'border border-white border-opacity-10']">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-sm max-w-2xl leading-tight text-[#E8E0E0]">{{ plan.subpoint }}</p>
          </div>
          <span v-if="plan.discount"
            class="bg-[#21A5F01A] bg-opacity-30 text-[#21A5F0] text-center py-1 w-full md:w-28 rounded-full text-xs">
            {{ plan.discount }}
          </span>
        </div>

        <div class="text-5xl font-bold my-8 flex items-baseline">
          ₹{{ activeTab === 'Monthly' ? plan.monthPrice : activeTab === 'Quarterly' ? plan.quaterlyPrice : activeTab ===
            'Half Yearly' ? plan.halfyearlyPrice : plan.yearlyPrice }}
          <span class="text-sm ml-1 font-normal text-[#E8E0E0]">/ Month</span>
        </div>

        <button :class="['w-full py-3 rounded-lg font-medium border transition-colors',
          plan.featured
            ? 'bg-white text-[#21A5F0] border-white hover:bg-gray-100'
            : 'border-[#21A5F0] text-[#21A5F0] hover:bg-[#21A5F022] hover:text-white']">
          Get Started Now
        </button>

        <div class="mt-6 space-y-3">
          <div v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-center">
            <img v-if="feature.included" src="../assets/svg/check1.svg" alt="" class="mr-2 flex-shrink-0">
            <img v-else src="../assets/svg/check2.svg" alt="" class="mr-2 flex-shrink-0">
            <span :class="!feature.included && plan.featured ? 'text-gray-200' : ''">{{ feature.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import pricingArrowAnimation from '/src/assets/json/pricing-arow.json';

const activeTab = ref('Monthly');
const tabs = ['Monthly', 'Quarterly', 'Half Yearly'];

const plans = ref([
  {
    name: 'Basic',
    subpoint: 'Essential features for a smooth trading experience',
    monthPrice: 9999, quaterlyPrice: 24000, halfyearlyPrice: 45000, yearlyPrice: 35000,
    discount: 'Get 20% off', featured: true,
    features: [
      { text: 'Basic Algorithm Features', included: true },
      { text: '1 Algorithm', included: true },
      { text: '2-3 Daily Trades', included: true },
      { text: 'Paper trading', included: true },
      { text: 'Email Support', included: true },
      { text: 'WhatsApp Support', included: true },
    ]
  },
  {
    name: 'Standard',
    subpoint: 'Unlock powerful tools & enhanced features for a smarter, more efficient trading experience.',
    monthPrice: 15000, quaterlyPrice: 36000, halfyearlyPrice: 72000, yearlyPrice: 45000,
    discount: null, featured: true,
    features: [
      { text: 'Standard Algorithm Features', included: true },
      { text: '3 Algorithm', included: true },
      { text: '4-5 Daily Trades', included: true },
      { text: 'Paper trading', included: true },
      { text: 'Priority Email Support', included: true },
      { text: 'WhatsApp Support', included: true },
      { text: 'Basic Reporting', included: true },
    ]
  },
  {
    name: 'Premium',
    subpoint: 'Complete access with premium features for pro traders',
    monthPrice: 25000, quaterlyPrice: 60000, halfyearlyPrice: 120000, yearlyPrice: 55000,
    discount: 'Get 20% off', featured: true,
    features: [
      { text: 'Advanced Algorithm Features', included: true },
      { text: '5+ Algorithm', included: true },
      { text: '5-8 Daily Trades', included: true },
      { text: 'Paper trading', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Whatsapp Support', included: true },
      { text: 'Detailed Analytics & Reporting', included: true },
      { text: 'Customizable Options', included: true },
    ]
  }
]);

const desktopLottieContainer = ref(null);
const mobileLottieContainer = ref(null);

const initLottieAnimations = () => {
  if (desktopLottieContainer.value) {
    lottie.loadAnimation({
      container: desktopLottieContainer.value,
      renderer: 'svg', loop: true, autoplay: true,
      animationData: pricingArrowAnimation
    });
  }
  if (mobileLottieContainer.value) {
    lottie.loadAnimation({
      container: mobileLottieContainer.value,
      renderer: 'svg', loop: true, autoplay: true,
      animationData: pricingArrowAnimation
    });
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
    { threshold: 0.12 }
  );

  // Observe header, tabs, save badge, and each card
  document.querySelectorAll(
    '.pricing-header, .pricing-tabs, .pricing-save, .pricing-card'
  ).forEach((el) => observer.observe(el));
};

onMounted(() => {
  initLottieAnimations();
  initObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
/* ── Base hidden states ── */
.pricing-header {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.pricing-tabs {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease 0.15s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}

.pricing-save {
  opacity: 0;
  transition: opacity 0.5s ease 0.25s;
}

.pricing-card {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ── Triggered state ── */
.pricing-header.in-view,
.pricing-tabs.in-view,
.pricing-save.in-view,
.pricing-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

@font-face {
  font-family: 'Satoshi';
  src: url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
}

.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>