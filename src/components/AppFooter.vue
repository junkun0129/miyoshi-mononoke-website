<template>
  <div class="footer-window">
    <div class="footer-main">
      <div class="footer-title">
        <div class="footer-title-inside"></div>
      </div>
      <div class="footer-content">
        <div class="footer-content-title">問い合わせ</div>
        <div class="footer-content-content">
          <div class="footer-content-content1">
            <div class="footer-content-content1-number">TEL / 0824-69-0111</div>
            <div class="footer-content-content1-title">
              湯本豪一記念日本妖怪博物館（三次もののけミュージアム）
            </div>
          </div>
          <div class="footer-content-content2">
            <div class="footer-content-content2-number">TEL / 0824-53-1870</div>
            <div class="footer-content-content2-title">
              三次地区文化・観光まちづくり交流館
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2019 Miyoshi Mononoke Museum All rights reserved.
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppFooter",
});
</script>
<style lang="scss">
.footer-window {
  background-color: rgb(169, 123, 173);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 200px;
  border: 1px solid black;
  .footer-main {
    display: flex;
    height: 70%;
    background-color: rgb(255, 255, 255, 0.4);
    margin: 10px;
    .footer-title {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .footer-title-inside {
        width: 70%;
        height: 80%;
        background-image: url("../assets/img/youkai-logo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .footer-content {
      width: 70%;
      display: flex;
      flex-direction: column;
      height: 100%;
      .footer-content-title {
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
      }
      .footer-content-content {
        height: 60%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .footer-content-content1 {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          flex-direction: column;

          .footer-content-content1-title {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .footer-content-content1-number {
            font-size: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
        .footer-content-content2 {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          .footer-content-content2-title {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .footer-content-content2-number {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 2rem;
          }
        }
      }
    }
  }
  .copyright {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
}
</style>
