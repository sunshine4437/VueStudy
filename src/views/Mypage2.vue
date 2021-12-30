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
            <router-link v-bind:to="'/'"> <button class="logoutbtn">로그아웃</button></router-link>
        </div>
        <!--right-->
        <div class="right">
            <div class="pList1">
                <h2>회원 정보 열람</h2>
            </div>
            <div class="content">
                <h3>
                    닉네임
                    <input type="text" class="mdText" id="m1" v-model="putnick">
                    <button class="mdBtn" @click="nickMod"> 수정하기 </button>
                </h3>
            </div>
            <div class="content">
                <h3>
                    비밀번호
                    <input v-model="signup.password" type="password" class="mdText" id="m2" @blur="passwordValid">
                    <button class="mdBtn" @click="pwMod"> 수정하기 </button>
                    <div v-if="!passwordValidFlag" class="pwFlag"> 유효하지 않은 비밀번호 입니다. </div>
                </h3>
                <br>
            </div>

            <div class="content">
                <h3>
                    전화번호
                    <input  v-model="putNum" type="text" class="mdText" id="m3" @blur="numValid" placeholder="- 없이 숫자만" maxlength="11">
                    <button class="mdBtn" @click="numMod"> 수정하기 </button>
                    <div v-if="!numValidFlag" class="numFlag"> 유효하지 않은 전화번호 입니다. </div>
                </h3>
            </div>
            <div class="content">
                <h3>
                    주소
                    <input type="text" class="mdText" id="m4">
                    <button class="mdBtn"> 주소조회 </button>
                </h3>
            </div>
            <div class="content">
                <h3>
                    <label>상세주소</label>
                    <input type="text" class="mdText" id="m5">
                </h3>
            </div>
            <div class="content">
                <router-link v-bind:to="'/'"> <button class="quit" @click="quitBtn">회원탈퇴</button></router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            signup: {
                password: null,
                pwhint: '',
                pwhintans: null,
                putNum: null,
            },
            passwordValidFlag: true,
            passwordCheck: '',
            passwordCheckFlag: true,
            numValidFlag: true,
            putNum: '',
            putnick: '',
            msg: '',
        }
    },
    methods: {
        nickMod() {
            try {
                if ("" === this.putnick) {
                    alert("공백 입니다.");
                } else if ("asd" === this.putnick) {
                    alert("이미 가입된 닉네임 입니다.");
                } else {
                    alert("수정 되었습니다.");
                }
            } catch (err) {
                this.msg = "error";
            }
        },
        passwordValid() {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)) {
                this.passwordValidFlag = true
            } else {
                this.passwordValidFlag = false
            }

        },
        pwMod() {
            try {
                if ("" === this.signup.password) {
                    alert("공백 입니다.");
                } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)){
                    if(this.passwordValidFlag == true)
                    alert("수정되었습니다.");
                } else {
                    if(!this.passwordValidFlag == true)
                    alert("비밀번호 형식은 대문자,소문자,숫자 포함 8~16글자 입니다.");
                }
            } catch (err) {
                this.msg = "error";
            }
        },
        numValid() {
            if (/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(this.putNum)) {
                this.numValidFlag = true
            } else {
                this.numValidFlag = false
            }

        },
        numMod() {
            try {
                if ("" === this.putNum) {
                    alert("공백 입니다.");
                } else if (/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(this.putNum)) {
                    alert("수정 되었습니다.");
                } else {
                    alert("제대로 입력해주세요.")
                }
            } catch (err) {
                this.msg = "error";
            }
        },
        quitBtn(){
            alert("정말 탈퇴하시겠습니까?")
        }
    }
}
</script>

<style scoped>

.top {
    margin-left: 70px;
}

.container {
    display: flex;
}

.left {
    display: inline-block;
    border: 1px solid rgb(197, 195, 195);
    background-color: #fafafa;
    border-radius: 4px;
}

.left>div {
    border-bottom: 1px solid rgb(197, 195, 195);
}

.right {
    display: inline-block;
    width: 85%;
    border: 1px solid rgb(197, 195, 195);
    margin-left: 50px;
    background-color: #fafafa;
    border-radius: 4px;
}

.right>div {
    border-bottom: 1px solid rgb(197, 195, 195);
}

.List {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
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
    padding: 10px;
}

.content>h3 {
    margin-left: 270px;
}

.mdText {
    width: 350px;
    height: 30px;
    margin-right: 30px;
    border-radius: 4px;
    border: 1px solid;
    text-align: center;
    font-size: 16px;
}

.mdBtn {

    margin-left: 20px;
}

.logoutbtn {
    margin-top: 300px;
    margin-left: 35px;
}
.quit {
    margin-left: 480px;
    background-color: #00ba54;
}
#m1 {
    margin-left: 47px;
}

#m2 {
    margin-left: 28px;
}

#m3 {
    margin-left: 29px;
}

#m4 {
    margin-left: 65px;
}

#m5 {
    margin-left: 45px;
    width: 450px;
}
.pwFlag, .numFlag {
    color: red;
}
</style>
