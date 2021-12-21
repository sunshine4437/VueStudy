<template>
    <div class="review">
        <div class="reviewTitle">
            <h2>상품평</h2>
        </div>
        <div class="reviewMain">
            <table style="width: 100%">
                <tr v-for="review in reviews" :key="review.id">
                    <td style="width:10%"><img v-bind:src="review.image" /></td>
                    <td><span v-html="review.comment"></span></td>
                    <td style="width:10%"><span v-html="review.id"></span></td>
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
 
<style>
.reviewMain {
    width: 100%;
}
td,
th {
    padding: 10px;
    border: 1px solid #ccc;
}
body {
    padding: 1rem;
}
</style>
