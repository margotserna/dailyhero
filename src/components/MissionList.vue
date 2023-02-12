<template>
  <div class="mission-list">
    <h1>Liste : {{ count }}</h1>
    <div v-for="(mission, index) in missions" v-bind:key="index">
      <MissionItem
        :title="mission.title"
        :description="mission.description"
        :criticity="mission.criticity"
        :imageUrl="mission.user_imageUrl"
        :username="mission.user_username"
      ></MissionItem>
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
          this.count = this.count + 1;
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
        user: null, 
        count: 0
    }
  }
}
</script>

<style scoped>
</style>