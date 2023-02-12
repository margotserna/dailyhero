import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: {
        id: "63e8c70ed08d59dd3387055d", 
        pseudo: "Super Simon",
        username: "Simon",
        token: 20,
        type: "hero",
        ville: "Nantes",
        lon: -1.7938438776198748,
        lat: 47.02075094279522
      }
    }
  },
  getters: {
  },
  mutations: {
    setUserId(user_id){
      this.state.user_id = user_id
    },
    setIsHero(bool){
      this.state.isHero = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
