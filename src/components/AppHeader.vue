<template>
  <section class="header-window">
    <div class="header-title">
      <div class="header-title-logo"></div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 591 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.8"
          d="M549.381 72.043C549.381 111.159 85.8329 79.7082 24.0532 100.557C-37.7264 121.407 39.0066 64.2485 39.0066 25.1324C87.4082 -11.3537 398.67 44.4485 504.768 0C667.98 0 549.381 17.7911 549.381 72.043Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="menu-contents">
      <MenuContainer
        :svgCode="menu1LogoCode"
        :label="'アクセス'"
      ></MenuContainer>
      <MenuContainer
        :svgCode="menu2LogoCode"
        :label="'フロアガイド'"
      ></MenuContainer>
      <MenuContainer
        :svgCode="menu3LogoCode"
        :label="'お問い合わせ'"
      ></MenuContainer>
      <MenuContainer
        :svgCode="menu4LogoCode"
        :label="'お買い物'"
      ></MenuContainer>
    </div>
    <!-- <div id="huburger-menu" @click="animateLogo">
      <svg
        id="humburger-menu-svg"
        width="178"
        height="384"
        viewBox="0 0 178 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="humburger-menu-svg-path"
          d="M78.7791 68.8043C78.7791 99.5324 32.4742 100.136 13.8286 86.3044C0.782632 76.6265 -4.20009 16.8039 5.80419 4.80514C16.2626 -7.7383 58.524 8.4076 71.0001 18.8099C83.4761 29.2121 78.7791 49.3043 78.7791 68.8043Z"
          fill="white"
          fill-opacity="0.8"
        />
      </svg>
    </div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuContainer from "@/components/SVGcomponents/MenuContainer.vue";
import Snap from "snapsvg-cjs-ts";
import {
  menu1LogoCode,
  menu2LogoCode,
  menu3LogoCode,
  menu4LogoCode,
} from "@/assets/svgCodes";
// import AllMenuContainer from "@/components/SVGcomponents/AllMenuContainer.vue";
export default defineComponent({
  name: "AppHeader",
  components: {
    MenuContainer,
    // AllMenuContainer,
  },
  setup() {
    return { menu1LogoCode, menu2LogoCode, menu3LogoCode, menu4LogoCode };
  },
  methods: {
    animateLogo() {
      const snap = Snap("#humburger-menu-svg-path");
      console.log("kk");
      const finalPath =
        "M78.7791 28.8043C78.7791 99.5324 132.4742 400.136 113.8286 386.3044C0.782632 376.6265 -24.20009 16.8039 5.80419 4.80514C16.2626 -7.7383 58.524 8.4076 71.0001 18.8099C83.4761 29.2121 78.7791 49.3043 78.7791 68.8043Z";
      const inisialPath =
        "M78.7791 68.8043C78.7791 99.5324 32.4742 100.136 13.8286 86.3044C0.782632 76.6265 -4.20009 16.8039 5.80419 4.80514C16.2626 -7.7383 58.524 8.4076 71.0001 18.8099C83.4761 29.2121 78.7791 49.3043 78.7791 68.8043Z";
      const ss =
        "M182.002 49.6009C182.002 71.4721 157.245 375.5 119.5 375.5C98.6541 375.5 -17.7179 282.5 7.9994 254C125.759 123.498 104.916 0 125.762 0C146.607 0 182.002 19.9185 182.002 49.6009Z";

      const customEasing = (value: number) => {
        return Math.pow(value, 2); // Adjust this function to create the desired easing effect
      };
      const dom = document.getElementById("huburger-menu");
      if (dom) {
        dom.style.right = "0px";
      }
      snap.animate(
        { d: ss },
        1000, // Animation duration in milliseconds
        customEasing,
        () => {
          // Animation complete
          console.log("llllll");
          // You can add any post-animation logic here
        }
      );
    },
  },
});
</script>

<style lang="scss">
.header-window {
  width: 100vw;
  height: 20%;
  display: flex;
  align-items: center;
  position: relative;
  .header-title {
    width: 46%;
    height: 100%;
    position: relative;
    .header-title-logo {
      position: absolute;
      width: 70%;
      height: 50%;
      left: 15%;
      top: 25%;
      background-image: url("../assets/img/youkai-logo.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .menu-contents {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #huburger-menu {
    position: absolute;
    right: -90px;
    top: 0;
    transition: right 1.2s;
    // background: red;
  }
}
</style>
