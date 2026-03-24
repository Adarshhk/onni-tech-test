<template>
  <nav class="flex justify-between items-center px-6 py-2 bg-[#F3F8F9]">
    <!-- Logo -->
    <div>
      <img src="../assets/svg/omni-logo.svg" alt="" class="w-36 md:ml-10">
    </div>

    <!-- Desktop Navigation Links -->
    <ul class="hidden md:flex space-x-12 text-[#686868] font-bold">
      <li><a @click.prevent="navigateTo('how')" href="#how" class="hover:text-[#4984c4] cursor-pointer">How it works</a>
      </li>
      <li><a @click.prevent="navigateTo('why')" href="#why" class="hover:text-[#4984c4] cursor-pointer">Why algo</a>
      </li>
      <li><a @click.prevent="navigateTo('features')" href="#features"
          class="hover:text-[#4984c4] cursor-pointer">Features</a></li>
      <li><a @click.prevent="navigateTo('pricing')" href="#pricing"
          class="hover:text-[#4984c4] cursor-pointer">Pricing</a></li>
      <li><router-link to="/payment" class="hover:text-[#4984c4]">Payment</router-link></li>
    </ul>

    <!-- Join Button -->
    <a target="_blank" href="https://app.omnitechalgo.com/"
      class="hidden md:block px-6 py-3 bg-[#4984C4] text-white rounded-md">
      Sign In
    </a>

    <!-- Mobile Menu Button -->
    <button @click="toggleNav" class="md:hidden text-gray-700 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-show="isNavOpen" class="absolute top-24 left-0 w-full bg-[#14171a] shadow-md md:hidden z-50">
      <ul class="flex flex-col text-gray-700 text-center p-4">
        <li><a @click.prevent="navigateTo('how')" href="#how"
            class="block py-2 text-white hover:text-white rounded-lg hover:bg-[#21A5F0] cursor-pointer">How it works</a>
        </li>
        <li><a @click.prevent="navigateTo('why')" href="#why"
            class="block py-2 text-white hover:text-white rounded-lg hover:bg-[#21A5F0] cursor-pointer">Why algo</a>
        </li>
        <li><a @click.prevent="navigateTo('features')" href="#features"
            class="block py-2 text-white hover:text-white rounded-lg hover:bg-[#21A5F0] cursor-pointer">Features</a>
        </li>
        <li><a @click.prevent="navigateTo('pricing')" href="#pricing"
            class="block py-2 text-white hover:text-white rounded-lg hover:bg-[#21A5F0] cursor-pointer">Pricing</a></li>
        <li><router-link to="/payment"
            class="block py-2 text-white hover:text-white rounded-lg hover:bg-[#21A5F0]">Payment</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const navigateTo = async (sectionId) => {
  // Close mobile menu
  isNavOpen.value = false;

  if (route.path !== '/') {
    // Navigate to home first, then scroll after the page loads
    await router.push({ path: '/', hash: `#${sectionId}` });
    // Small timeout to let the DOM render before scrolling
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  } else {
    // Already on home, just scroll
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>