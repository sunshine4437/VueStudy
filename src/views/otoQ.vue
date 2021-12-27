<template>
    <div class="otoQ">
        <form
            class="otoQForm"
            action="success.html"
            name="register"
            method="post"
        >
            <table>
                <tr>
                    <th colspan="2">문의글 작성</th>
                </tr>
                <tr>
                    <td style="width: 20%">문의 유형</td>
                    <td>
                        <select name="qnaType1" id="qnaType1">
                            <option value="회원">회원</option>
                            <option value="쿠폰/혜택/이벤트">
                                쿠폰/혜택/이벤트
                            </option>
                            <option value="주문/결제">주문/결제</option>
                            <option value="배송">배송</option>
                            <option value="취소/반품/교환">
                                취소/반품/교환
                            </option>
                            <option value="기타">기타</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>문의 내용</td>
                    <td>
                        <textarea
                            name="otoTextarea"
                            id="otoTextarea"
                            class="otoTextarea"
                            maxlength="2000"
                            placeholder="문의 내용을 입력해주세요."
                            style="resize: none"
                            required
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <td>연락처</td>
                    <td><input type="text" id="mobile" required /></td>
                </tr>
                <tr>
                    <td>파일 첨부</td>
                    <td>
                        <div class="filebox">
                            <input
                                class="upload-name"
                                value="첨부파일"
                                placeholder="첨부파일"
                            />
                            <label for="file">파일찾기</label>
                            <input type="file" id="file" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <router-link
                            class="signUpLink"
                            v-bind:to="'/customerService'"
                        >
                            <button>취소하기</button></router-link
                        >
                        <button type=" submit">등록하기</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
export default {
    methods: {},
};
document.getElementById('file')
</script>

<style scoped>
.filebox label {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
}
.filebox input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}
.input-file-button {
    background-color: #0051ba;
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
}
.otoQ {
    width: 60%;
    margin: 0 auto;
    display: flex;
}

.otoQForm {
    margin: auto;
}

.otoTextarea {
    height: 500px;
    width: 100%;
}

table {
    border: 1px black solid;
    border-collapse: collapse;
    padding: 20px 20px;
    width: 700px;
}

th,
td {
    border: 1px black solid;
    padding: 20px 20px;
}
</style>
