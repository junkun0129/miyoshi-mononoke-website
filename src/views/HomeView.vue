<template>
  <div class="main-window">
    <AppHeader class="header-section"></AppHeader>
    <HeroSection class="hero-section"></HeroSection>
    <div class="section1">
      <div class="bird-youkai"></div>
      <div class="runaway-youkai"></div>
      <div class="two-youkai"></div>
      <div class="weasel-youkai"></div>
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
    .bird-youkai {
      position: absolute;
      background-image: url("../assets/img/bird-youkai.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 700px;
      height: 400px;
      bottom: -70px;
      right: 100px;
      z-index: 1;
      transform: rotate(-10deg);
    }
    .runaway-youkai {
      position: absolute;
      background-image: url("../assets/img/runaway-youkai.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 250px;
      height: 250px;
      bottom: -90px;
      left: 300px;
      z-index: 1;
    }
    .two-youkai {
      position: absolute;
      background-image: url("../assets/img/two-youkai.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 250px;
      height: 250px;
      bottom: -90px;
      left: 100px;
      z-index: 1;
    }
    .weasel-youkai {
      position: absolute;
      background-image: url("../assets/img/weasel-youkai.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 250px;
      height: 250px;
      bottom: -90px;
      right: 100px;
      z-index: 1;
    }
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
