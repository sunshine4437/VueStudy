import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const basketList = {
    namespaced: true,
    state: {
        basketList : [],
        // flag: false,
        // userInfo: {
        //     username: "admin",
        //     password: "admin"
        // },
    },
    mutations: {
        // Login(state) {
        //     state.flag = true;
        // },
        addList(state, item){
            state.basketList.push(item);
        },
        delList(state, idx){
            state.basketList.splice(idx, 1);
        }

    },
    actions: {
    },
    getters: {
        getBasketList(state){
            return state.basketList;
        }
        // getUserInfo: function (state) {
        //     return state.userInfo;
        // },
        // getLogin: function (state) {
        //     return state.flag;
        // },
        // // getIsUserSignIn:
    }
}

export default basketList;
