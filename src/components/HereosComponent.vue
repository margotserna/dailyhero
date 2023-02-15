<template>
  <l-marker
    :key="marker._id"
    :lat-lng="[marker.lat, marker.lon]"
  >
    <l-icon ref="icon">
      <div class="img-marker-hero">
        <img
          class="hero-icon"
          :src="require(`@/assets/img/icons/hero/${marker.imageUrl}.png`)"
        />
      </div>
    </l-icon>
  </l-marker>
</template>

<script>
import { LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
export default {
  name: "HereosComponent",
  components: { LMarker, LIcon },
  props: {
    marker: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.img-marker-hero {
  height: 50px;
  width: 50px;
  margin-top: -17px;
  margin-left: -17px;
  background-color: var(--hero-color);
  border-radius: 50%;
  display: flex;
}
.hero-icon {
  width: 80% !important;
  margin: auto;
}
</style>
