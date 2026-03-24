<template>
  <div
    class="ai-banner bg-[#14171A] mt-24 backdrop-blur-sm rounded-3xl w-[80%] mx-auto relative z-10 hidden lg:block border border-white border-opacity-10">
    <div class="grid grid-cols-3">
      <!-- Left Content -->
      <div class="ai-text p-10 py-16 col-span-2">
        <p class="text-sm text-[white] font-medium">Let AI Do the Work!</p>
        <h2 class="text-2xl md:text-[32px] font-bold text-[#ffffff] mt-2 leading-tight">
          The future of trading isn't human -
          <span class="text-[#4984c4]"> AI is transforming markets </span>
          and trading the future today
        </h2>
      </div>

      <!-- Image -->
      <div
        class="ai-image mt-10 bg-[#06090F] border border-[#ffffff] border-opacity-10 border-b-0 rounded-t-lg flex justify-end relative mr-10">
        <img src="/src/assets/img/professional.webp" alt="Professional trader" class="absolute w-64 bottom-0 left-16" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let observer = null;

const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);
          setTimeout(() => el.classList.add('in-view'), delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.ai-banner, .ai-text, .ai-image').forEach((el) =>
    observer.observe(el)
  );
};

onMounted(() => {
  initObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
/* Banner card rises up as a whole */
.ai-banner {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.ai-banner.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Text slides in from the left */
.ai-text {
  opacity: 0;
  transform: translateX(-32px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.ai-text.in-view {
  opacity: 1;
  transform: translateX(0);
}

/* Image slides up from below */
.ai-image {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease 0.35s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s;
}

.ai-image.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>