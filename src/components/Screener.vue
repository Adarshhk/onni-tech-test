<template>
  <Navbar />
  <Tutorial />
  <StatsCard />

  <!-- <div class="  justify-center items-center w-full md:mt-10 mb-10 flex xl:hidden">
    <StatsCardMobile />
  </div> -->
  <Globe />
  <Cards />
  <Why id="why" />
  <Comparison />

  <Features id="features" />

  <Footer />
</template>

<script setup>
import Features from "./Features.vue";
import Tutorial from "./Tutorial.vue";
import Why from "./Why.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Comparison from "./Comparison.vue";
import Globe from "./Globe.vue";
import Cards from "./Cards.vue";

// import Feedback from "./StatsCard.vue";
import StatsCard from "./StatsCard.vue";
import StatsCardMobile from "./StatsCardMobile.vue";// Import StatsCard Component

</script>
