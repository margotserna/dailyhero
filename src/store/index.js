import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user_id: ""
    }
  },
  getters: {
  },
  mutations: {
    setUserId(user_id){
      this.state.user_id = user_id
    }
  },
  actions: {
  },
  modules: {
  }
})
