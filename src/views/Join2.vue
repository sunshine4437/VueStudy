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
                *아이디
                <input type="text" name="아이디" class="inputValues" id="id" v-model="signup.putid">
                <button class="classBtn" @click.prevent="idCheck"> 중복확인 </button>
            </h3>
        </div>
        <div>
            <h3>
                *닉네임
                <input type="text" name="닉네임" class="inputValues" id="nick" v-model="signup.putnick">
                <button class="nickBtn" @click.prevent="nickCheck"> 중복확인 </button>
            </h3>
        </div>
        <div>
            <h3>
                *비밀번호
                <input v-model="signup.password" type="password" name="비밀번호" class="inputValues" id="pw" @blur="passwordValid">
                <div v-if="!passwordValidFlag" class="pwFlag"> 유효하지 않은 비밀번호 입니다. </div>
            </h3>
        </div>
        <div>
            <h3>
                *비밀번호확인
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
                *전화번호
                <input v-model="signup.mobile" type="text" name="전화번호" class="inputValues" @blur="mobileCheckValid" placeholder="-없이 숫자만" maxlength="11" id="mobile">
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
        <div>
            <h3>
                <label>사업자등록 번호</label>
                <input v-model="signup.busNum" type="text" name="사업자등록번호" class="inputValues" @blur="busNumValid" placeholder="-없이 숫자만" maxlength="10" id="busNum">
                <div v-if="!busNumValidFlag" class="pwFlag"> 숫자 10자리를 입력하세요. </div>
            </h3>
        </div>
    </form>
    <hr>
    <div class="footer">
        <div class="CheckBox">
            <label class="Agree" id="agreement">
                <h2>약관동의</h2>
            </label><br>
            <div class="miniBox">
            <input type="checkbox" name="cb1" id="agreement1">귀하의 쇼핑몰에 회원으로 가입합니다(필수)<br>
            <input type="checkbox" name="cb2" id="agreement2">개인정보 수집 이용동의(필수)<br>
            <input type="checkbox" name="cb3" class="agree">마케팅 활용 및 광고성 정보 수신 동의 (선택)
            </div>
        </div>
        <div class="joinBtnArea">
            <button type="button" class="joinBtn" @click="submit"> <span>가입하기</span> </button>
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
                busNum: null,
            },
            passwordValidFlag: true,
            passwordCheck: '',
            passwordCheckFlag: true,
            mobileValidFlag: true,
            busNumValidFlag: true,
            msg: '',
            checkIdFlag: false,
            checkNickFlag: false,
            checkPwdFlag: false,
            checkRePwdFlag: false,
            checkTelFlag: false,
            checkBnFlag: false,
            agreement: false,
        }
    },
    methods: { 

        idCheck() {
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
        nickCheck() {
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
                this.checkTelFlag = true;
            } else {
                this.mobileValidFlag = false;
                this.checkTelFlag = false;
            }
        },
        busNumValid() {
            if (/^(?=.*[0-9]).{10,10}$/.test(this.signup.busNum)) {
                this.busNumValidFlag = true;
                this.checkBnFlag = true;
            } else {
                this.busNumValidFlag = false;
                this.checkBnFlag = false;
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
            if (!this.checkTelFlag) {
                alert("전화번호를 확인하세요")
                return;
            }
            if (!this.checkBnFlag) {
                alert("사업자 등록 번호를 확인하세요")
                return;
            }
            let agreement1 = document.getElementById('agreement1');
            let agreement2 = document.getElementById('agreement2');
            if (!agreement1.checked) {
                alert("약관을 확인해 주세요");
            } else if (!agreement2.checked) {
                alert("약관을 확인해 주세요");
            } else {
                
                alert("회원가입이 완료 되었습니다."); 
            
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
.miniBox{
    border: 1px solid;
    border-radius: 4px;
    border-width: 2px;
    border-color: rgb(156, 151, 151);
    padding-top: 35px;
    margin-top: 1px;
    margin-left: 400px;
    margin-right: 400px;
    height: 100px;
    font-size:18px;
    background-color: #00ba54;
    color: white;
}


.CheckBox {
    text-align: center;
    padding: 10px 0;
}
.CheckBox hr {
    margin-left: 400px;
    margin-right: 400px;
    padding: 1px;
    background-color: rgb(156, 151, 151);
    margin-bottom: 1px;
}

.footer {
    background-color: #fafafa;
}
.joinBtn{
    margin-top:20px;
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
    margin-left: 79px;
}

#mobile {
    margin-left: 37px;
}

.total_add {
    margin-left: 79px;
}

.detail_add {
    margin-left: 43px;
}

.pwFlag,
.re_pwFlag {
    margin-top: 25px;
    color: red;
}
#busNum {
    width: 400px;
    height: 25px;
    margin-left: 50px;
    border-radius: 4px;
    border: 1px solid;
    text-align: center;
}
</style>
