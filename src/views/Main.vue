<template>
<div class="main">
    <!-- 상단 메뉴바 -->
    <div class="nav">
        <ul class="search">
            <li>
                <div class="dropDownMenu">
                    <button class="dropDownMenuBtn">
                        ···
                    </button>
                    <div class="dropDownMenuContent">
                        <router-link class="contentLink" v-for="(link, index) in leftMenuName" :key="index" v-bind:to="link.link">
                            {{link.name}}
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <!-- <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo"></router-link> -->
                <router-link class="logoLink" v-bind:to="'/'">
                    <div class="logo">
                        <p>4</p>
                    </div>
                </router-link>
            </li>
            <li>
                <div class="searchBar">
                    <select name="searchSelect" id="" class="searchSelectBox">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <input id="search" type="text" v-on:keyup.enter="search()" style="font-size: 20px" placeholder="검색어 입력">
                    <button @click="search()">검색</button>
                </div>
            </li>
        </ul>
        <ul class="member">
            <li v-for="(link, i) in memberMenu" :key="i">
                <router-link v-if="getLogin && i < 2" v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
                <router-link v-else-if="!getLogin && i < 2" v-bind:to="'/Login'">
                    <button>{{link.name}}</button>
                </router-link>
                <router-link v-else v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>

            </li>
        </ul>
    </div>
    <div class="menu">
        <ul class="leftMenu">
            <li v-for="(link, i) in leftMenuName" :key="i">
                <router-link v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
            </li>
        </ul>
        <ul class="rightMenu">
            <li v-for="(link, i) in rightMenuName" :key="i">
                <router-link v-if="i==0 && !getLogin" v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
                <router-link v-else-if="i==1 && !getLogin" v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
                <router-link v-else-if="i==2 && getLogin" v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
                <router-link v-else-if="i==3 && getLogin" v-bind:to="link.link">
                    <button @click="LogOut">{{link.name}}</button>
                </router-link>
                <!-- <router-link v-else v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link> -->
            </li>
        </ul>
    </div>
    <hr class="lineNav">
    <router-view></router-view>
    <!-- <productTable /> -->
</div>
</template>

<script>
// @ is an alias to /src
import "@/css/common.css"
import {
    createNamespacedHelpers
} from 'vuex';
const loginStore = createNamespacedHelpers('loginStore');
export default {
    name: 'Main',
    components: {

    },
    computed: {
        ...loginStore.mapGetters([
            'getLogin'
        ])
    },
    //
    methods: {
        search() {
            const targetId = document.getElementById("search");
            if (targetId.value === '신발') {
                this.$router.push(`/shopping`);
            }
        },
            ...loginStore.mapMutations([
            'LogOut'
        ])
    },
    data() {
        return {
            searchMenu: [{ //시험중인 배열
                id: 1,
                content: "http://placehold.it/95X95",
                alt: "logo"
            }, {
                id: 2,
                content: "http://placehold.it/95X95",
                alt: "logo"
            }, {
                id: 3,
                content: "http://placehold.it/95X95",
                alt: "logo"
            }],
            memberMenu: [{
                    link: "/Mypage1",
                    name: '마이페이지'
                }, {
                    link: "/basket",
                    name: '장바구니'
                },
                {
                    link: "/customerService",
                    name: '고객센터'
                },
            ],
            leftMenuName: [{
                link: "/blank",
                name: '베스트'
            }, {
                link: "/blank",
                name: '최신'
            }, {
                link: "/blank",
                name: '인기'
            }, {
                link: "/blank",
                name: '특별'
            }, ],
            // rightMenuName: ['로그인', '회원가입', '기타'],
            rightMenuName: [{
                    link: "/login",
                    name: '로그인'
                }, {
                    link: "/signUp",
                    name: '회원가입'
                }, {
                    link: "/Mypage1",
                    name: 'admin님'
                }, {
                    link: "/",
                    name: '로그아웃'
                },
                //  {
                //     link: "/customerService",
                //     name: '고객센터'
                // }
            ]
        }
    },
}
</script>

<style scoped>
.nav {
    display: flex;
    width: 100%;
    /* align-items: center;
    justify-content: center; */
    /* border: 1px solid black; */
    height: 80px;
    position: fixed;
    z-index: 200;
    background-color: white;
}

