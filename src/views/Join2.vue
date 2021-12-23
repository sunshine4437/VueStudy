<template>
<div>
    <div style="text-align:center;">
        <router-link v-bind:to="'/'"> <img src="http://placehold.it/95X95" alt="logo"></router-link>
        <h1>회원가입</h1>
        <hr>
    </div>
    <form class="container" name="login_member" action="#" method="post">

        <div>
            <h3>
                아이디
            </h3>
            <input type="text" name="class" class="id">
            <button class="classBtn"> 중복확인 </button>
        </div>
        <div>
            <h3>
                닉네임
            </h3>
            <input type="text" name="nick" class="nick">
            <button class="nickBtn"> 중복확인 </button>
        </div>
        <div>
            <h3>
                비밀번호
            </h3>
            <input type="password" name="password" class="password">
        </div>
        <div>
            <h3>
                비밀번호확인
            </h3>
            <input type="password" name="re_password" class="re_password">
        </div>
        <div>
            <h3>
                이름
            </h3>
            <input type="text" name="username" class="username">
        </div>
        <div>
            <h3>
                생년월일
            </h3>
            <select name="birthYear" id="birthYear" class="selectBirth">
                <option v-for="n in range(1920,2021)" :key="n" :value="n">{{n}}년</option>
            </select>
            <select name="birthMonth" id="birthMonth" class="selectBirth">
                <option v-for="n in 12" :key="n" :value="n">{{n}}월</option>
            </select>
            <select name="birthDay" id="birthDay" class="selectBirth">
                <option v-for="n in 31" :key="n" :value="n">{{n}}일</option>
            </select>
        </div>
        <div>
            <h3>
                전화번호
            </h3>
            <input type="text" name="mobile" class="mobile" placeholder="-없이 숫자만" maxlength="11">
        </div>

        <div>
            <h3>
                주소
            </h3>
            <input type="text" name="total_add" class="total_add">
            <button class="addBtn">주소검색</button>
        </div>
        <div>
            <h3>
                상세주소
            </h3>
            <input type="text" name="detail_add" class="detail_add">
        </div>
        <div>
            <h3>
                <label>사업자등록 번호</label>
            </h3>
            <input type="text" name="mobile" class="mobile" placeholder="-없이 숫자만" maxlength="10">
        </div>

    </form>
    <div class="">
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
        return {}
    },
    methods: {
        range(start, end) {
            let list = []
            for (let i = start; i <= end; i++)
                list.push(i);
            return list;
        }
    }

}
</script>

<style scoped>
.container {}

.container>div {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}

.container>div>h3 {
    width: 100%;
    margin: 12px 0;
}

.container>div>input {
    display: inline-block;
    width: 60%;
    margin-right: 10px;
}

.CheckBox {
    text-align: center;
    padding: 10px 0;
}

.joinBtnArea {
    text-align: center;
}

.classBtn,
.nickBtn,
.addBtn {
    margin-left: 1px;
    margin-right: auto;
    background-color: #0051ba;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
}

.selectBirth {
    margin-right: 10px;
}
</style>
