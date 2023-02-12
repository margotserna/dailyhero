<template>
  <l-marker
    :key="marker._id"
    :lat-lng="[marker.lat,marker.lon]"
  >
    <l-icon ref="icon">
      <img class="mission-icon" :src="require(`@/assets/icon_hero/2612562_hero_super girl_woman_wonder woman_icon.png`)"/>
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
      required: true
    }
  }
}

</script>

<style>
  .mission-icon {
    height: 50px;
    width: auto;
    margin-top: -17px;
    margin-left: -17px;
  }
</style>