<template>
  <div class="map-window">
    <div class="map-title">アクセス</div>
    <div id="mapContainer" class="mapcontainer"></div>
    <div class="map-details">
      <article class="map-details-closeday">
        <h6>閉館時間</h6>
        <p></p>
      </article>
      <article class="map-details-opentimes">開館時間</article>
      <article class="map-details-entrancefee">入館料</article>
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
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  .map-title {
  }
  .mapcontainer {
    height: 60%;
    width: 100%;
  }

  .map-details {
    .map-details-closeday {
      h6 {
        font-size: 1.4rem;
      }
      p {
      }
    }
  }
}
</style>
