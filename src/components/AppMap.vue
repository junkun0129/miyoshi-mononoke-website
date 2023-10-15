<template>
  <div class="map-window">
    <div class="map-title">アクセス</div>
    <div id="mapContainer" class="mapcontainer"></div>
    <div class="map-details">
      <article class="map-details-closeday">
        <h6>休館日</h6>
        <p>月曜</p>
      </article>
      <article class="map-details-opentimes">
        <h6>開館時間</h6>
        <p>
          10:00～17:00<br />
          10:00～21:00(6/1～10/31の金曜)
        </p>
      </article>
      <article class="map-details-entrancefee">
        <h6>入場料</h6>
        <p>480円</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import mapboxgl, { LngLat } from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoianVtcGVpNTUyNCIsImEiOiJjbG45bXdlaXgwODFsMnJuejY2Y21xNHlmIn0.4SGTIQRidawCpYXgzUxXlQ";
export default defineComponent({
  name: "AppMap",
  setup() {
    onMounted(() => {
      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/jumpei5524/clnbcmf0x00a701py593tbedb",
        center: [132.84751, 34.81124],
        zoom: 13,
        attributionControl: false,
      });
      const markerCoordinates = [132.84751, 34.81124];

      // マーカーを生成
      // const marker = new mapboxgl.Marker({ color: "black", rotation: 45 })
      //   .setLngLat([132.84751, 34.81124])
      //   .addTo(map);
    });
  },
});
</script>
<style lang="scss">
.map-window {
  width: 80%;
  // height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255, 0.5);

  padding: 10px;
  .map-title {
    font-family: "wahu";
    font-size: 2rem;
    margin: 10px;
  }
  .mapcontainer {
    // height: 60%;
    width: 100%;
    margin-bottom: 5px;
  }

  .map-details {
    width: 100%;
    // height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    article {
      // border: 1px solid black;
      display: flex;
      width: 90%;
      // height: 25%;
      margin: 5px 0;
    }
    h6 {
      width: 30%;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      font-family: "wahu";
    }
    p {
      display: flex;
      align-items: center;
    }
  }
}
</style>
