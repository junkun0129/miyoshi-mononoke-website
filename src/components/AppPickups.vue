<template>
  <div class="pickups-window">
    <!-- <div class="pickups-container">
      <div v-for="pickup in pickups" :key="pickup.id">
        {{ pickup.title }}
      </div>
    </div> -->
    <div class="slide-show">
      <transition name="fade" mode="out-in">
        <div :key="currentSlide" class="slide">
          {{ pickups[currentSlide].title }}
        </div>
      </transition>
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
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
    return {
      pickups,
      slides: ["Slide 1", "Slide 2", "Slide 3"],
      currentSlide,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      console.log("next");
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      console.log("pre");
    },
  },
});
</script>
<style lang="scss">
.pickups-window {
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  .pickups-container {
    width: 90%;
    height: 90%;
    border: 1px black solid;
  }
  .slide-show {
    text-align: center;
    position: relative;
  }
  .slide {
    display: inline-block;
    padding: 20px;
    border: 1px solid #ccc;
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
