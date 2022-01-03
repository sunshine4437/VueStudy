import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate';
import loginStore from "@/store/modules/loginStore.js";
import basketList from "@/store/modules/basketList.js";
const store = new Vuex.Store({
    modules: {
        loginStore: loginStore,
        basketList: basketList
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            paths: [
                "loginStore",
                "basketList",
             
            ]})]

})

export default store;