<template>
  <AppHeader class="header-section"></AppHeader>
  <HeroSection class="hero-section"></HeroSection>
  <div class="section1">
    <div class="section1-left">
      <AppEvents class="events"></AppEvents>
    </div>
    <div class="section1-right">
      <AppSchedule class="schedule"></AppSchedule>
      <AppMap class="map"></AppMap>
    </div>
  </div>
  <AppPickups class="section2"></AppPickups>
  <AppFooter class="footer-section"></AppFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import HeroSection from "@/components/HeroSection.vue";
import AppEvents from "@/components/AppEvents.vue";
import AppMap from "@/components/AppMap.vue";
import AppPickups from "@/components/AppPickups.vue";
import AppSchedule from "@/components/AppSchedule.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    AppEvents,
    AppMap,
    AppPickups,
    AppSchedule,
  },
});
</script>

<style lang="scss">
.header-section {
  position: fixed;
  z-index: 10;
}

.section1 {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 500px;

  .section1-left {
    border: 1px solid black;
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .events {
      width: 90%;
      height: 90%;
      border: 1px solid black;
    }
  }
  .section1-right {
    width: 40%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    justify-content: space-around;
    align-items: center;
    .schedule {
      width: 80%;
      border: 1px solid black;
    }
    .map {
      border: 1px solid black;
    }
  }
}
</style>