.search {
    /* border: 1px solid black; */
    display: flex;
    list-style: none;
    padding: 0;
    width: 51.4%;
    margin: 0;
    height: 80px;
}

.search li {
    /* border: 1px solid black; */
    padding: 0 2px;
    margin: 0;
    margin-left: 50px;
    display: flex;
    /* flex-direction: row; */
    align-items: center;

}

.search li:first-child {
    margin-left: 0px;
}

.search img {
    height: 65px;
}

.dropDownMenu {
    position: relative;
    display: inline-block;
}

.dropDownMenuBtn {
    /* border: 1px solid rgb(37, 37, 37); */
    /* border-radius: 4px; */
    /* background-color: #0051ba; */
    /* font-weight: 400; */
    /* color: white; */
    padding: 12px;
    width: 120px;
    text-align: center;
    cursor: pointer;
    margin-left: 0;
    /* font-size: 13px; */
}

.dropDownMenuBtn:hover {
    border-radius: 4px 4px 0 0;
}

.dropDownMenuContent {
    display: none;
    position: absolute;
    z-index: 2;
    /*다른 요소들보다 앞에 배치*/
    font-weight: 400;
    background-color: rgb(0, 153, 255);
    width: 120px;
    max-width: 120px;
    border-radius: 0 0 4px 4px;

}

.dropDownMenuContent * {
    display: block;
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding: 12px 10px;
    text-align: center;
    /* border-top: 1px solid white; */
}

.dropDownMenuContent *:hover {
    background-color: rgb(0, 153, 255);
    cursor: pointer;

}

.dropDownMenu:hover .dropDownMenuContent {
    display: block;
}

.member {
    /* border: 1px solid black; */
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    /* margin-left:auto; */
}

.member li {
    /* border: 1px solid black; */
    padding: 0;
    margin: 0;

    display: flex;
    /* flex-direction: row; */
    align-items: center;
}

.member button {
    width: 115px;
}

.searchBar {
    display: flex;
}

.searchSelectBox {
    min-width: 100px;
    font-size: 20px;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 4px 0 0 4px;
    outline: none;
}

.searchBar input {
    margin-top: 2px;
    padding-left: 5px;
    height: 48px;
    width: 395px;
    outline: 2px solid rgb(0, 153, 255);
    -webkit-appearance: none;
    border: none;
    font-size: 40px;
}

.searchBar button {
    border-radius: 0 4px 4px 0;
}

.searchBar input:focus {
    outline: 2px solid rgb(0, 153, 255);
}

.searchBar button {
    margin: 0;
}

.menu {
    display: flex;
    /* border: 1px solid black; */
    /* vertical-align: middle; */
    padding-top: 80px;
    height: 80px;
    align-items: center;
}

.menu ul {
    display: flex;
    list-style: none;
}

.menu li {
    /* border: 1px solid black; */
    /* padding: 0 10px;
    margin: 0 10px; */
    padding: 0;
    margin: 0;
}

.leftMenu {
    /* display: inline-block; */
    /* border: 1px solid black; */
    margin-left: 5px;
    padding: 0;
}

.leftMenu button {
    width: 90px;
}

.rightMenu {
    /* display: inline-block; */
    /* border: 1px solid black; */
    margin-right: 5px;
    margin-left: auto;
    padding: 0;
}

.rightMenu button {
    width: 100px;
}

.lineNav {
    width: 100vw;
    margin-left: calc(-15vw);
    margin-top: 20px;
}

.logoLink {
    text-decoration: none;
}

.logo {
    display: flex;
    /* width: 65px; */
    height: 65px;
    background-color: rgb(0, 153, 255);
    color: white;
    align-items: center;
    text-align: center;
}

.logo>p {
    width: 65px;
    padding: 0;
    margin: 0;
    font-size: 50px;
    font-weight: bold;
}

/* select::selection{
     -webkit-appearance: none;
      appearance: none;
    border: red
}

select:focus{
       -webkit-appearance: none;
        appearance: none;
           border: red
} */
/* 
select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    /* font-family: "Noto Sansf KR", sans-serif; 
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    color: #444;
    background-color: #fff;

    padding: 0.6em 1.4em 0.5em 0.8em;
    margin: 0;

    border: 1px solid #aaa;
    border-radius: 0.5em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
} */
</style>
