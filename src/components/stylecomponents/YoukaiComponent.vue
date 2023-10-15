<template>
  <div :style="youkaiStyle"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { CSSProperties } from "vue";

const props = defineProps({
  url: String,
  width: String,
  height: String,
  top: String,
  bottom: String,
  left: String,
  right: String,
});

const youkaiStyle = ref<CSSProperties>({
  position: "absolute",
  backgroundImage: `url(${props.url})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: `${props.width}px`,
  height: `${props.height}px`,
  top: `${props.top}px`,
  bottom: `${props.bottom}px`,
  left: `${props.left}px`,
  right: `${props.right}px`,
  zIndex: 1,
});
</script>

<style lang="scss">
.youkai {
  /* ここにスタイルを追加できます */
}
</style>
