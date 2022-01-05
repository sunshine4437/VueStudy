<template>
    <div class="review">
        <div class="reviewTitle">
            <h2>상품평</h2>
        </div>
        <div class="reviewMain">
            <table class="reviewTable">
                <tr v-for="(review, idx) in reviews" :key="idx">
                    <td style="width: 10%">
                        <img v-bind:src="review.image" />
                    </td>
                    <td style="text-align: left">
                        <span v-html="review.comment"></span>
                    </td>
                    <td style="width: 10%"><span v-html="review.id"></span></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    image: "http://placehold.it/100X100",
                    comment: "코멘트",
                    id: "닉네임",
                },
                {
                    image: "http://placehold.it/100X100",
                    comment: "코멘트",
                    id: "닉네임",
                },
                {
                    image: "http://placehold.it/100X100",
                    comment: "코멘트",
                    id: "닉네임",
                },
                {
                    image: "http://placehold.it/100X100",
                    comment: "코멘트",
                    id: "닉네임",
                },
                {
                    image: "http://placehold.it/100X100",
                    comment: "코멘트",
                    id: "닉네임",
                },
            ],
        };
    },
};
</script>
 
<style scoped>
.reviewMain {
    width: 100%;
}
.reviewTable {
    width: 100%;
    text-align: center;
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
</style>
