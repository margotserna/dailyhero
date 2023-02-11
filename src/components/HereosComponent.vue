<template>
  <l-marker
    :key="marker._id"
    :lat-lng="[marker.lat,marker.lon]"
  >
    <l-icon ref="icon">
      <img class="hero-icon" :src="require(`@/assets/icon_hero/${marker.imageUrl}`)"/>
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
      required: true
    }
  }
}

</script>

<style>
  .hero-icon {
    height: 50px;
    width: auto;
    margin-top: -17px;
    margin-left: -17px;
  }
</style>