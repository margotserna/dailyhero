<template>
  <div class="super-hero-item">
    <div class="super-hero-picture">
      <img
        v-if="imageUrl"
        :src="require('../assets/img/icons/hero/' + imageUrl + '.png')"
        alt="Super hero profile picture"
      />
    </div>
    <div class="super-hero-info">
      <h3>{{ pseudo }}</h3>
      <p>
        <span v-if="distance">À {{ distance }} - </span>Ville : {{ ville }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuperHeroItem",
  props: {
    pseudo: String,
    ville: String,
    imageUrl: String,
    coordinates: Array,
    client_coordinates: Object,
  },
  data() {
    return {
      pseudo2: "Margot",
      distance: null,
    };
  },
  mounted() {
    let coords = this.$props.client_coordinates;
    console.log(this.$props)
    if (coords) {
      this.calculateDistance(
        coords.latitude,
        coords.longitude,
        this.$props.coordinates[0],
        this.$props.coordinates[1]
      );
    }
  },
  methods: {
    calculateDistance(lat1, lon1, lat2, lon2) {
      const earthRadius = 6371e3;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;
      const deltaLat = ((lat2 - lat1) * Math.PI) / 180;
      const deltaLon = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) *
          Math.cos(lat2) *
          Math.sin(deltaLon / 2) *
          Math.sin(deltaLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      this.distance = Math.round(earthRadius * c);
      if (this.distance > 1000){
        this.distance = Math.round(this.distance/1000) + " km";
      }else{
        this.distance += " m"
      }
    },
  },
};
</script>

<style scoped>
.super-hero-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
}

.super-hero-item img {
  width: 100%;
}

.super-hero-picture {
  width: 100px;
}
</style>
