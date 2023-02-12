<template>
  <div class="super-hero-list">
    <div class="header">
      <router-link to="/map" class="back">retour</router-link>
      <h1>Super-héros à proximité</h1>
    </div>
    <div class="list-container">
      <div v-for="(superhero, index) in superheroes" v-bind:key="index" class="list-item">
          <SuperHeroItem :pseudo="superhero.pseudo" :ville="superhero.ville" :imageUrl="superhero.imageUrl"></SuperHeroItem>    
      </div>
    </div>
  </div>
</template>

<script>
import SuperHeroItem from "./SuperHeroItem.vue";
import axios from 'axios';

export default {
  name: 'SuperHeroList',
  props: {
  }, 
  components: {
    SuperHeroItem:SuperHeroItem
  },
  mounted () {
    axios
      .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?type=hero')
      .then(response => (this.superheroes = response.data))
  }, 
  data () {
    return {
        superheroes: null
    }
  }
}
</script>

<style scoped>
  .header{
    background-color: #ff5347;
    padding: 20px;
    border-radius: 0px 0px 40px 40px;
    height: 25vh;
  }
  .header h1{
    text-align: center;
  }
  .header{
    text-align: right;
  }
  .back{
    color: var(--secondary-color);
  }
  .list-container{
    overflow-y: scroll;
    max-height: 75vh;
  }
  .list-item{
    margin: 20px 10px 0 10px;
  }
</style>