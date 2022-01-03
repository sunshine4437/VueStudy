<template>
<div class="deliverySelect">
    <div class="search">
        <input id="addressInput" type="text" placeholder="주소 입력" />
        <button @click="addressSearch()">검색</button>
    </div>
    <div class="toShow" v-if="getFlag1">1</div>
    <div class="Error" v-if="getFlag2">2</div>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>

</style>
