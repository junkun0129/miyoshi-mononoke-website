<template>
  <div class="window">
    <section class="text-frame">
      <p class="text1">妖怪たちの</p>
      <p class="text2">かくれざと</p>
    </section>
    <a class="topic-window">
      <img class="topic-picture" src="../assets/img/title10.png" />
      <article class="topic-detail">
        <p class="topic-date">2022/08/09</p>
        <p class="topic-title">「もののけ秋祭り」開催中です。</p>
      </article>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroSection",
});
</script>

<style lang="scss">
@font-face {
  font-family: "wahu";
  src: url("../../public/font/wahu2.otf") format("opentype");
}
@keyframes change {
  0% {
    background-image: url("../assets/img/title11.png");
  }
  20% {
    background-image: url("../assets/img/title4.png");
  }
  40% {
    background-image: url("../assets/img/title6.png");
  }
  60% {
    background-image: url("../assets/img/title7.png");
  }
  80% {
    background-image: url("../assets/img/title8.png");
  }
  100% {
    background-image: url("../assets/img/title9.png");
  }
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "wahu";
}
body::-webkit-scrollbar {
  display: none;
}
.window {
  width: 100%;
  height: 100vh;
  // background-color: green;
  background-image: url("../assets/img/original.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: change 30s infinite ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .text-frame {
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-size: 2.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10%;
    height: 50%;
    .text1 {
    }
    .text2 {
      display: flex;
      justify-content: end;
    }
  }

  .topic-window {
    margin: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 15%;
    display: flex;
    &:hover .topic-detail {
      text-decoration: underline;
    }
    .topic-picture {
      width: 30%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
    .topic-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: white;
      padding-left: 15px;
      .topic-title {
        font-size: 1.3rem;
      }
    }
  }

  .topic-window a:hover {
    text-decoration: underline;
  }
}
</style>
