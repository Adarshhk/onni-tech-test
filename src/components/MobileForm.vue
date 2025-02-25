<template>
    <div class="bg-white rounded-lg p-6 shadow-xl lg:hidden w-[90%] mx-auto max-w-4xl">
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
</template>

<script setup>
import { ref } from 'vue';



const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}

const formData = ref({
  name: '',
  email: '',
  number: ''
})
</script>