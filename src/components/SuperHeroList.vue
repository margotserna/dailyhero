<template>
  <div class="super-hero-list">
    <div class="header">
      <router-link to="/map" class="back">retour</router-link>
      <h1>Super-héros à proximité</h1>
    </div>
    <div class="list-container">
      <div
        v-for="(superhero, index) in superheroes"
        v-bind:key="index"
        class="list-item"
      >
        <SuperHeroItem
          :pseudo="superhero.pseudo"
          :ville="superhero.ville"
          :imageUrl="superhero.imageUrl"
          :coordinates="[superhero.lat, superhero.lon]"
          :client_coordinates="client_coordinates"
        ></SuperHeroItem>
      </div>
    </div>
  </div>
</template>

<script>
import SuperHeroItem from "./SuperHeroItem.vue";
import axios from "axios";

export default {
  name: "SuperHeroList",
  props: {},
  components: {
    SuperHeroItem: SuperHeroItem,
  },
  beforeMount() {
    axios
      .get(
        "https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?type=hero"
      )
      .then((response) => {
        this.superheroes = response.data;
      });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.client_coordinates = position.coords;
        },
        (error) => {
          console.log(error.message);
        }
      );
  },
  data() {
    return {
      superheroes: [],
      client_coordinates: null,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: var(--citoyen-color);
  padding: 20px;
  height: 20vh;
}
.header h1 {
  text-align: center;
  font-size: 1.5em;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
}
.header {
  text-align: right;
}
.back {
  color: var(--secondary-color);
}
.list-container {
  overflow-y: scroll;
  max-height: calc(80vh - 40px);
}
.list-item {
  margin: 20px 10px 0 10px;
  position: relative;
  /* background-color: #ffe6e4; */
  background-color: #dffaff;
}
.list-item:last-child{
  margin-bottom: 20px;
}
.list-container > ::after{
  position: absolute;
  content: '';
  width: 5px;
  height: 100%;
  top: 0px;
  background-color: var(--citoyen-color);
}
</style>
