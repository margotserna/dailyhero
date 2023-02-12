<template>
  <div class="super-hero-item">
    <div class="super-hero-picture">
        <img src='{{ imageUrl }}' alt="Super hero profile picture"/>
    </div>
    <div class="super-hero-info">
        <h3>Super Hero : {{ pseudo }}</h3>
        <p>Ville : {{ ville }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuperHeroItem',
  props: {
    pseudo: String, 
    ville: String, 
    imageUrl: String
  }, 
  data () {
    return {
        pseudo2 : "Margot"
    }
  }
}
</script>

<style scoped>
.super-hero-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: beige;
}

.super-hero-picture {
    width: 100px;
}
</style>