<template>
  <StickyTopBar />
  <Navbar />
  <!-- <Tutorial />
  <MobileForm/> -->
  <NewHero />
  <StatsCard />
  
  <div class="mt-32 justify-center items-center w-full md:mt-10 mb-10 flex xl:hidden">
    <StatsCardMobile />
  </div>
  <Globe id="why"/>
  <Cards id="features"/>
  <Why id="pricing" />
  <Comparison id="how"/>
  <Video />
  <Features id="features" />

  <Footer />
</template>

<script setup>
import NewHero from "./NewHero.vue";
import MobileForm from "./MobileForm.vue";
import Features from "./Features.vue";
import Tutorial from "./Tutorial.vue";
import Why from "./Why.vue";
import Navbar from "./Navbar.vue";
import StickyTopBar from './StickyTopBar.vue'
import Footer from "./Footer.vue";
import Comparison from "./Comparison.vue";
import Globe from "./Globe.vue";
import Cards from "./Cards.vue";
import Video from './Video.vue'
// import Feedback from "./StatsCard.vue";
import StatsCard from "./StatsCard.vue";
import StatsCardMobile from "./StatsCardMobile.vue";// Import StatsCard Component

</script>
