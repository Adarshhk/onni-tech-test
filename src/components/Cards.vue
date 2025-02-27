<template>
  <section class=" py-20 mt-24 relative overflow-hidden">
    <!-- Gradient Circle -->
    <img src="../assets/img/Gradient.png" alt="Gradient Background" class="absolute hidden xl:block opacity-20" />

    <div class="container mx-auto px-4 lg:px-16 ">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column -->
        <div class="max-w-xl w-full xl:ml-10 relative mx-auto ">
          <div class="sticky top-0 ">
            <div class="relative z-10">
              <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center xl:text-left">
                The Ultimate Trading Features for Market Mastery
              </h2>
              <p class="text-[#E8E0E0] mb-8 text-center xl:text-left">
                Explore the power of intelligent trading with features designed for precision, speed, and seamless
                automation.
              </p>
            </div>

            <button @click="redirectToLogin"
              class="bg-[#4984C4] text-white px-8 py-4 rounded-md font-medium transition-colors flex justify-center items-center mx-auto xl:mx-0">
              Join Now
            </button>
          </div>

          <!-- Background Radial Gradient -->
          <div class="absolute inset-0 flex md:hidden items-center justify-center">
            <div
              class="w-[350px] h-[350px] xl:w-[1000px] bg-radial-gradient opacity-50 md:opacity-50 blur-3xl transform -translate-y-20">
            </div>
          </div>
        </div>

        <!-- Right Column - Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <!-- Smart Strategy Builder -->
          <div class="bg-[#14171A] border border-white border-opacity-10 rounded-xl p-6 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="marketAnalysisAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Real-Time Market Analysis
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Leverage AI-driven insights that continuously scan the markets, identifying profitable opportunities and
              executing trades at the perfect moment.
            </p>
          </div>

          <!-- Instant Alerts -->
          <div
            class="bg-[#14171A] border border-white border-opacity-10 rounded-xl p-6 row-span-2 pt-16 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="riskManagementAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 flex items-center">
              Risk Management Controls
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Minimize potential losses with automated stop-loss, take-profit, and position-sizing strategies, ensuring
              disciplined and secure trading.
            </p>
          </div>

          <!-- AI-Powered Market Insights -->
          <div
            class="bg-[#14171A] border border-white border-opacity-10 rounded-xl p-6 row-span-2 pt-16 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="multiAssetsAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Multi-Asset Trading
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Trade across various markets, including stocks, options, forex, and crypto, all from a single platform,
              optimizing diversification and efficiency.
            </p>
          </div>

          <!-- Auto-Execution -->
          <div class="bg-[#14171A] border border-white border-opacity-10 rounded-xl p-6 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="backtestingAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Backtesting & Optimization
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Test and refine your trading strategies using historical data, allowing you to optimize performance before
              deploying them in live markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

export default {
  name: 'TradingFeaturesSection',
  setup() {
    const marketAnalysisAnimation = ref(null);
    const riskManagementAnimation = ref(null);
    const multiAssetsAnimation = ref(null);
    const backtestingAnimation = ref(null);

    const redirectToLogin = () => {
      window.open('https://app.omnitechalgo.com/', "_blank")
    }

    const loadAnimation = (container, path) => {
      try {
        lottie.loadAnimation({
          container: container.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: path,
          onError: (error) => {
            console.error(`Error loading animation from ${path}:`, error);
          },
        });
      } catch (error) {
        console.error('Error initializing animation:', error);
      }
    };

    onMounted(() => {

      loadAnimation(marketAnalysisAnimation, '/src/assets/json/3D Chart.json');
      loadAnimation(riskManagementAnimation, '/src/assets/json/risk.json');
      loadAnimation(multiAssetsAnimation, '/src/assets/json/Round Diagram.json');
      loadAnimation(backtestingAnimation, '/src/assets/json/setting.json');
    });

    return {
      marketAnalysisAnimation,
      riskManagementAnimation,
      multiAssetsAnimation,
      backtestingAnimation,
      redirectToLogin
    };
  }
};
</script>
