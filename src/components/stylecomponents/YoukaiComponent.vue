<template>
  <div v-if="isShowYoukai" :style="youkaiStyle"></div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
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
  show: String,
});
const isShowYoukai = ref(false);
const youkaiStyle = ref<CSSProperties>({
  position: "absolute",
  backgroundImage: `url(${props.url})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: `${props.width}px`,
  height: `${props.height}px`,
  zIndex: 1,
});

if (props.top) {
  youkaiStyle.value.top = `${props.top}px`;
}
if (props.bottom) {
  youkaiStyle.value.bottom = `${props.bottom}px`;
}
if (props.left) {
  youkaiStyle.value.left = `${props.left}px`;
}
if (props.right) {
  youkaiStyle.value.right = `${props.right}px`;
}

watchEffect(() => {
  if (props.show === "web") {
    isShowYoukai.value = window.matchMedia("(min-width: 768px)").matches;
  }
  if (props.show === "mobile") {
    isShowYoukai.value = window.matchMedia("(max-width: 768px)").matches;
  }
});

// 画面のリサイズ時にも再評価
window.addEventListener("resize", () => {
  watchEffect(() => {
    if (props.show === "web") {
      isShowYoukai.value = window.matchMedia("(min-width: 768px)").matches;
    }
    if (props.show === "mobile") {
      isShowYoukai.value = window.matchMedia("(max-width: 768px)").matches;
    }
  });
});
</script>

<style lang="scss">
.youkai {
  /* ここにスタイルを追加できます */
}
</style>
