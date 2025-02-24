<template>
  <nav class="flex justify-between items-center px-6 py-4 bg-[#e8f1f2]">
    <!-- Logo -->
    <div>
      <img src="../assets/svg/logo.svg" alt="" class="w-36 md:ml-10  ">
    </div>
    
    <!-- Navigation Links -->
    <ul class="hidden md:flex space-x-8 text-gray-700">
      <li><a href="#catalog" class="hover:text-[#21A5F0]">Catalog</a></li>
      <li><a href="#delivery" class="hover:text-[#21A5F0]">Delivery</a></li>
      <li><a href="#payment" class="hover:text-[#21A5F0]">Payment</a></li>
      <li><a href="#contact" class="hover:text-[#21A5F0]">Contact</a></li>
      <li><a href="#about" class="hover:text-[#21A5F0]">About us</a></li>
    </ul>
    
    <!-- Join Button -->
    <a target="_blank" href="https://app.omnitechalgo.com/" class="hidden md:block px-6 py-3 bg-[#21A5F0] text-white rounded-md ">
      Join Now
    </a>
    
    <!-- Mobile Menu Button -->
    <button @click="toggleNav" class="md:hidden text-gray-700 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    
    <!-- Mobile Menu -->
    <div v-show="isNavOpen" class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
      <ul class="flex flex-col text-gray-700 text-center p-4">
        <li><a href="#catalog" class="block py-2 hover:text--[#21A5F0] hover:hover:text-white rounded-lg hover:bg-[#21A5F0]">Catalog</a></li>
        <li><a href="#delivery" class="block py-2 hover:text--[#21A5F0] hover:text-white rounded-lg hover:bg-[#21A5F0]">Delivery</a></li>
        <li><a href="#payment" class="block py-2 hover:text--[#21A5F0] hover:text-white rounded-lg hover:bg-[#21A5F0]">Payment</a></li>
        <li><a href="#contact" class="block py-2 hover:text--[#21A5F0] hover:text-white rounded-lg hover:bg-[#21A5F0]">Contact</a></li>
        <li><a href="#about" class="block py-2 hover:text--[#21A5F0] hover:text-white rounded-lg hover:bg-[#21A5F0]">About us</a></li>
        <!-- <li><a href="#join" class="block py-2 bg--[#21A5F0] hover:text-white rounded-lg hover:text-white rounded-lg hover:bg-[#21A5F0]">Join Now</a></li> -->
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>
