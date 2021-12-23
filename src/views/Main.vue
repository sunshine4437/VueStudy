<template>
<div class="main">
    <!-- 상단 메뉴바 -->
    <div class="nav">
        <ul class="search">

            <li>
                <div class="dropDownMenu">
                    <button class="dropDownMenuBtn">
                        DropMenu
                    </button>
                    <div class="dropDownMenuContent">
                        <a href="#">subMenu</a>
                        <a href="#">subMenu</a>
                        <a href="#">subMenu</a>
                    </div>
                </div>
            </li>
            <li>
                <router-link v-bind:to="'/'"> <img src="http://placehold.it/95X95" alt="logo"></router-link>
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
                <router-link v-bind:to="link.link">
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
                <router-link v-bind:to="link.link">
                    <button>{{link.name}}</button>
                </router-link>
            </li>
        </ul>
    </div>
    <router-view></router-view>
    <!-- <productTable /> -->
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Main',
    components: {
        // productTable,
    },
    // vuex 실습
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    //
    methods: {
        search() {
            const targetId = document.getElementById("search");
            if (targetId.value === '신발') {
                this.$router.push(`/shopping`);
            }
        }
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
                link: "/blank",
                name: '마이페이지'
            }, {
                link: "/basket",
                name: '장바구니'
            }, {
                link: "/otoQ",
                name: '일대일 문의'
            }, ],
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
            }, {
                link: "/blank",
                name: '기타'
            }],
            // rightMenuName: ['로그인', '회원가입', '기타'],
            rightMenuName: [{
                link: "/login",
                name: '로그인'
            }, {
                link: "/signUp",
                name: '회원가입'
            }, {
                link: "/payment",
                name: '결제페이지'
            }]
        }
    },
}
</script>

<style>
.nav {
    display: flex;
    /* align-items: center;
    justify-content: center; */
    /* border: 1px solid black; */
    height: 100px;

}

.search {
    /* border: 1px solid black; */
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100px;
}

.search li {
    /* border: 1px solid black; */
    padding: 0 2px;
    margin: 0;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
}

.dropDownMenu {
    position: relative;
    display: inline-block;
}

.dropDownMenuBtn {
    border: 1px solid rgb(37, 37, 37);
    border-radius: 4px;
    background-color: #0051ba;
    font-weight: 400;
    color: white;
    padding: 12px;
    width: 120px;
    text-align: left;
    cursor: pointer;
    font-size: 13px;
}

.dropDownMenuContent {
    display: none;
    position: absolute;
    z-index: 1;
    /*다른 요소들보다 앞에 배치*/
    font-weight: 400;
    background-color: #0051ba;
    min-width: 120px;
}

.dropDownMenuContent * {
    display: block;
    text-decoration: none;
    color: white;
    font-size: 12px;
    padding: 12px 20px;
}

.dropDownMenuContent *:hover {
    background-color: #0051ba;
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
    margin: 0 0 0 auto;
}

.member li {
    /* border: 1px solid black; */
    padding: 0;
    margin: 0;

    display: flex;
    /* flex-direction: row; */
    align-items: center;
}

.searchBar {
    display: flex;
}

.searchSelectBox {
    min-width: 100px;
    font-size: 20px;
    border: 2px solid #0051ba;
    border-radius: 4px;
}

.searchBar input {
    height: 44px;
    width: 400px;
    border-color: #0051ba;
}

.searchBar input:focus {
    outline: none;
}

.searchBar button {
    margin: 0;
}

.menu {
    display: flex;
    /* border: 1px solid black; */
    vertical-align: middle;
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

.rightMenu {
    /* display: inline-block; */
    /* border: 1px solid black; */
    margin-right: 5px;
    margin-left: auto;
    padding: 0;
}

button {
    background-color: #0051ba;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;
    margin: 0px 1px;
}

/* border: 1px solid rgb(37, 37, 37);
    border-radius: 4px;
    background-color: #0051ba;
    font-weight: 400;
    color: white;
    padding: 12px;
    width: 120px;
    text-align: left;
    cursor: pointer;
    font-size: 12px; */
</style>
