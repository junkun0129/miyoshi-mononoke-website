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
    <!-- <AllMenuContainer class="menu-bar"></AllMenuContainer> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuContainer from "@/components/SVGcomponents/MenuContainer.vue";
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
  .menu-bar {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
