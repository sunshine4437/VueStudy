<template>
<div class="signUp">
    <div class="header">
        <div class="logo"> <router-link v-bind:to="'/'"> <img src="http://placehold.it/95X95" alt="logo"></router-link></div>
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
                <button class="simpleSignUpBtn">간편 회원가입</button>
            </div>
            <div class="content">
                <div class="seller">
                    <p>셀러 회원이신가요?</p>
                </div>
                <div class="sellerSignUp">
                    <p>셀러 회원</p>
                    <button class="sellerSignUpBtn">회원가입</button>
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
/* 기본 설정 */
/* * {
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    list-style: none;
} */
.container {
    width: 1080px;
    height: 100%;
    padding: 0 20px;
}

li {
    float: left;
}

a {
    /*     width: 100%;
    height: 100%; */
    color: inherit;
    text-decoration: none;
    display: inline-block;
}

body {
    min-height: 100vh;
    position: relative;
}

input {
    font-size: 18px;
}

.clear {
    clear: both;
}

/* //기본 설정 */

/* header */
header {
    width: 100%;
    height: 50px;
}

header .logo {
    float: left;
    top: 50px;
}

/* //header */

/* nav */
nav {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cbcbcb;
}

nav .leftMenu {
    float: right;
    height: 100%;
    font-size: 15px;
    font-weight: bold;
}

nav .leftMenu>li {
    width: auto;
    padding: 0 20px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    position: relative;
}

nav .leftMenu>li:hover>.dropMenu {
    visibility: visible;
}

nav .leftMenu>li>.dropMenu {
    display: inline-block;
    width: 150px;
    clear: both;
    position: absolute;
    top: 59px;
    left: 0;
    text-align: left;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    visibility: hidden;
}

nav .leftMenu>li>.dropMenu>span {
    width: 100%;
    display: inline-block;
    padding-left: 20px;
    background: #00bd39;
    color: white;
    font-weight: 400;
}

nav .leftMenu>li>.dropMenu>span:hover {
    font-weight: 700;
}

nav .leftMenu>li:hover {
    color: #00bd39;
    font-weight: 700;
    border-bottom: 3px solid #00bd39;
}

nav .leftMenu>li.active {
    color: #00bd39;
    font-weight: 700;
    border-bottom: 3px solid #00bd39;
}

nav .rightMenu {
    float: right;
}

nav .rightMenu>li {
    width: 100px;
    height: 36px;
    line-height: 32px;
    margin-top: 12px;
    margin-left: 10px;

    padding: 0 10px;
    text-align: center;

    color: #00bd39;
    font-weight: 700;
    border: 2px solid #00bd39;
    cursor: pointer;
    border-radius: 50px;
}

nav .rightMenu>li:hover,
nav .rightMenu>li.active {
    color: white;
    background: #00bd39;
}

/* //nav */

/* #section */
section {
    width: 100%;
    height: 650px;
    padding: 30px 0;
    background: #fafafa;
}

#section>.container>div {
    height: 100%;
    float: left;
}

#section .Box {
    width: calc(60% - 15px);
    margin-left: 30px;
}

#section .Box>.imgBox {
    width: 1000px;
    height: 400px;
    overflow: hidden;
}

#section .Box>.imgBox>img {
    width: 100%;
}

#section .Box>.table {
    width: 150%;
    margin-top: 90px;

}

#section .table>table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    text-align: center;
}

#section .table>table tt {
    width: 100%;
    border-collapse: collapse;
    font-size: 20px;
    text-align: center;
}

#section .table>table td,
#section .table>table th {
    padding: 30px 20px;
    border: 1px solid #ccc;
}

#section .joinbutton {
    width: 170px;
    float: right;
    font-size: 100px;
}
