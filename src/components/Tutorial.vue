<template>
  <section class="relative overflow-hidden h-[120vh]" >
    <!-- Slider Container -->
     <div class="h-[32rem] lg:h-[80%]">
    <div class="relative w-full h-full overflow-hidden">
      <div class="flex w-full h-full transition-transform duration-500 ease-in-out" :style="{
        transform: `translateX(-${currentPosition}%)`,
        transition: isResetting ? 'none' : 'transform 500ms ease-in-out'
      }">
        
        <!-- Slide 1 -->
        <div class="min-w-full h-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-white text-lg mb-4">Let <span class="text-[#20367A]">AI </span> Do the Work!</p>
            <h1 class="text-white text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Stay Ahead with Intelligent
              Trading Solutions!</h1>
            <p class="text-white/90 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="min-w-full h-full bg flex items-center">
          <div class="container mx-auto px-5 lg:px-10 h-full flex items-center">
            <div class="border min-w-[60%] backdrop-blur-lg p-6 rounded-lg border-[#ffffff]/50 h-[80%]">
              <p class="text-white text-lg mb-4">Let AI Do the Work!</p>
              <h1 class="text-white text-[36px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-xl">Trade Smarter with AI-Powered Algorithms!</h1>
              <p class="text-white/90 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="min-w-full h-full bg-[#e5d9f2] flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-black text-lg mb-4">Let <span class="text-[#20367A]">AI </span> Do the Work!</p>
            <h1 class="text-black text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Stay Ahead with Intelligent
              Trading Solutions!</h1>
            <p class="text-black/90 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>

        <!-- Duplicate of Slide 1 for continuous effect -->
        <div class="min-w-full h-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-white text-lg mb-4">Let <span class="text-[#20367A]">AI </span> Do the Work!</p>
            <h1 class="text-white text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Stay Ahead with Intelligent
              Trading Solutions!</h1>
            <p class="text-white/90 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Fixed Form -->
    <div class="absolute top-2/3 lg:bottom-auto lg:top-1/2 lg:right-6 lg:-translate-y-1/2 w-full lg:h-[80%] h-[32rem] flex items-start max-w-lg">
      <div class="bg-white rounded-lg p-6 shadow-xl lg:h-[70%] ">
        <h2 class="text-[32px] text-center font-bold mb-2 text-[#212B27]">Get in touch</h2>
        <p class="text-[#32403B] text-[14px] mb-6">We're committed to providing the best support for our traders!</p>

        <form @submit.prevent="handleSubmit" class="">
          <div>
            <label class="block text-sm font-medium text-[#6B7888]">Full Name</label>
            <input type="text" v-model="formData.name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required>
          </div>

          <div class="mt-4">
            <label class="block text-sm font-medium text-[#6B7888]">Email</label>
            <input type="email" v-model="formData.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required>
          </div>

          <div class="mt-4">
            <label class="block text-sm font-medium text-[#6B7888]">Number</label>
            <input type="tel" v-model="formData.number"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required>
          </div>

          <button type="submit"
            class="w-full bg-[#191D23] mt-4 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const isResetting = ref(false)
const currentPosition = ref(0)
const formData = ref({
  name: '',
  email: '',
  number: ''
})

let intervalId

const nextSlide = () => {
  isResetting.value = false
  currentSlide.value++
  currentPosition.value = currentSlide.value * 100

  if (currentSlide.value >= 3) {
    setTimeout(() => {
      isResetting.value = true
      currentSlide.value = 0
      currentPosition.value = 0
    }, 500)
  }
}

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 2000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style>
.bg {
  background-image: url('/src/assets/img/herobg2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>