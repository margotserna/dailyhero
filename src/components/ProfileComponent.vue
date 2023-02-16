<template>
  <div class="profil">
    <div class="header">
        <router-link to="/map" class="back">retour</router-link>
        <img :src="require(`../assets/img/icons/${isUserHero ? 'hero':'citoyen'}/fox.png`)" />
        <h1>{{ user.username }}</h1>
        <p class="experience">Expérience : {{ experience }}</p>
        <p>Ville : {{ ville }}</p>
    </div>
    <div class="missions">
        <h2 v-if="myMissions != null">Mes dernières missions et demandes</h2>
        <div class="list-mission" v-for="(mission, index) in myMissions" v-bind:key="index" >
            <MissionItem
            @click="selectMission(myMissions._id)"
            :title="mission.title"
            :description="mission.description"
            :criticity="mission.criticity"
            :imageUrl="mission.user_imageUrl"
            :username="mission.user_username"
            ></MissionItem>
        </div>
        <div class="list-demands" v-for="(mission, index) in myDemands" v-bind:key="index" >
            <MissionItem
            @click="selectMission(myMissions._id)"
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
<style scoped>
.header {
  background-color: var(--citoyen-color);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.header h1 {
  text-align: center;
  font-size: 1.5em;
  margin-right: auto;
  margin-left: auto;
}
.header img {
    width: auto;
    height: 200px;
}
.header {
  text-align: right;
}
.back {
  color: var(--secondary-color);
  position: absolute;
  top: 20px;
  right: 20px;
}
.missions{
  margin: 0px 10px;
}
.list-mission, .list-demands{
  margin-bottom: 10px;
  padding: 10px;
}
</style>
<script>
import MissionItem from "./MissionItem.vue";
import axios from 'axios';

export default {
  name: 'ProfilView',
  data () {
    return {
      user: this.$store.state.user, 
      experience: this.$store.state.user.token,
      ville: this.$store.state.user.ville,
      myMissions: null,
      myDemands: null
    }
  }, 
  components: {
    MissionItem:MissionItem
  },
  mounted () {
    axios
      .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/missions?sh_id=' + this.user.id )
      .then(response => {
        this.myMissions = response.data
        this.myMissions = this.myMissions.filter(mission => !mission.hero_id)
        for (let index in this.myMissions) {
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.myMissions[index].user_id)
          .then(response => {
            this.user = response.data
            this.myMissions[index].user_username = this.user.username    
            this.myMissions[index].user_imageUrl = this.user.imageUrl            
          })
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.myMissions[index].hero_id)
          .then(response => {
            if (this.user) {
              this.user = response.data
              this.myMissions[index].hero_pseudo = this.user.pseudo    
              this.myMissions[index].hero_imageUrl = this.user.imageUrl   
            }  
          })
        }
      })
    axios
      .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/missions?user_id=' + this.user.id )
      .then(response => {
        this.myDemands = response.data
        this.myDemands = this.myDemands.filter(mission => !mission.hero_id)
        for (let index in this.myDemands) {
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.myDemands[index].user_id)
          .then(response => {
            this.user = response.data
            this.myDemands[index].user_username = this.user.username    
            this.myDemands[index].user_imageUrl = this.user.imageUrl            
          })
          axios
          .get('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/users?id=' + this.myDemands[index].hero_id)
          .then(response => {
            if (this.user) {
              this.user = response.data
              this.myDemands[index].hero_pseudo = this.user.pseudo    
              this.myDemands[index].hero_imageUrl = this.user.imageUrl   
            }  
          })
        }
      })
  }
}
</script>
