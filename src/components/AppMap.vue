<template>
  <div>アクセス</div>
  <div id="mapContainer"></div>
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
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-71.224518, 42.213995],
        zoom: 9,
      });
    });
  },
});
</script>
<style></style>
