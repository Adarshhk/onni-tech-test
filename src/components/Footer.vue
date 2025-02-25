<template>
  <footer class="bg-[#14171A] pt-8 px-4 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo and Description Column -->
        <div class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start">
            <img src="../assets/svg/logo.svg" alt="" class="w-36 ">
          </div>
          <p class="text-[#6F6C90] mt-2 text-sm">
            Innovative trading solutions designed for efficiency, accuracy, and success
          </p>
          <div class="flex justify-center xl:justify-start space-x-6 mt-4">
            
            <a target="_blank" href="https://www.youtube.com/@Diomondstocks" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/youtube.svg" alt="" class="w-6 h-5">
            </a>
            <a target="_blank" href="https://www.instagram.com/yogesh.kshirsagar2002?igshid=ZDdkNTZiNTM=" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/instagram.svg" alt="" class="w-5 h-5">
            </a>
            <a target="_blank" href="twitter.com/DiomondstocK?t=QkRn19yAk4yF64TOMtpvTA&s=08" class="text-[#5D3BBB] hover:opacity-80">
              <img src="../assets/svg/x.svg" alt="" class="w-5 h-5">
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
        <div>

        </div>
         



        <!-- Company Section -->
        <div class="text-center lg:text-left">
          <h3 class="font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#how" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                How it works
              </a>
            </li>

            <li>
              <a href="#why" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Why algo
              </a>
            </li>
            <li>
              <a href="#features" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" class="text-gray-600 hover:text-[#5D3BBB] transition-colors text-sm">
                Pricing
              </a>
            </li>
          </ul>
        </div>



        <!-- Contact Section -->
        <div class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <h3 class="font-semibold text-white mb-4">Address</h3>
          <ul class="space-y-4">
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/location.svg" alt="" class="w-5 h-5 mr-3 mt-1">
              <a class="text-gray-600 text-sm">556 ,MH.B COLONY ,SATPUR COLONY, NASHIK</a>
            </li>
          </ul>
          <h3 class="font-semibold text-white my-4">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/call.svg" alt="" class="w-5 h-5 mr-3">
              <a href="tel:+919028033569" class="text-gray-600 text-sm">+91-9028033569</a> &nbsp;&nbsp;
              <a href="tel:+919284280668" class="text-gray-600 text-sm">+91-9284280668</a>
            </li>
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/mail.svg" alt="" class="w-4 h-4 mr-3">
              <a href="mailto: info@omnitechalgo.com" class="text-gray-600 text-sm">
                info@omnitechalgo.com
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