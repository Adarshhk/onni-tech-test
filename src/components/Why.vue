<template>
  <div class="bg-[#e8f1f2] py-24 px-4 md:px-6 lg:px-16 font-satoshi min-h-screen">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-4xl font-extrabold mb-4 max-w-md mx-auto">Pick a plan that suits you!</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">Get the right tools, automation, and strategies to maximize your trading success.</p>
    </div>

    <div class="flex items-center justify-center md:mb-8 ">
      <span class="mr-2 text-gray-800">Monthly</span>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" v-model="isYearly" class="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
      </label>
      <span class="ml-2 text-gray-800">Yearly</span>
      <!-- Desktop json icon -->
      <div class="hidden md:block relative">
        <div ref="desktopLottieContainer" class="w-24 h-16"></div>
        <span class="text-[#21A5F0] absolute -bottom-2 left-24 w-full">Save 25%</span>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center text-center transform translate-x-16 mb-8 md:hidden">
      <!-- Mobile json icon -->
      <div ref="mobileLottieContainer" class="w-16 h-16 rotate-45"></div>
      <span class="text-[#21A5F0] text-md">Save 25%</span>
    </div>
    
    <div class="flex flex-col lg:flex-row justify-center gap-6 max-w-7xl mx-auto">
      <div v-for="(plan, index) in plans" :key="index" 
           :class="['flex-1 p-6 rounded-xl min-h-[674px] max-w-md mx-auto w-full', 
                    plan.featured ? 'bg-[#21A5F0] text-white' : 'bg-[#e8f1f2] border border-gray-300']">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-sm max-w-2xl leading-tight" 
               :class="plan.featured ? 'text-gray-200' : 'text-gray-500'">
              {{ plan.subpoint }}
            </p>
          </div>
          <span v-if="plan.discount" class="bg-[#21A5F01A] bg-opacity-30 text-[#21A5F0] text-center py-1 w-full md:w-28 rounded-full text-xs">
            {{ plan.discount }}
          </span>
        </div>
        <div class="text-5xl font-bold mb-4 flex items-baseline">
          ₹{{ calculatePrice(plan.basePrice) }}
          <span class="text-sm ml-1 font-normal" 
                :class="plan.featured ? 'text-gray-200' : 'text-gray-400'">/ Month</span>
        </div>
        <button :class="['w-full py-3 rounded-lg font-medium border transition-colors', 
                         plan.featured 
                         ? 'bg-white text-[#21A5F0] border-white hover:bg-gray-100' 
                         : 'border-[#21A5F0] text-[#21A5F0] hover:bg-[#21A5F0] hover:text-white']">
          Get Started Now
        </button>
        <div class="mt-6 space-y-3">
          <div v-for="(feature, fIndex) in plan.features" 
               :key="fIndex" 
               class="flex items-center">
            <img v-if="feature.included" src="../assets/svg/check1.svg" alt="" class="mr-2 flex-shrink-0">
            <img v-else src="../assets/svg/check2.svg" alt="" class="mr-2 flex-shrink-0">
            <span :class="!feature.included && plan.featured ? 'text-gray-200' : ''">{{ feature.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import pricingArrowAnimation from '../assets/json/pricing-arow.json';

export default {
  data() {
    return {
      isYearly: false,
      plans: [
        {
          name: 'Freebie',
          subpoint: 'Ideal for individuals who need quick access to basic features.',
          basePrice: 0,
          discount: 'Get 20% off',
          featured: false,
          features: [
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false }
          ]
        },
        {
          name: 'Freebie',
          subpoint: 'Ideal for individuals who need quick access to basic features.',
          basePrice: 0,
          discount: null,
          featured: true,
          features: [
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false }
          ]
        },
        {
          name: 'Freebie',
          subpoint: 'Ideal for individuals who need quick access to basic features.',
          basePrice: 0,
          discount: null,
          featured: false,
          features: [
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: '20,000+ of PNG & SVG graphics', included: true },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false },
            { text: 'Upload custom icons and fonts', included: false }
          ]
        }
      ]
    }
  },
  methods: {
    calculatePrice(basePrice) {
      return this.isYearly ? basePrice * 0.75 : basePrice
    },
    initLottieAnimations() {
      // Initialize desktop animation
      if (this.$refs.desktopLottieContainer) {
        lottie.loadAnimation({
          container: this.$refs.desktopLottieContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: pricingArrowAnimation
        });
      }
      
      // Initialize mobile animation
      if (this.$refs.mobileLottieContainer) {
        lottie.loadAnimation({
          container: this.$refs.mobileLottieContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: pricingArrowAnimation
        });
      }
    }
  },
  mounted() {
    this.initLottieAnimations();
  }
}
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