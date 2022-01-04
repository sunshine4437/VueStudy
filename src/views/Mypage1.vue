<template>
<div>
    <!--top-->
    <div class="top" style="text-align:center">

        <h1>마이페이지</h1>
    </div>
    <div class="container">
        <!--left-->
        <div class="left">
            <div class="List1">
                <router-link v-bind:to="'/mypage1'">나의쇼핑내역</router-link>
                <hr>
            </div>
            <div class="Check">
                <a href="">주문/배송 조회</a><br>
                <a href="">취소/환불 조회</a><br>
            </div>
            <div class="List2">
                <router-link v-bind:to="'/mypage2'">회원정보 열람</router-link>
                <hr>
            </div>
            <div class="Check">
                <a href="">닉네임 수정</a><br>
                <a href="">비밀번호 수정</a><br>
                <a href="">전화번호 수정</a><br>
                <a href="">주소 수정</a>
            </div>
            <!-- <router-link v-bind:to="'/'"> <button class="logoutbtn" @click="logout"> 로그아웃 </button></router-link> -->
            <router-link v-bind:to="'/'"> <button class="logoutbtn"> 로그아웃 </button></router-link>
        </div>
        <!--right-->
        <div class="right">
            <div class="pList1">
                <h2>나의쇼핑내역</h2><br>주문/ 배송 / 취소 / 환불 조회
            </div>
            <div class="date1">
                <div class="table1st">
                    <div class="tables_header">조회기간</div>
                    <div>
                        <div class="row1">
                            <button class="dateBtn">오늘</button>
                            <button class="dateBtn">1주일</button>
                            <button class="dateBtn">1개월</button>
                            <button class="dateBtn">6개월</button>
                            <button class="dateBtn">1년</button>
                        </div>
                        <div class="row2">
                            <select name="" id="" @change="setStartYear">
                                <option v-for="n in years" :key="n" :value="n" :selected="n == getYear()">{{n}}</option>
                            </select>
                            <label for="">년</label>
                            <select name="" id="" @change="setStartMonth">
                                <option v-for="n in 12" :key="n" :value="n" :selected="n == getMonth()">{{n}}</option>
                            </select>
                            <label for="">월</label>
                            <select name="" id="" @change="setStartDate">
                                <option v-for="n in 31" :key="n" :value="n" :selected="n == getDate()">{{n}}</option>
                            </select>
                            <label for="">일</label>
                            -
                            <select name="" id="" @change="setEndYear">
                                <option v-for="n in years" :key="n" :value="n" :selected="n == getYear()">{{n}}</option>
                            </select>
                            <label for="">년</label>
                            <select name="" id="" @change="setEndMonth">
                                <option v-for="n in 12" :key="n" :value="n" :selected="n == getMonth()">{{n}}</option>
                            </select>
                            <label for="">월</label>
                            <select name="" id="" @change="setEndDate">
                                <option v-for="n in 31" :key="n" :value="n" :selected="n == getDate()">{{n}}</option>
                            </select>
                            <label for="">일</label>
                        </div>
                        <div class="row3">
                            <input type="text" class="searchBar" id="searchInput" placeholder="주문 상품명을 검색하세요!">
                            <button class="searchBtn" @click="search">조회하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pList2">
                <h2>주문내역 조회</h2>
            </div>

            <div class="date2">
                <table class="table2">
                    <tr class="tr1" style="height:50px;">
                        <td>주문일자</td>
                        <td>주문 상품 정보</td>
                        <td>상품금액</td>
                        <td>수량</td>
                        <td>배송비</td>
                        <td>주문상태</td>
                    </tr>
                    <tr v-for="(item, idx) in orderList" :key="idx" v-show="compareDate(item) && compareInform(item)">
                        <td style="height:30px;">{{item.date}}</td>
                        <td style="height:30px;">{{item.inform}}</td>
                        <td style="height:30px;">{{item.price}}</td>
                        <td style="height:30px;">{{item.amount}}</td>
                        <td style="height:30px;">{{item.fee}}</td>
                        <td style="height:30px;">{{item.Status}}</td>
                    </tr>
                </table>
            </div>

            <div class="pList3">
                <h2>취소/환불 조회</h2>
            </div>
            <div class="date3">
                <table class="table3">
                    <tr class="tr1">
                        <td>주문일자</td>
                        <td>주문 상품 정보</td>
                        <td>상품금액</td>
                        <td>판매자</td>
                        <td>처리상태</td>
                        <td>확인/취소</td>
                    </tr>
                    <tr>
                        <td>2021-1-1</td>
                        <td>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환</td>
                        <td>268,450</td>
                        <td>1</td>
                        <td>환불처리중</td>
                        <td>확인</td>
                    </tr>
                    <tr>
                        <td>2021-1-1</td>
                        <td>[쿠팡 직수입] 로지텍 G102 2세대 LIGHTSYNC 유선마우스</td>
                        <td>25,250</td>
                        <td>1</td>
                        <td>환불완료</td>
                        <td>취소</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            startPoint: {
                year: "1900",
                month: "01",
                date: "01",
            },
            endPoint: {
                year: this.getYear(),
                month: this.getMonth(),
                date: this.getDate(),
            },
            years: [],
            months: [],
            dates: [],
            target: "",
            orderList: [{
                    id: "1",
                    date: "2021-01-10",
                    inform: "12",
                    price: "13",
                    amount: "14",
                    fee: "15",
                    Status: "16",
                },
                {
                    id: "2",
                    date: "2021-02-09",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "3",
                    date: "2021-03-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "4",
                    date: "2021-04-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2020-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2015-06-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-05-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                },
                {
                    id: "5",
                    date: "2021-03-10",
                    inform: "22",
                    price: "23",
                    amount: "24",
                    fee: "25",
                    Status: "26",
                }
            ]
        }
    },
    computed: {},
    methods: {
        getDate() {
            let today = new Date();
            let date = today.getDate();
            return date;
        },
        getMonth() {
            let today = new Date();
            let month = today.getMonth() + 1;
            return month;
        },
        getYear() {
            let today = new Date();
            let year = today.getFullYear();
            return year;
        },
        // 2000-01-01
        replaceAt(input, index, character) {
            return input.substr(0, index) + character + input.substr(index + character.length);
        },
        setStartDate(event) {
            if (event.target.value < 10)
                this.startPoint.date = 0 + event.target.value;
            else
                this.startPoint.date = event.target.value;
        },
        setStartMonth(event) {
            if (event.target.value < 10)
                this.startPoint.month = 0 + event.target.value;
            else
                this.startPoint.month = event.target.value;
        },
        setStartYear(event) {
            this.startPoint.year = event.target.value;
        },
        setEndDate(event) {
            if (event.target.value < 10)
                this.endPoint.date = 0 + event.target.value;
            else
                this.endPoint.date = event.target.value;
        },
        setEndMonth(event) {
            if (event.target.value < 10)
                this.endPoint.month = 0 + event.target.value;
            else
                this.endPoint.month = event.target.value;
        },
        setEndYear(event) {
            this.endPoint.year = event.target.value;
        },
        compareDate(target) {
            // alert(`${this.selectTerm.year}-${this.selectTerm.month}-${this.selectTerm.date}`)
            // alert(target.date)
            if (`${this.startPoint.year}-${this.startPoint.month}-${this.startPoint.date}` <= target.date)
                if (target.date <= `${this.endPoint.year}-${this.endPoint.month}-${this.endPoint.date}`)
                    return true;
        },
        search() {
            this.target = document.getElementById("searchInput").value
        },
        compareInform(event) {
            if (this.target == "")
                return true;
            else {
                // if (this.target == event.inform)
                if (event.inform.indexOf(this.target) !== -1)
                    return true;
                else
                    return false;
            }
        }
    },
    mounted() {
        {
            for (let i = this.getYear() - 10; i <= this.getYear(); i++) {
                this.years.push(i);
            }
            this.year = this.getYear();
            this.month = this.getMonth();
            this.date = this.getDate();
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
    margin-left: 15px;
}

hr {
    width: 200px;
}

.top {
    margin-left: 70px;
}

.container {
    display: flex;
    border: none;
}

.left {
    display: inline-block;
    height: 725px;
    border: 1px solid rgb(197, 195, 195);
    background-color: #fafafa;
    border-radius: 4px;
    width: 210px;
    padding: 15px;
    padding-top: 40px;
    font-size: 18px;
}

.right {
    display: inline-block;
    height: 780px;
    width: 85%;
    border: 1px solid rgb(197, 195, 195);
    margin-left: 50px;
    background-color: #fafafa;
    border-radius: 4px;
}

.pList1,
.pList2,
.pList3 {
    text-align: center;
    border-bottom: 1px solid rgb(197, 195, 195);

}

.date1,
.date2 {
  
    border-bottom: 1px solid rgb(197, 195, 195);
    padding-top: 20px;
    padding-bottom: 20px;
}
.date1{
  display: flex;
}
.date2 {
    height: 300px;
    overflow: scroll;
}

.date3 {
    margin-top: 20px;
    padding-top: 15px;
}

.table1st {
    margin-left: auto;
    margin-right: auto;
    display: flex;

}

.tables_header {
    width: 100px;
    padding: 10px;
    padding-top: 20px;
    text-align: center;
    line-height: 84px;
    font-weight: bold;
    border: 1px solid;
    border-radius: 4px;
    background-color: #00ba54;
    ;
    color: white;
}

.row1,
.row2 {
    margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    border-radius: 4px;

}

.row2 {
    text-align: center;

}

.row3 {
    display: flex;
    padding: 5px 0px;
}

.searchBar {
    width: 300px;
    margin-left: auto;
    margin-right: 1px;
    border-radius: 4px;
    border: 1px solid;
}

.table2,
.table3 {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    text-align: center;
}

.table2 td,
.table3 td {
    border: 1px rgb(133, 126, 126) solid;
    padding: 7px;
}

.List1 {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-right: 20px;
    font-size: 22px;
}

.List2 {
    text-align: center;
    padding-top: 70px;
    padding-bottom: 10px;
    margin-right: 20px;
    font-size: 22px
}

.Check {
    margin-left: 20px;
    color: rgb(129, 124, 124);
    border-color: inherit;
    line-height: 35px;
    font-size: 18px
}

.Check li {
    width: 150px;
    padding: 0;
    margin: 10px 0px;
}

.dateBtn {
    border-radius: 4px;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    cursor: pointer;
    margin: 0px 1px;
    margin: 0px 5px;

}

.logoutbtn {
    margin-top: 170px;
    margin-left: 40px;
}
</style>
