<template>
<div >
    <div style="text-align:center;">
        <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo"></router-link>
        <h1>회원가입</h1>
        <hr>
    </div>
    <form class="container" name="login_member" action="#" method="get" >
        <div>
            <h3>
                아이디
            <input type="text" name="class" class="id" v-model="putid">
            <button class="classBtn" @click="idcheck" > 중복확인 </button>
               </h3>
        </div>
        <div>
            <h3>
                닉네임
            <input type="text" name="nick" class="nick" v-model="putnick">
            <button class="nickBtn" @click="nickcheck"> 중복확인 </button>
             </h3>
        </div>
        <div>
            <h3>
                비밀번호
            <input v-model="signup.password" type="password" name="pw" class="password"  @blur="passwordValid">
            <div v-if="!passwordValidFlag" class="pwFlag"> 유효하지 않은 비밀번호 입니다. </div>
              </h3>
        </div>
        <div>
            <h3>
                비밀번호확인
            <input v-model="passwordCheck" type="password" name="re_pw" class="re_password" @blur="passwordCheckValid">
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
            <input type="text" name="mobile" class="mobile" placeholder="-없이 숫자만" maxlength="11">
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
            <input type="text" class="busNum" placeholder="-없이 숫자만" maxlength="10">
              </h3>
        </div>
    </form>
    <hr>
    <div class="footer">
        <div class="CheckBox">
            <label class="Agree">약관동의</label><br>
            <input type="checkbox" name="cb1" class="agree">귀하의 쇼핑몰에 회원으로 가입합니다(필수)<br>
            <input type="checkbox" name="cb2" class="agree">개인정보 수집 이용동의(필수)<br>
            <input type="checkbox" name="cb3" class="agree">마케팅 활용 및 광고성 정보 수신 동의 (선택)
        </div>
        <div class="joinBtnArea">
            <button class="joinBtn">가입하기</button>
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
            pwhintans: null 
            }, 
            passwordValidFlag: true, 
            passwordCheck: '', 
            passwordCheckFlag: true,
            putid: '',
            putnick: '',
            msg: '',
        }
    },
    methods: {
        range(start, end) {
            let list = []
            for (let i = start; i <= end; i++)
                list.push(i);
            return list;
        },
        idcheck() {
            try {
                if ("" === this.putid) {
                    alert("공백 입니다.");
                }else if("admin" === this.putid){
                    alert("이미 가입된 아이디 입니다.");
                    } else  {
                        alert("등록 가능한 아이디 입니다.");
                    }   
            } catch (err) {
                this.msg = "error";
            }
        },
        nickcheck() {
            try {
               if ("" === this.putnick) {
                    alert("공백 입니다.");
                }else if("asd" === this.putnick) {
                        alert("이미 가입된 닉네임 입니다.");
                    } else  {
                        alert("등록 가능한 닉네임 입니다.");
                    }    
            } catch (err) {
                this.msg = "error";
            }
        },
        passwordValid () { 
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)) { 
                this.passwordValidFlag = true 
        } else { this.passwordValidFlag = false 
        }
        },
        passwordCheckValid () { 
            if (this.signup.password === this.passwordCheck) { 
                this.passwordCheckFlag = true 
                } else { this.passwordCheckFlag = false 
             } 
         }
    } 
}
</script>

<style scoped>
button {
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    background-color: #0051ba;
    /* background-color: #fafafa; */
    border-radius: 4px;
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 1px;
    margin-left: 30px;
}
h1{
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 32px;
}
h2{
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 22px;
}
h3{
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 18px;
}
p, label, span, a{
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 16px;
}
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
.footer{
    background-color: #fafafa;
}
.joinBtnArea {
    text-align: center;
    padding-bottom: 30px;
}


.id, .nick, .password, .re_password, 
.username, .mobile, .total_add, .detail_add{
    text-align: center;
    height: 25px;
    border-radius: 4px;
    border: 1px solid;
    width: 350px;
}
.id{
    margin-left: 54px;
}
.nick{
    margin-left: 54px;
    }
.password{
    margin-left: 36px;
}

.username{
    margin-left: 73px;
}
.mobile{
    margin-left: 37px;
}
.total_add{
    margin-left: 73px;
}
.detail_add{
    margin-left: 36px;
}
.pwFlag, .re_pwFlag{
    margin-top: 25px;
    color:red;
}

.busNum{
 width: 300px;
 height: 25px;
 margin-left: 50px;
 border-radius: 4px;
 border: 1px solid;
 text-align: center;
}
</style>
