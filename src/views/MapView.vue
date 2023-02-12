<template>
  <div v-if="this.$store.state.user.type == 'hero'">
    <MapHeroComponent />
  </div>
  <div v-else>
    <MapCitizenComponent />
  </div>
</template>

<script>
import MapHeroComponent from "../components/MapHeroComponent.vue";
import MapCitizenComponent from "../components/MapCitizenComponent.vue";
export default {
  name: "MapView",
  components: {
    MapHeroComponent,
    MapCitizenComponent,
  },
};
</script>
