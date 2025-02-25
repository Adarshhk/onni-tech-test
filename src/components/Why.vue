<template>
  <div class="bg-[#14171A] py-24 px-4 md:px-6 lg:px-16 font-satoshi min-h-screen">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <h2 class="text-2xl text-white md:text-4xl font-extrabold mb-4 max-w-md mx-auto">Pick a plan that suits you!</h2>
      <p class="text-[#E8E0E0] max-w-2xl mx-auto">Get the right tools, automation, and strategies to maximize your
        trading success.</p>
    </div>

    <!-- <div class="flex items-center justify-center md:mb-8 ">
      <span class="mr-2 text-gray-800">Monthly</span>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" v-model="isYearly" class="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
      </label>
      <span class="ml-2 text-gray-800">Yearly</span>
      
      <div class="hidden md:block relative">
        <div ref="desktopLottieContainer" class="w-24 h-16"></div>
        <span class="text-[#21A5F0] absolute -bottom-2 left-24 w-full">Save 25%</span>
      </div>
    </div> -->

    <div
      class="flex flex-wrap items-center justify-center sm:gap-3 mb-16 border border-[#4984C4] rounded-full w-max mx-auto p-1">

      <button v-for="item in tabs" :key="item" :class="[
        'py-2 px-4 sm:px-6 rounded-full font-medium transition-colors text-sm md:text-base',
        item === activeTab ? 'bg-[#4984C4] text-white' : 'text-[#A0ABBB]'
      ]" @click="activeTab = item">
        {{ item }}
      </button>

    </div>


    <!-- <div class="flex flex-col items-center justify-center text-center transform translate-x-16 mb-8 md:hidden">
   
      <div ref="mobileLottieContainer" class="w-16 h-16 rotate-45"></div>
      <span class="text-[#21A5F0] text-md">Save 25%</span>
    </div> -->

    <div class="flex flex-col text-white lg:flex-row justify-center gap-6 max-w-7xl mx-auto">
      <div v-for="(plan, index) in plans" :key="index" :class="['flex-1 p-6 rounded-xl max-w-md mx-auto w-full',
        plan.featured ? 'bg-[#21A5F0] text-white' : ' border border-white border-opacity-10']">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-sm max-w-2xl leading-tight text-[#E8E0E0]">
              {{ plan.subpoint }}
            </p>
          </div>
          <span v-if="plan.discount"
            class="bg-[#21A5F01A] bg-opacity-30 text-[#21A5F0] text-center py-1 w-full md:w-28 rounded-full text-xs">
            {{ plan.discount }}
          </span>
        </div>
        <div class="text-5xl font-bold my-8 flex items-baseline">
          ₹{{ activeTab === 'Monthly' ? plan.monthPrice : activeTab === 'Quarterly' ? plan.quaterlyPrice : activeTab ===
            'Half Yearly' ? plan.halfyearlyPrice : plan.yearlyPrice }}
          <span class="text-sm ml-1 font-normal text-[#E8E0E0]">/
            Month</span>
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
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';
import pricingArrowAnimation from '../assets/json/pricing-arow.json';

const activeTab = ref('Monthly');

const tabs = ['Monthly', 'Quarterly', 'Half Yearly', 'Yearly'];

const plans = ref([
  {
    name: 'Basic',
    subpoint: 'Essential features for a smooth trading experience',
    monthPrice: 9999,
    quaterlyPrice: 5000,
    halfyearlyPrice: 20000,
    yearlyPrice: 35000,
    discount: 'Get 20% off',
    featured: false,
    features: [
      { text: '01 Strategy', included: true },
      { text: 'Daily trades upto 2 to 3 times', included: true },
      { text: 'Nifty / Bank Nifty', included: true },
      { text: 'Paper trading', included: true },
    ]
  },
  {
    name: 'Standard',
    subpoint: 'Unlock powerful tools & enhanced features for a smarter, more efficient trading experience.',
    monthPrice: 15000,
    quaterlyPrice: 5000,
    halfyearlyPrice: 40000,
    yearlyPrice: 45000,
    discount: null,
    featured: true,
    features: [
      { text: '01 Strategy', included: true },
      { text: 'Daily trades upto 2 to 3 times', included: true },
      { text: 'Nifty / Bank Nifty', included: true },
      { text: 'Paper trading', included: true },
    ]
  },
  {
    name: 'Premium',
    subpoint: 'Complete access with premium features for pro traders',
    monthPrice: 25000,
    quaterlyPrice: 5000,
    halfyearlyPrice: 50000,
    yearlyPrice: 55000,
    discount: 'Get 20% off',
    featured: false,
    features: [
      { text: '01 Strategy', included: true },
      { text: 'Daily trades upto 2 to 3 times', included: true },
      { text: 'Nifty / Bank Nifty', included: true },
      { text: 'Paper trading', included: true },
    ]
  }
]);

const desktopLottieContainer = ref(null);
const mobileLottieContainer = ref(null);


const initLottieAnimations = () => {
  if (desktopLottieContainer.value) {
    lottie.loadAnimation({
      container: desktopLottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pricingArrowAnimation
    });
  }

  if (mobileLottieContainer.value) {
    lottie.loadAnimation({
      container: mobileLottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pricingArrowAnimation
    });
  }
};

onMounted(() => {
  initLottieAnimations();
});
</script>


<style>
@font-face {
  font-family: 'Satoshi';
  src: url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
}

.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>