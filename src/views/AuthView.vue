<template>
  <div class="auth">
    <div id="inscription" v-if="inscription">
      <div class="header">
        <div>
          <a href="#" @click="inscription = !inscription" class="secondary" id="switch">
            {{ (inscription ? "CONNEXION" : "INSCRIPTION") + " >" }}
          </a>
        </div>
        <h1>Inscription</h1>
        <p>Bienvenue dans l'application !</p>
      </div>
      <div class="container">
        <div>
          <input type="text" placeholder="Nom" v-model="nom" />
        </div>
        <div>
          <input type="text" placeholder="Prenom" v-model="prenom" />
        </div>
        <div>
          <input type="text" placeholder="Pseudo" v-model="pseudo" />
        </div>
        <div>
          <input type="password" placeholder="Mot de passe" v-model="mdp" />
        </div>
      </div>
      <button @click="connect()">INSCRIPTION</button>
    </div>
    <div id="connexion"  v-else>
      <h1>Connexion</h1>
      <div class="container">
        <div>
          <input type="text" placeholder="Pseudo" v-model="pseudo" />
        </div>
        <div>
          <input type="password" placeholder="Mot de passe" v-model="mdp" />
        </div>
      </div>
      <button @click="connect()">CONNEXION</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      inscription: true,
      nom: "",
      prenom: "",
      pseudo: "",
      mdp: "",
    };
  },
  mounted() {},
  methods: {
    connect() {
      console.log(this.$store.state.user_id);
    },
  },
};
</script>

<style lang="css">
.auth {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.auth :nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container > div {
  margin-bottom: 20px;
}

#inscription > :last-child {
  margin-top: 20px;
}

#switch {
  margin: 10px;
}
</style>
