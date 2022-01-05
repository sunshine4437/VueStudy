<template>
    <div class="qna">
        <div class="qnaTitle">
            <h2>상품 문의</h2>
        </div>
        <div class="qnaMain">
            <tr>
                <div>
                    <th style="width: 81px">번호</th>
                    <th style="width: 151px">상태</th>
                    <th style="width: 651px">제목</th>
                    <th style="width: 171px">문의자</th>
                    <th style="width: 151px">등록일</th>
                </div>
            </tr>

            <tr v-for="qna in qnas" :key="qna.number">
                <div>
                    <collapse :selected="false">
                        <div slot="collapse-header">
                            <td style="width: 80px">
                                <span v-html="qna.number"></span>
                            </td>
                            <td style="width: 150px">
                                <span v-html="qna.state"></span>
                            </td>
                            <td style="width: 650px; text-align: left">
                                <span v-html="qna.question"></span>
                            </td>
                            <td style="width: 170px">
                                <span v-html="qna.name"></span>
                            </td>
                            <td style="width: 150px">
                                <span v-html="qna.date"></span>
                            </td>
                        </div>
                        <div slot="collapse-body">
                            <span v-html="qna.content"></span>
                        </div>
                    </collapse>
                </div>
            </tr>
        </div>
    </div>
</template>

<script>
import Collapse from "@/components/productDetail/Collapse.vue";
export default {
    components: {
        Collapse: Collapse,
    },
    data() {
        return {
            qnas: [
                {
                    number: "10",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "9",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "8",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "7",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "6",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "5",
                    state: "검토중",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-21",
                    content: "내용입니다",
                },
                {
                    number: "4",
                    state: "답변완료",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-20",
                    content: "내용입니다",
                },
                {
                    number: "3",
                    state: "답변완료",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-20",
                    content: "내용입니다",
                },
                {
                    number: "2",
                    state: "답변완료",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-20",
                    content: "내용입니다",
                },
                {
                    number: "1",
                    state: "답변완료",
                    question: "질문입니다",
                    name: "nickname",
                    date: "2021-12-20",
                    content: "내용입니다",
                },
            ],
        };
    },
};
</script>
 
<style scoped>
.qnaMain {
    width: 1600px;
    text-align: center;
    border-collapse: collapse;
}
td,
th {
    padding: 10px;
    border: 1px solid rgb(197, 195, 195);
    border-radius: 4px;
}
body {
    padding: 1rem;
}
.thTemp {
    margin: 0 0;
}
</style>
