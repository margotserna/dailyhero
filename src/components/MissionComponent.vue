<template>
  <l-marker
    :key="marker._id"
    :lat-lng="[marker.lat, marker.lon]"
  >
    <l-icon ref="icon">
      <div class="img-marker">
        <img
          class="citizen-icon"
          :src="require(`@/assets/img/icons/hero/fox.png`)"
        />
      </div>
    </l-icon>
  </l-marker>
</template>

<script>
import { LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
export default {
  name: "MissionComponent",
  components: { LMarker, LIcon },
  props: {
    marker: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.img-marker {
  height: 50px;
  width: 50px;
  margin-top: -17px;
  margin-left: -17px;
  background-color: var(--hero-color);
  border-radius: 50%;
  display: flex;
}
.citizen-icon {
  width: 80% !important;
  margin: auto;
}
</style>
