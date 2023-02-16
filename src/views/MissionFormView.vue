<template>
  <div>
    <div class="header">
      <router-link to="/map" class="back">retour</router-link>
      <h1>Créer une nouvelle demande</h1>
    </div>
    <MissionFormComponent />
  </div>
</template>

<script>
import MissionFormComponent from "../components/MissionFormComponent.vue";
export default {
  name: "MissionFormView",
  components: {
    MissionFormComponent,
  },
};
</script>

<style lang="css" scoped>
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
</style>
