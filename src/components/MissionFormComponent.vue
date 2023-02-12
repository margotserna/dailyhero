<template>
  <div class="mission-form">
    <FormKit type="form" @submit="createMission" :config="{ validationVisibility: 'dirty' }" submit-label="Créer une mission">
        <FormKit
            type="text"
            name="title"
            id="title"
            v-model="title"
            validation="required|length:10,50"
            label="Nom de la mission"
            placeholder="Super mission pour super héro !"
        />
        
        <FormKit type="textarea" 
            name="description"
            id="description"
            v-model="description"
            validation="required|length:20,240"
            label="Description de la mission"
            placeholder="Description"
        />
        <FormKit
            type="select"
            label="Priorité"
            v-model="criticity"
            name="criticity"
            id="criticity"
            :options="['Urgent','Normal','Faible']"
        />
    </FormKit>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MissionFormComponent',
  data () {
    return {
        title: "",
        description: "",
        criticity: 1,
        body: {}
    }
  }, 
  methods: {
    createMission() {
        switch (this.criticity) {
            case 'Urgent':
                this.criticity = 2
                break;
            case 'Normal':
                this.criticity = 1
                break;
            case 'Faible':
                this.criticity = 0
                break;
            default: 
                this.criticity = 1
        }
        this.body = {
            "title": this.title,
            "description": this.description,
            "criticity": this.criticity,
            "user_id": this.$store.state.user.id,
            "lon": this.$store.state.user.lon,
            "lat": this.$store.state.user.lat,
            "start_date": Date.now()
        }
        
        axios
            .post('https://eu-west-2.aws.data.mongodb-api.com/app/dailyhero-cypmd/endpoint/missions', this.body)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }
  }
}
</script>

<style scoped>
.mission-form {
    margin: 5%
}
</style>