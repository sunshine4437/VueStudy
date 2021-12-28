<template>
<div class="example">
    <div class="tabs">
        <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentId" />
    </div>
    <div class="contents">
        <transition>
            <section class="item" :key="currentId">
                <!-- {{ current.content }} -->
                <div v-if="currentId === 1">
                    <img :src="current.content" alt="" />
                </div>
                <div v-else-if="currentId === 2">
                    <review></review>
                </div>
                <div v-else-if="currentId === 3">
                    <qna></qna>
                </div>
            </section>
        </transition>
    </div>
    <div class="tabs">
        <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentId" />
    </div>
</div>
</template>

<script>
import TabItem from "./TabItem.vue";
import review from "./review.vue";
import qna from "./qna.vue";
export default {
    components: {
        TabItem,
        review,
        qna,
    },
    data() {
        return {
            currentId: 1,
            list: [{
                    id: 1,
                    label: "상품 상세 정보",
                    content: "http://placehold.it/1200x1500",
                },
                {
                    id: 2,
                    label: "상품 리뷰",
                    content: review,
                },
                {
                    id: 3,
                    label: "상품 문의",
                    content: qna,
                },
            ],
        };
    },
    computed: {
        current() {
            return this.list.find((el) => el.id === this.currentId) || {};
        },
    },
};
</script>

<style scoped>
.tabs{
    width: 200%;
}
.contents {
    position: relative;
    overflow: hidden;
    width: 100%;
    border: 2px solid #000;
}

.item {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    /* transition: all 0.8s ease; */
}

/* 트랜지션 전용 스타일 */
.v-leave-active {
    position: absolute;
}

.v-enter {
    transform: translateX(-100%);
}

.v-leave-to {
    transform: translateX(100%);
}

img {
    object-fit: scale-down;
    width: 100%;
}
</style>
