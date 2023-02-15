<template>
  <div
    class="map"
    v-if="gettingLocation"
  >
    <l-map class="map-leaflet" ref="map" v-model:zoom="zoom" :center="[latitude, longitude]">
      <l-tile-layer
        url="http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
        layer-type="base"
        name="OpenStreetMap"
        options="{ zoomControl: true, dragging: mobileDragg, tap: mobileTap }"
      ></l-tile-layer>
      <l-marker :key="1618" :lat-lng="[latitude, longitude]" @click="showDetails" style="pointer-events: auto;z-index: 10;">
        <l-icon ref="me-icon">
          <div class="marker-me">
            <div></div>
            <div></div>
            <img
              class="mine-icon"
              :src="require(`@/assets/img/icons/citoyen/fox.png`)"
            />
          </div>
        </l-icon>
      </l-marker>
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
import { LMap, LTileLayer, LIcon, LMarker } from "@vue-leaflet/vue-leaflet";
import HereosComponent from "../components/HereosComponent.vue";
import OverlayBotComponent from "../components/OverlayBotComponent.vue";
import axios from "axios";

export default {
  name: "MapCitizenComponent",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker,
    HereosComponent,
    OverlayBotComponent,
  },
  data() {
    let latitude = 0;
    let longitude = 0;
    let latMin = 0;
    let latMax = 0;
    let lonMin = 0;
    let lonMax = 0;
    let gettingLocation = false;
    return {
      zoom: 15.5,
      markers: [],
      latitude,
      longitude,
      latMin,
      latMax,
      lonMin,
      lonMax,
      gettingLocation,
    };
  },
  async created() {
    await this.getPosition();
  },
  async mounted() {
    await this.getPosition();
  },
  methods: {
    async getPosition() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.gettingLocation = true;
          this.latMin = this.latitude - 0.01618;
          this.latMax = this.latitude + 0.01618;
          this.lonMin = this.longitude - 0.01618;
          this.lonMax = this.longitude + 0.01618;
          this.getHeroesMarkers();
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    async getHeroesMarkers() {
      axios
        .get(
          `https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?lon_min=${this.lonMin}&lon_max=${this.lonMax}&lat_min=${this.latMin}&lat_max=${this.latMax}`
        )
        .then((response) => {
          this.markers = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showDetails() {
      this.$router.push({
        name: "user-details",
        params: {
          id: this.userID
        }
      });
    }
  },
};
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.map-leaflet {
  z-index: 0;
}
.overlay-bot-container {
  width: 100vw;
  height: 15vh;
  position: absolute;
  bottom: 25px;
  z-index: 10;
}
.marker-me {
  height: 50px;
  width: 50px;
  margin-top: -17px;
  margin-left: -17px;
  background-color: var(--citoyen-color);
  border-radius: 50%;
  display: flex;
  position: relative;
}
.mine-icon{
 width: 80% !important;
 margin: auto;
}
.marker-me div{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid var(--citoyen-color);
  transform: translate(-4px,-4px);
  animation: 1.2s infinite ease marker-hero-anim;
}
.marker-me div:nth-child(2){
  animation-delay: 0.4s;
}

@keyframes marker-hero-anim {
  from{
    width: 100%;
    height: 100%;
    opacity: 1;
    left: 0;
    top: 0%;

  }
  80%{
    width: 140%;
    height: 140%;
    left: -20%;
    top: -20%;
    opacity: 0;
  }
  to{
    opacity: 0;
  }
}
</style>
