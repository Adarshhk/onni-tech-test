<template>
  <div class="cta-section w-[90%] mx-auto my-24">
    <div class="w-full mx-auto px-4 py-20 bg-[#21A5F0] rounded-xl text-center relative overflow-hidden">

      <div class="absolute w-full inset-0 flex justify-between z-[0] pointer-events-none">
        <img src="/src/assets/img/loop.png" alt="">
        <img src="/src/assets/img/loop2.png" alt="" class="w-[40%]">
      </div>

      <div class="max-w-2xl mx-auto relative z-[1]">
        <h1 class="cta-title text-2xl md:text-4xl xl:text-4xl font-extrabold text-white mb-6 max-w-xl mx-auto">
          Step into the future of trading with intelligent automation!
        </h1>
        <p class="cta-sub text-white text-lg mb-8 max-w-lg mx-auto">
          Experience seamless, emotion-free trading powered by smart algorithms.
        </p>
        <button
          class="cta-btn bg-white text-[#5D3CBB] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all z-[1] relative"
          @click="redirectToLogin">
          Sign up Now
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const redirectToLogin = () => {
  window.open('https://app.omnitechalgo.com/', '_blank');
};

// ── Scroll observer ──────────────────────────────────────────
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

  document.querySelectorAll(
    '.cta-section, .cta-title, .cta-sub, .cta-btn'
  ).forEach((el) => observer.observe(el));
};

onMounted(() => initObserver());
onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
/* Whole card scales up subtly + fades */
.cta-section {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.cta-section.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Title drops in from above */
.cta-title {
  opacity: 0;
  transform: translateY(-24px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.cta-title.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Subtext rises from below */
.cta-sub {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s ease 0.35s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.35s;
}

.cta-sub.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Button pops in last with a slight scale */
.cta-btn {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.55s ease 0.5s, transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;
}

.cta-btn.in-view {
  opacity: 1;
  transform: scale(1);
}
</style>