<template>
  <div class="relative h-[80vh] overflow-hidden">
    <!-- Video Background with Overlay -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop class="absolute w-full h-full object-cover">
        <source src="/src/assets/video/trade.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-between mx-auto px-6 h-full">

      <!-- Hero Text Section -->
      <div class="text-white max-w-3xl lg:pr-12 md:mb-0 mb-12 pt-10 h-[80%]">
        <p class="hero-tag text-[16px] font-[500] mb-2">
          Trade without the stress let the algo decide!
        </p>
        <h1 class="hero-title text-4xl md:text-[64px] leading-[69px] font-bold mb-6">
          Why trade manually when the algo can do it flawlessly?
        </h1>
        <p class="hero-desc text-base md:text-lg opacity-90 leading-[32px]">
          Battling emotions, missing opportunities, and constantly watching the
          market manually. Let automation handle the complexity while you focus on
          what truly matters. Stay ahead, trade smarter, and let the algorithm work for you!
        </p>
      </div>

      <!-- Form Section -->
      <div class="hero-form bg-white rounded-lg p-6 shadow-lg w-full max-w-md hidden md:block">

        <!-- Success State -->
        <div v-if="submitted" class="flex flex-col items-center justify-center py-8 text-center">
          <div class="success-icon w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-[#363737] mb-2">Thank you!</h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            We've received your message and will get back to you shortly.
          </p>
          <button @click="resetForm"
            class="text-sm text-[#4984C4] hover:text-blue-700 underline underline-offset-2 transition-colors">
            Send another message
          </button>
        </div>

        <!-- Form State -->
        <template v-else>
          <h2 class="text-[32px] text-center font-semibold text-[#363737] mb-6">Get in touch</h2>
          <form @submit.prevent="submitForm">

            <div class="mb-4 relative">
              <label for="name" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Full Name</label>
              <input type="text" id="name" placeholder="Enter here" v-model="formData.name" required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="mb-4 relative">
              <label for="number" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Number</label>
              <input type="tel" id="number" placeholder="Enter here" v-model="formData.number" required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="mb-4 relative">
              <label for="email" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">E-mail</label>
              <input type="email" id="email" placeholder="Enter here" v-model="formData.email" required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="mb-6 relative">
              <label for="message" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Message</label>
              <textarea id="message" placeholder="Enter here" v-model="formData.message" rows="4"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"></textarea>
            </div>

            <!-- Error message -->
            <p v-if="errorMsg" class="text-red-500 text-xs mb-3 text-center">{{ errorMsg }}</p>

            <button type="submit" :disabled="loading"
              class="w-full bg-[#4984C4] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 px-4 rounded transition duration-300 flex items-center justify-center gap-2">
              <svg v-if="loading" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              {{ loading ? 'Sending...' : 'Submit' }}
            </button>
          </form>
        </template>

      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const formData = reactive({
  name: '',
  number: '',
  email: '',
  message: ''
});

const submitted = ref(false);
const loading = ref(false);
const errorMsg = ref('');

const submitForm = async () => {
  loading.value = true;
  errorMsg.value = '';

  try {
    const response = await fetch('/contact-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Server error');

    submitted.value = true;
  } catch (err) {
    errorMsg.value = 'Something went wrong. Please try again.';
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  formData.name = '';
  formData.number = '';
  formData.email = '';
  formData.message = '';
  submitted.value = false;
  errorMsg.value = '';
};

onMounted(() => {
  const animations = [
    { selector: '.hero-tag', delay: 100 },
    { selector: '.hero-title', delay: 250 },
    { selector: '.hero-desc', delay: 420 },
    { selector: '.hero-form', delay: 350 },
  ];

  animations.forEach(({ selector, delay }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    setTimeout(() => el.classList.add('in-view'), delay);
  });
});
</script>

<style scoped>
.hero-tag,
.hero-title,
.hero-desc {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-form {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-tag.in-view,
.hero-title.in-view,
.hero-desc.in-view {
  opacity: 1;
  transform: translateY(0);
}

.hero-form.in-view {
  opacity: 1;
  transform: translateX(0);
}

/* Success icon pop-in */
.success-icon {
  animation: pop-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes pop-in {
  from {
    transform: scale(0.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>