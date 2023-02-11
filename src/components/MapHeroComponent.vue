<template>
  <div style="height:1370px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[latitude, longitude]">
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
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import HereosComponent from "../components/HereosComponent.vue";

export default {
  name: "MapHeroComponent",
  components: {
    LMap,
    LTileLayer,
    HereosComponent,
  },
  data() {
    return {
      zoom: 17,
      markers: [
        {_id: 1, name:"Simon", imageUrl: '4043232_avatar_batman_comics_hero_icon.png', lat: 47.21109806793403, lon: -1.5683161025038441 },
        {_id: 2, name:"Margot", imageUrl: '2612562_hero_super girl_woman_wonder woman_icon.png', lat: 47.21167747037057, lon: -1.5664760727139542 },
      ],
      latitude: 0,
      longitude: 0
    };
  },
  beforeCreate(){
    navigator.geolocation.getCurrentPosition(
     position => {
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;
     },
     error => {
       console.log(error.message);
     },
  )
  }
};
</script>

<style></style>