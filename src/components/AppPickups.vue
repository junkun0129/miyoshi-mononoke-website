<template>
  <div class="pickups-window">
    <button @click="prevSlide" class="arrow-left"></button>
    <transition name="fade" mode="out-in">
      <div class="slide-content">
        <img
          :src="pickups[currentSlide].pictureUrl"
          class="slide-content-picture"
        />
        <div class="slide-content-description">
          <div class="slide-content-description-title">
            {{ pickups[currentSlide].title }}
          </div>
          <div class="slide-content-description-detail">
            {{ pickups[currentSlide].detail }}
          </div>
          <div class="slide-content-description-links">
            <a
              v-for="url in pickups[currentSlide].relatedUrls"
              :key="url.title"
              :href="url.url"
            >
              @ {{ url.title }}
            </a>
          </div>
        </div>
      </div>
    </transition>
    <button @click="nextSlide" class="arrow-right"></button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { pickupsDataTempletes } from "../templetes/eventData";
export default defineComponent({
  name: "AppPickups",
  setup() {
    const pickups = ref(pickupsDataTempletes);
    const currentSlide = ref(0);
    console.log(pickupsDataTempletes[0].pictureUrl);

    return {
      pickups,
      slides: ["Slide 1", "Slide 2", "Slide 3"],
      currentSlide,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
});
</script>
<style lang="scss">
.pickups-window {
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .arrow-left {
    width: 70px;
    height: 70px;
    background: none;
    background-image: url("../assets//img/arrow.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .arrow-right {
    width: 70px;
    height: 70px;
    transform: rotate(180deg);
    background: none;
    background-image: url("../assets//img/arrow.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .slide-content {
    width: 80%;
    height: 90%;
    // border: 1px solid black;
    display: flex;
    .slide-content-picture {
      width: 50%;
      height: 100%;
      background-color: aquamarine;
    }
    .slide-content-description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
      .slide-content-description-title {
        font-size: 2rem;
        font-family: "wahu";
      }
      .slide-content-description-detail {
        width: 80%;
      }
      .slide-content-description-links {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        // align-items: center;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
