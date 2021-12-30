<template>
<div>
    <div style="text-align:center;">
        <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo"></router-link>
        <h1>회원가입</h1>
        <hr>
    </div>
    <form class="container" name="login_member">
        <div>
            <h3>
                아이디
                <input type="text" name="아이디" class="inputValues" id="id" v-model="signup.putid">
                <button class="classBtn" @click.prevent="idcheck"> 중복확인 </button>
            </h3>
        </div>
        <div>
            <h3>
                닉네임
                <input type="text" name="닉네임" class="inputValues" id="nick" v-model="signup.putnick">
                <button class="nickBtn" @click.prevent="nickcheck"> 중복확인 </button>
            </h3>
        </div>
        <div>
            <h3>
                비밀번호
                <input v-model="signup.password" type="password" name="비밀번호" class="inputValues" id="pw" @blur="passwordValid">
                <div v-if="!passwordValidFlag" class="pwFlag"> 유효하지 않은 비밀번호 입니다. </div>
            </h3>
        </div>
        <div>
            <h3>
                비밀번호확인
                <input v-model="passwordCheck" type="password" name="비밀번호 확인" class="inputValues" @blur="passwordCheckValid">
                <div v-if="!passwordCheckFlag" class="re_pwFlag"> 비밀번호가 동일하지 않습니다. </div>
            </h3>
        </div>
        <div>
            <h3>
                이름
                <input type="text" name="username" class="username">
            </h3>
        </div>
        <div>
            <h3>
                전화번호
                <input v-model="signup.mobile" type="text" name="mobile" class="mobile" placeholder="-없이 숫자만" maxlength="11" @blur="mobileCheckValid">
                <div v-if="!mobileValidFlag" class="pwFlag"> 유효하지 않은 전화번호 입니다. </div>
            </h3>
        </div>

        <div>
            <h3>
                주소
                <input type="text" name="total_add" class="total_add">
                <button class="addBtn">주소검색</button>
            </h3>
        </div>
        <div>
            <h3>
                상세주소
                <input type="text" name="detail_add" class="detail_add">
            </h3>
        </div>
    </form>
    <hr>
    <div class="footer">
        <div class="CheckBox">
            <label class="Agree" id="agreement">약관동의</label><br>
            <input type="checkbox" name="cb1" class="agree" id="agreement1">귀하의 쇼핑몰에 회원으로 가입합니다(필수)<br>
            <input type="checkbox" name="cb2" class="agree" id="agreement2">개인정보 수집 이용동의(필수)<br>
            <input type="checkbox" name="cb3" class="agree" id="agreement3">마케팅 활용 및 광고성 정보 수신 동의 (선택)
        </div>
        <div class="joinBtnArea">
            <button type="button" class="joinBtn" @click.prevent="submit()"> <span>가입하기</span> </button>
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
                putid: '',
                putnick: '',
                mobile: null,
            },
            passwordValidFlag: true,
            passwordCheck: '',
            passwordCheckFlag: true,
            msg: '',
            checkIdFlag: false,
            checkNickFlag: false,
            checkPwdFlag: false,
            checkRePwdFlag: false,
            checkTelFlag: false,
            agreement: false,
        }
    },
    methods: {

        idcheck() {
            try {
                if ("" === this.signup.putid) {
                    alert("공백 입니다.");
                } else if ("admin" === this.signup.putid) {
                    alert("이미 가입된 아이디 입니다.");
                    this.checkIdFlag = false;
                } else {
                    alert("등록 가능한 아이디 입니다.");
                    this.checkIdFlag = true;
                }
            } catch (err) {
                this.msg = "error";
            }
        },
        nickcheck() {
            try {
                if ("" === this.signup.putnick) {
                    alert("공백 입니다.");
                } else if ("asd" === this.signup.putnick) {
                    alert("이미 가입된 닉네임 입니다.");
                    this.checkNickFlag = false;
                } else {
                    alert("등록 가능한 닉네임 입니다.");
                    this.checkNickFlag = true;
                }
            } catch (err) {
                this.msg = "error";
            }
        },
        passwordValid() {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)) {
                this.passwordValidFlag = true;
                this.checkPwdFlag = true;
            } else {
                this.passwordValidFlag = false;
                this.checkPwdFlag = false;
            }
        },
        passwordCheckValid() {
            if (this.signup.password === this.passwordCheck) {
                this.passwordCheckFlag = true;
                this.checkRePwdFlag = true;
            } else {
                this.passwordCheckFlag = false;
                this.checkRePwdFlag = false;
            }
        },
        mobileCheckValid() {
            if (/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(this.signup.mobile)) {
                this.mobileValidFlag = true;

            } else {
                this.mobileValidFlag = false;

            }
        },
        submit() {
            const checked = document.getElementsByClassName('inputValues')
            for (var i = 0; i < checked.length; i++) {
                if (checked[i].value.length == 0) {
                    alert(`${checked[i].name} 을/를 입력하세요`)
                    checked[i].focus();
                    return;
                }
            }

            if (!this.checkIdFlag) {
                alert("아이디 중복검사를 하세요")
                return;
            }
            if (!this.checkNickFlag) {
                alert("닉네임 중복검사를 하세요")
                return;
            }
            if (!this.checkPwdFlag) {
                alert("비밀 번호를 확인하세요")
                return;
            }
            if (!this.checkRePwdFlag) {
                alert("비밀 번호가 일치 하지 않습니다")
                return;
            }
            /*if (!this.checkTelFlag) {
                alert("숫자만 입력하세요")
                return;
            }*/

            let agreement1 = document.getElementById('agreement1');
            let agreement2 = document.getElementById('agreement2');
            // let agreement3 = document.getElementById('agreement3');
            if (!agreement1.checked) {
                alert("1");
            } else if (!agreement2.checked) {
                alert("2");
            } else {
                alert("환영합니다");

            }

        }
    }
}
</script>

<style scoped>

.container {
    background-color: #fafafa;
    padding: 100px;
}

.container>div {
    width: 40%;
    margin-right: auto;
    margin-left: 300px;
    padding: 10px;
}

.container>div>h3 {
    width: 300%;
    margin: 12px 0;
}

/* .container>div>input {
    display: inline-block;
    height: 25px;
    margin-right: 10px;
    width: 300px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid;
    
} */

.CheckBox {
    text-align: center;
    padding: 10px 0;
}

.footer {
    background-color: #fafafa;
}

.joinBtnArea {
    text-align: center;
    padding-bottom: 30px;
}

.inputValues,
.username,
.mobile,
.total_add,
.detail_add {
    text-align: center;
    height: 25px;
    border-radius: 4px;
    border: 1px solid;
    width: 350px;
}

#id {
    margin-left: 54px;
}

#nick {
    margin-left: 54px;
}

#pw {
    margin-left: 36px;
}

.username {
    margin-left: 73px;
}

.mobile {
    margin-left: 37px;
}

.total_add {
    margin-left: 73px;
}

.detail_add {
    margin-left: 36px;
}

.pwFlag,
.re_pwFlag {
    margin-top: 25px;
    color: red;
}
</style>
