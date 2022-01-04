import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const loginStore = {
    namespaced: true,
    state: {
        flag: false,
        userInfo: {
            username: "admin",
            password: "admin"
        },
    },
    mutations: {
        Login(state) {
            state.flag = true;
        },
        LogOut(state) {
            state.flag = false;
        },
    },
    actions: {
    },
    getters: {
        getUserInfo: function (state) {
            return state.userInfo;
        },
        getLogin: function (state) {
            return state.flag;
        },
        // getIsUserSignIn:
    }
}

export default loginStore;
