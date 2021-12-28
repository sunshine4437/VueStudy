import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    userInfo:{
      username:"sunshine",
      password:"1234"
    }
  },
  mutations: {
    increment(state, payload){
      state.count += payload.amount;
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getUserInfo: function(state){
      return state.userInfo;
    }
    // getIsUserSignIn:
  }
})
