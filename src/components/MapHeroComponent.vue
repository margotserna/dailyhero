<template>
  <div
    class="map"
    v-if="gettingLocation"
  >
    <l-map class="map-leaflet" ref="map" v-model:zoom="zoom" :center="[latitude, longitude]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <HereosComponent
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
      >
      </HereosComponent>
    </l-map>
      <div class="overlay-bot-container">
        <OverlayBotComponent />
      </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import HereosComponent from "../components/HereosComponent.vue";
import OverlayBotComponent from "../components/OverlayBotComponent.vue";
import axios from "axios";

export default {
  name: "MapHeroComponent",
  components: {
    LMap,
    LTileLayer,
    HereosComponent,
    OverlayBotComponent,
  },
  data() {
    let latitude = 0;
    let longitude = 0;
    let gettingLocation = false;
    return {
      zoom: 15.5,
      markers: [],
      latitude,
      longitude,
      gettingLocation,
    };
  },
  async created() {
    await this.getPosition();
    await this.getHeroesMarkers();
  },
  async mounted() {
    await this.getPosition();
    await this.getHeroesMarkers();
  },
  methods: {
    async getPosition() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.gettingLocation = true;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    async getHeroesMarkers() {
      axios
        .get(
          `https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?lon_min=-2&lon_max=2&lat_min=42&lat_max=50`
        )
        .then((response) => {
          this.markers = response.data;
          console.log(this.markers[0])
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.map{
  height: 100vh; 
  width: 100vw;
  position: relative;
}
.map-leaflet{
  z-index: 0;
}
.overlay-bot-container{
  width: 100vw;
  height: 15vh;
  position: absolute;
  bottom: 25px;
  z-index: 10;
}
</style>
