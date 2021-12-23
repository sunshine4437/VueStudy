<template>
<div>
    <!--top-->
  <div class="top" style="text-align:center">
           <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo"></router-link>
        <h1>마이페이지</h1>
    </div>
    <!--left-->
    <div class="container">
        <div class="left">
         <div class="List">
                   <router-link v-bind:to="'/mypage1'">나의쇼핑내역</router-link>
            </div>
            <div class="check">
                <li>주문/배송 조회</li>
                <li>취소/환불 조회</li>
            </div>
              <div class="List">
                  <router-link v-bind:to="'/mypage2'">회원정보 열람</router-link>
            </div>
            <div class="check">
                <li>회원정보 수정</li>
            </div>
            <button>로그아웃</button>
        </div>
        <!--right-->
        <div class="right">
            <div class="pList1">
                <h2>회원 정보 열람</h2>
            </div>
            <div class="content">
                <h3>
                    닉네임
                </h3>
                <input type="text" class="mdText">
                <button class="mdBtn"> 수정하기 </button>
            </div>
            <div class="content">
                <h3>
                    비밀번호
                </h3>
                <input type="text" class="mdText">
                <button class="mdBtn"> 수정하기 </button>
                <br>
            </div>
            <div class="content">
                <h3>
                    연락처
                </h3>
                <input type="text" class="mdText">
                <button class="mdBtn"> 수정하기 </button>
            </div>
            <div class="content">
                <h3>
                    주소
                </h3>
                <input type="text" class="mdText">
                <button class="mdBtn"> 주소조회 </button>
            </div>
            <div class="content">
                <h3>
                    <label>상세주소</label>
                </h3>
                <input type="text" class="mdText">
                <button class="mdBtn"> 수정하기 </button>

            </div>
            <div class="content">
                <button class="quit"> 회원탈퇴 </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.top{
    border-bottom: 1px solid black;
}

.container {
    display: flex;
}

.left {
    display: inline-block;

    border: 1px solid black;
}

.left > div{
      border-bottom: 1px solid black;
}

.right {
    display: inline-block;
    width: 85%;
}

.List {
    text-align: center;
    padding-top:10px;
    padding-bottom:10px;
}

.check {
    text-align: center;
    padding: 0px 10px;
}

.check li {
    width: 150px;
    padding: 0;
    margin: 10px 0px;
}

.pList1 {
    text-align: center;
       border-bottom: 1px solid black;
}


.content {
    text-align: center;
       border-bottom: 1px solid black;
       padding: 10px;
}

.mdText {
    margin-right: 15px;
}

.mdBtn {
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
</style>
