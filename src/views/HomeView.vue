<template>
  <div class="main-window">
    <AppHeader class="header-section"></AppHeader>
    <HeroSection class="hero-section"></HeroSection>
    <div class="section1">
      <YoukaiComponent
        url="img/bird-youkai.png"
        width="700"
        height="400"
        bottom="-100"
        right="100"
        show="web"
      ></YoukaiComponent>
      <YoukaiComponent
        url="img/runaway-youkai.png"
        width="300"
        height="150"
        bottom="-50"
        left="300"
        show="web"
      ></YoukaiComponent>
      <YoukaiComponent
        url="img/two-youkai.png"
        width="200"
        height="200"
        bottom="-100"
        left="10"
        show="web"
      ></YoukaiComponent>
      <YoukaiComponent
        url="img/weasel-youkai.png"
        width="200"
        height="200"
        bottom="-100"
        left="170"
        show="web"
      ></YoukaiComponent>
      <div class="section1-left">
        <AppEvents class="events"></AppEvents>
      </div>
      <div class="section1-right">
        <AppSchedule class="schedule"></AppSchedule>
        <AppMap class="map"></AppMap>
      </div>
    </div>
    <AppPickups class="section2"></AppPickups>
    <AppRelatedLinks class="section3"></AppRelatedLinks>
    <AppFooter class="footer-section"></AppFooter>
  </div>
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
import AppRelatedLinks from "@/components/AppRelatedLinks.vue";
import YoukaiComponent from "@/components/stylecomponents/YoukaiComponent.vue";

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
    AppRelatedLinks,
    YoukaiComponent,
  },
});
</script>

<style lang="scss">
.header-section {
  position: fixed;
  z-index: 10;
}
.main-window {
  z-index: 2;
}
@media screen and (min-width: 768px) {
  .section1 {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid black;
    height: 700px;
    margin: 50px 0;
    position: relative;

    .section1-left {
      z-index: 2;
      // border: 1px solid black;
      width: 60%;
      height: 70%;
      align-self: self-start;
      display: flex;
      align-items: center;
      justify-content: center;
      .events {
        width: 90%;
        height: 90%;
        background-color: rgb(255, 255, 255, 0.7);

        // border: 1px solid black;
      }
    }
    .section1-right {
      width: 40%;
      // height: 100%;
      display: flex;
      flex-direction: column;
      // border: 1px solid black;
      justify-content: space-around;
      align-items: center;
      z-index: 2;
      .schedule {
        width: 80%;
        // border: 1px solid black;
        // height: 40%;
        background-color: rgb(255, 255, 255, 0.7);
      }
      .map {
        // height: 50%;
        background-color: rgb(255, 255, 255, 0.7);

        // border: 1px solid black;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid black;
    height: 1100px;

    .section1-left {
      // border: 1px solid black;
      width: 90%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      .events {
        width: 90%;
        height: 90%;
        // border: 1px solid black;
      }
    }
    .section1-right {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // border: 1px solid black;
      justify-content: space-around;
      align-items: center;
      margin-top: 70px;
      .schedule {
        width: 80%;
        // border: 1px solid black;
        height: 40%;
      }
      .map {
        height: 50%;

        // border: 1px solid black;
      }
    }
  }
}

.section2 {
  margin: 50px 0;
  background-color: rgb(255, 255, 255, 0.7);
}

.section3 {
  margin: 50px 0;
}
</style>
