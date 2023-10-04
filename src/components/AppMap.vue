<template>
  <div class="map-window">
    <div class="map-title">アクセス</div>
    <div id="mapContainer" class="mapcontainer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoianVtcGVpNTUyNCIsImEiOiJjbG45bXdlaXgwODFsMnJuejY2Y21xNHlmIn0.4SGTIQRidawCpYXgzUxXlQ";
export default defineComponent({
  name: "AppMap",
  setup() {
    onMounted(() => {
      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/jumpei5524/clnbcmf0x00a701py593tbedb",
        center: [-71.224518, 42.213995],
        zoom: 9,
        attributionControl: false,
      });
    });
  },
});
</script>
<style lang="scss">
.map-window {
  width: 80%;

  margin-top: 10px;
  margin-bottom: 10px;
  .map-title {
  }
  .mapcontainer {
    height: 300px;
  }
}
</style>
