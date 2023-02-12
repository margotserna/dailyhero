<template>
  <div class="mission-list">
    <div class="header">
      <router-link to="/map" class="back">retour</router-link>
      <h1>Missions à proximité</h1>
    </div>
    <div class="list-container">
      <div v-for="(mission, index) in missions" v-bind:key="index" class="list-item">
        <MissionItem
          :title="mission.title"
          :description="mission.description"
          :criticity="mission.criticity"
          :imageUrl="mission.user_imageUrl"
          :username="mission.user_username"
        ></MissionItem>
      </div>
    </div>
  </div>
</template>

<script>
import MissionItem from "./MissionItem.vue";
import axios from 'axios';

export default {
  name: 'MissionList',
  props: {
  }, 
  components: {
    MissionItem:MissionItem
  },
  mounted () {
    axios
      .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/missions')
      .then(response => {
        this.missions = response.data
        for (let index in this.missions) {
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.missions[index].user_id)
          .then(response => {
            this.user = response.data
            this.missions[index].user_username = this.user.username    
            this.missions[index].user_imageUrl = this.user.imageUrl            
          })
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.missions[index].hero_id)
          .then(response => {
            if (this.user) {
              this.user = response.data
              this.missions[index].hero_pseudo = this.user.pseudo    
              this.missions[index].hero_imageUrl = this.user.imageUrl   
            }  
          })
        }
      })
  }, 
  data () {
    return {
        missions: null,
        missionObject: {},
        user: null
    }
  }
}
</script>


<style scoped>
.header {
  background-color: var(--hero-color);
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
  background-color: var(--hero-secondary);
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
  background-color: var(--hero-color);
}
</style>
