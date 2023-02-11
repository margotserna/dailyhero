<template>
  <div class="super-hero-list">
    <h1>Liste</h1>
    <div v-for="(superhero, index) in superheroes" v-bind:key="index">
        <SuperHeroItem :pseudo="superhero.pseudo" :ville="superhero.ville" :imageUrl="superhero.imageUrl"></SuperHeroItem>    
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

</style>