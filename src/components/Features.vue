<template>
  <div class="w-[90%] mx-auto my-24">
    <div class="w-full mx-auto px-4 py-20 bg-[#21A5F0] rounded-xl text-center relative overflow-hidden">

      <div class="absolute w-full inset-0 flex justify-between z-[0] pointer-events-none">
        <img src="/src/assets/img/loop.png" alt="">
        <img src="/src/assets/img/loop2.png" alt="" class="w-[40%]">
      </div>

      <div class="max-w-2xl mx-auto relative z-[1]">
        <h1 class="text-2xl md:text-4xl xl:text-4xl font-extrabold text-white mb-6 max-w-xl mx-auto">
          Step into the future of trading with intelligent automation!
        </h1>
        <p class="text-white text-lg mb-8 max-w-lg mx-auto">
          Experience seamless, emotion-free trading powered by smart algorithms.
        </p>
        <button @click="redirectToLogin" class="bg-white text-[#5D3CBB] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all z-[1] relative">
          Sign up Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const redirectToLogin = () => {
  window.open('https://app.omnitechalgo.com/', "_blank");
};
</script>
