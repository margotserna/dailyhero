<template>
  <div class="mission-item">
    <div class="mission-picture">
        <img v-if="imageUrl" :src='require(`@/assets/img/icons/citoyen/${imageUrl}.png`)' alt="Citizen profile picture"/>
    </div>
    <div class="mission-info">
        <h3> {{ title }}</h3>
        <p>{{ description }}</p>
        <span>Créé par : {{ username }}</span>
        
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
.mission-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: left;
  border-radius: 20px;
  background-color: var(--hero-secondary);
}

.mission-item img {
  width: 100%;
}

.mission-picture {
  width: 100px;
}
.mission-info {
  overflow: hidden;
}

.mission-info p {
  width: 100%;
}
</style>