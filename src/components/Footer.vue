<template>
  <footer class="bg-gray-100 pt-8 px-4 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo and Description Column -->
        <div class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start">
      <img src="../assets/svg/logo.svg" alt="" class="w-36 ">
    </div>
          <p class="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div class="flex justify-center xl:justify-start space-x-6 mt-4">
            <a href="#" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/linkedin.svg" alt="" class="w-5 h-5">
            </a>
            <a href="#" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/youtube.svg" alt="" class="w-6 h-5">
            </a>
            <a href="#" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/instagram.svg" alt="" class="w-5 h-5">
            </a>
          </div>
        </div>

        <!-- Product Section
        <div class="text-center lg:text-left">
          <h3 class="font-semibold text-gray-900 mb-4">Product</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in 5" :key="index">
              <a href="#" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Features
              </a>
            </li>
          </ul>
        </div> -->

        <!-- Company Section -->
        <div class="text-center lg:text-left">
          <h3 class="font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in 5" :key="index">
              <a href="#" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Features
              </a>
            </li>
          </ul>
        </div>

        <!-- Support Section -->
        <div class="text-center lg:text-left">
          <h3 class="font-semibold text-gray-900 mb-4">Support</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in 5" :key="index">
              <a href="#" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Features
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <h3 class="font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/call.svg" alt="" class="w-5 h-5 mr-3">
              <a href="tel:+918962336003" class="text-gray-600 text-sm">+91 8962336003</a>
            </li>
            <li class="flex items-start md:justify-center xl:justify-start">
              <img src="../assets/svg/location.svg" alt="" class="w-5 h-5 mr-3 mt-1">
              <span class="text-gray-600 text-sm text-left">
                Matrix Trading Technologies, Vidhan Sabha Road, Dubey Colony, Raipur (C.G) 492007
              </span>
            </li>
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/mail.svg" alt="" class="w-4 h-4 mr-3">
              <a href="mailto:support@matrixtradingtech.com" class="text-gray-600 text-sm">
                support@matrixtradingtech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-600 py-4 border-t border-gray-200 text-sm">
        All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
</script>