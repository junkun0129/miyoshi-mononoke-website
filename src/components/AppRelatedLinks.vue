<template>
  <div class="window-relatedlinks">
    <p>博物館紹介</p>
    <p>チームラボ</p>
    <p>企画展</p>
    <p>博物館利用案内</p>
    <p>ミュージアムショップ</p>
    <p>交流館利用案内</p>
    <p>アクセス</p>
    <p>じゃら～ん</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppRelatedLinks",
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
  p {
    width: 20%;
    height: 40%;
    border: 1px black solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }
}
</style>
