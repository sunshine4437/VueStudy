import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    flag: false,
    userInfo:{
      username:"sunshine",
      password:"1234"
    }
  },
  mutations: {
    Login(state){
      state.flag = true;
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getUserInfo: function(state){
      return state.userInfo;
    },
    getLogin: function(state){
      return state.flag;
    }
    // getIsUserSignIn:
  }
})
