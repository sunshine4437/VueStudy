<template>
<div>
    <form name="login_member" action="#" method="post">
        <div>
            <h1>회원가입</h1>
            <hr>
            <h3>
                <label>아이디</label>
            </h3>
            <input type="text" name="id" id="id">
            <button type="button" id="idbtn"> 중복확인 </button>
        </div>
        <div>
            <h3>
                <label>닉네임</label>
            </h3>
            <input type="text" name="nick" id="nick">
            <button type="button" id="nickbtn"> 중복확인 </button>
        </div>
        <div>
            <h3>
                <label>비밀번호</label>
            </h3>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <h3>
                <label>비밀번호확인</label>
            </h3>
            <input type="password" name="re_password" id="re_password">
        </div>
        <div>
            <h3>
                <label>이름</label>
            </h3>
            <input type="text" name="username" id="username">
        </div>
        <div>
            <h3>
                <label>
                    생년월일
                </label>
            </h3>
            <input type="text" id="yy" name="yy" placeholder="년도(숫자4)" maxlength="4">
            <select name="mm" id="mm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            월

            <input type="text" name="dd" id='dd' placeholder="일" maxlength="2">
        </div>
        <div>
            <h3>
                <label>전화번호</label>
            </h3>
            <input type="text" name="mobile" id="mobile" placeholder="-없이 숫자만" maxlength="11">
        </div>

        <div>
            <h3>
                <label>주소</label>
            </h3>
            <input type="text" name="total_add" id="total_add">
            <button id="addBtn">주소검색</button>
        </div>
        <div>
            <h3>
                <label>상세주소</label>
            </h3>
            <input type="text" name="detail_add" id="detail_add">
        </div>

    </form>
    <div class="">
        <div class="CheckBox">
            <label id="Agree">약관동의</label>
            <input type="checkbox" name="cb1" id="agree"><label>귀하의 쇼핑몰에 회원으로 가입합니다(필수)</label><br>
            <input type="checkbox" name="cb2" id="agree">개인정보 수집 이용동의(필수) <br>
            <input type="checkbox" name="cb3" id="agree">마케팅 활용 및 광고성 정보 수신 동의 (선택)<br>

        </div>

        <div>
            <button id="joinBtn">가입하기</button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
