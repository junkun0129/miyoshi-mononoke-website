<template>
  <div>アクセス</div>
  <GoogleMap
    api-key="AIzaSyCLMvo_s8JFciYhn2XIBjYADYPn6Vzk_Yw"
    style="width: 100%; height: 100px"
  >
    <Marker :options="markerOptions"></Marker>
  </GoogleMap>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
export default defineComponent({
  name: "AppMap",
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    const markerOptions = {
      position: center,
      label: "L",
      title: "LADY LIBERTY",
    };
    return { center, markerOptions };
  },
});
</script>
<style></style>
