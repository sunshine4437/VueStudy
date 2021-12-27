<template>
<div>
    <div>
        <ul class="menu">
            <li v-for="(item, idx) in menuList" :key="idx">
                <router-link :to="item.link">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
    <div class="container">
        <div class="temp1">
            <p>회사명</p>
            <p>회사전화번호</p>
            <p>회사 주소</p>
        </div>
        <div class="temp2">
            <div class="temp2-1">
                2-1
            </div>
            <div class="temp2-2">2-2</div>
        </div>
        <div class="temp3">
            <p>고객센터</p>
            <p>고객센터전화번호</p>
            <p>고객센터주소</p>
            <router-link v-bind:to="'/customerService'">
                <p>고객센터 바로가기 ></p>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                    name: '회사소개',
                    link: '/blank',
                },
                {
                    name: '채용정보',
                    link: '/blank',
                },
                {
                    name: '이용약관',
                    link: '/blank',
                },
                {
                    name: '전자금융거래약관',
                    link: '/blank',
                },
                {
                    name: '개인정보처리방침',
                    link: '/blank',
                },
                {
                    name: '입점신청',
                    link: '/blank',
                },
                {
                    name: '광고안내',
                    link: '/blank',
                },

                {
                    name: '서비스맵',
                    link: '/blank',
                },
            ],
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    /* border: 1px solid black; */
}

.container>div {
    display: block;
    /* border: 1px solid black; */
    width: 300px;
    height: 200px;
    padding: 0;
    margin: auto;
}

.temp2 {
    display: flex;
    /* border: 1px solid black; */
}

.temp2>div {
    display: block;
    /* border: 1px solid black; */
    height: 49%;
}

.menu {
    list-style: none;
    display: flex;
}

.menu li::before {
    content: "| ";
}

.menu li::after {
    content: " |";
}
</style>
