<template>
  <div class="window-relatedlinks">
    <section v-for="(relate, index) in relates" :key="index">
      <article :style="boxStyle(relate.pictureUrl)">
        <a :href="relate.url">{{ relate.title }}</a>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { relatedLinks } from "@/templetes/eventData";
export default defineComponent({
  name: "AppRelatedLinks",
  setup() {
    const relates = ref(relatedLinks);
    return { relates };
  },
  methods: {
    boxStyle(pictureUrl: string) {
      return {
        backgroundImage: `url(${pictureUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    },
  },
});
</script>

<style lang="scss">
.window-relatedlinks {
  width: 100vw;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //   background-color: red;

  section {
    width: 20%;
    height: 40%;
    border: 1px black solid;

    article {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      // background-image: url("../assets/img/title4.png");
      background-image: url("../assets/img/title10.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      a {
        background-color: rgb(255, 255, 255, 0.9);
        padding: 20px;
        border-radius: 3px;
        font-family: "wahu";
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
