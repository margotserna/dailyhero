import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user_id: "",
      isHero: true,
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
