<template>
  <div
    style="height: 1370px; width: 800px; margin-left: -10px"
    v-if="gettingLocation"
  >
    <l-map ref="map" v-model:zoom="zoom" :center="[latitude, longitude]">
      <l-tile-layer
        url="http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :key="1618" :lat-lng="[latitude, longitude]">
        <l-icon ref="me-icon">
          <img
            class="me-icon"
            :src="
              require(`@/assets/icon_hero/2612562_hero_super girl_woman_wonder woman_icon.png`)
            "
          />
        </l-icon>
      </l-marker>
      <MissionComponent
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
      >
      </MissionComponent>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LIcon, LMarker } from "@vue-leaflet/vue-leaflet";
import MissionComponent from "../components/MissionComponent.vue";
import axios from "axios";

export default {
  name: "MapCitizenComponent",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker,
    MissionComponent,
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
          this.getMissionsMarkers();
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    async getMissionsMarkers() {
      axios
        .get(
          `https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/missions?lon_min=${this.lonMin}&lon_max=${this.lonMax}&lat_min=${this.latMin}&lat_max=${this.latMax}`
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
.me-icon {
  height: 50px;
  width: auto;
  margin-top: -17px;
  margin-left: -17px;
}
</style>
