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
            <router-link v-bind:to="'/'"> <button class="logoutbtn" @click="logout"> 로그아웃 </button></router-link>
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
                            <button class="dateBtn">11월</button>
                            <button class="dateBtn">10월</button>
                            <button class="dateBtn">09월</button>
                        </div>
                        <div class="row2">
                            <select>
                                <option>2021</option>
                            </select>년
                            <select>
                                <option>1</option>
                            </select>월
                            <select>
                                <option>1</option>
                            </select>일 ~
                            <select>
                                <option>2021</option>
                            </select>년
                            <select>
                                <option>12</option>
                            </select>월
                            <select>
                                <option>23</option>
                            </select>일
                        </div>
                        <div class="row3">
                            <input type="text" class="searchBar" placeholder="  주문 상품명을 검색하세요!">&nbsp; &nbsp;
                            <button class="searchBtn">조회하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pList2">
                <h2>주문내역 조회</h2>
            </div>

            <div class="date2">
                <table class="table2">
                    <tr class="tr1">
                        <td>주문일자</td>
                        <td>주문 상품 정보</td>
                        <td>상품금액</td>
                        <td>수량</td>
                        <td>배송비</td>
                        <td>배송현황</td>
                        <td>주문상태</td>
                    </tr>
                    <tr>
                        <td>2021-1-1</td>
                        <td>2020 다우니 퍼퓸 초고농축 섬유유연제 미스티크 본품</td>
                        <td>38800<br>(19,400)</td>
                        <td>2</td>
                        <td>2500</td>
                        <td>배송준비</td>
                        <td>결제확인</td>
                    </tr>
                    <tr>
                        <td>2021-1-1</td>
                        <td>다이슨 싸이클론 V10 무선 진공 청소기</td>
                        <td>602,940</td>
                        <td>1</td>
                        <td>무료</td>
                        <td>배송중</td>
                        <td>결제완료</td>
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
    method: {

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
    display: flex;
    border-bottom: 1px solid rgb(197, 195, 195);
    padding-top: 20px;
    padding-bottom: 20px;
}
.date3{
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
    background-color: #0051ba;
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
