<template>
<div class="signUp">
    <div class="header">
        <div class="logo">
              <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo"></router-link>
        </div>
        <div class="sequence">
            <ul class="sequenceMenu">
                <li>1 회원선택</li>
                <li>2 약관동의</li>
                <li>3 정보입력</li>
                <li>4 가입완료</li>
            </ul>
        </div>
    </div>
    <!-- section --------------------------------------------- -->
    <div class="container">
        <div class="Box">
            <div class="imgBox">
                <img src="http://placehold.it/500X500/" alt="">
                <router-link v-bind:to="'/join1'"> <button class="simpleSignUpBtn">간편 회원가입 </button></router-link>
            </div>
            <div class="content">
                <div class="seller">
                    <p>셀러 회원이신가요?</p>
                </div>
                <div class="sellerSignUp">
                    <p>셀러 회원</p>
                    <router-link v-bind:to="'/join2'"> <button class="sellerSignUpBtn">회원가입</button></router-link>

                </div>
                <!-- <table>
                    <tr class="tt">
                        <td>사업자 이거나</td>
                        <td>사업자 구매회원</td>
                        <td>사업자 셀러회원</td>
                        <td>개인 셀러회원</td>
                        <td>글로벌 셀러회원</td>
                    </tr>
                    <tr>
                        <td>셀러이신가요?</td>
                        <td>사업자 등록증을 보유한 <br>구매회원 <br><input type='button' value='가입하기'> </td>
                        <td>사업자 등록증을<br>보유한 판매회원 <br><input type='button' value='가입하기'> </td>
                        <td>사업자 등록증을<br>하지 않은 판매회원 <br><input type='button' value='가입하기'> </td>
                        <td>해외 브랜드 상품<br>판매회원 <br><input type='button' value='가입하기'> </td>
                    </tr>
                </table> -->
            </div>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.signUp div {
    border: 1px solid black;
}

.header {
    display: flex;

}

.header * {
    margin-left: auto;
    margin-right: auto;
}

.header>.sequence {
    width: 50%;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
}

.sequenceMenu {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.sequenceMenu li {
    width: 100px;
    text-align: center;
}

.container>.box {
    position: relative;
    text-align: center;
}

.imgBox {
    display: block;
    text-align: center;
}

.simpleSignUpBtn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.content {
    display: flex;
}

.content>div {
    width: 50%;
    height: 300px;
    border: black 1px solid;
}

.seller {
    position: relative;
}

.seller p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
}

.sellerSignUp {
    position: relative;
    display: block;
}

.sellerSignUp>p {
    text-align: center;
}

.sellerSignUpBtn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 50px;
    font-size: 30px;
    padding: 0 10px;
    text-align: center;
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
</style>
