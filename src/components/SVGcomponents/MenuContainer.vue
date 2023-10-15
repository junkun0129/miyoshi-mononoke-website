<template>
  <div class="window-menucontainer">
    <div class="menucontainer-logo" v-html="svgCode"></div>
    <h4 class="menucontainer-title">{{ label }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuContainer",
  props: {
    svgCode: String,
    label: String,
  },
});
</script>

<style lang="scss">
.window-menucontainer {
  width: 8vw;
  height: 15vh;
  position: relative;
  // background-color: red;
  .menucontainer-title {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "wahu";
  }
  .menucontainer-logo {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
