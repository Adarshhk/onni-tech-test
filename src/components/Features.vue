<template>
  <div class = " px-4 xl:px-16  bg-[#e8f1f2]">
    <div class="w-full mx-auto px-4 py-20 bg-[#21A5F0] rounded-xl text-center">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-2xl md:text-4xl xl:text-4xl font-extrabold text-white mb-6 max-w-xl mx-auto">
        Step into the future of trading with intelligent automation!

      </h1>
      <p class="text-white text-lg mb-8 max-w-lg mx-auto">
        Experience seamless, emotion-free trading powered by smart algorithms.
      </p>
      <button @click="redirectToLogin" class="bg-white text-[#21A5F0] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all">
        Join Now
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
const redirectToLogin = () => {
  window.open('https://app.omnitechalgo.com/' , "_blank")
}
// Component logic can be added here if needed
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
