<template>
  <div class="super-hero-item">
    <div class="super-hero-picture">
        <img src='{{ imageUrl }}' alt="Citizen profile picture"/>
    </div>
    <div class="super-hero-info">
        <h3> {{ title }}</h3>
        <span>Créé par : {{ username }}</span>
        <p>{{ description }}</p>
        <span> Criticité : {{ criticity }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionItem',
  props: {
    title: String, 
    description: String, 
    username: String, 
    imageUrl: String,
    criticity: Int8Array
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