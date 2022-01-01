<template>
    <div class="deliverySelect">
        <div class="search">
            <input id="addressInput" type="text" placeholder="주소 입력" />
            <button @click="addressSearch()">검색</button>
        </div>
        <div class="toShow" v-if="isToShowOpen">asdf</div>
        <div class="Error" v-if="isErrorOpen">zxcv</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isToShowOpen: true,
            isErrorOpen: true,
        };
    },
    methods: {
        addressSearch() {
            console.log("A");
            let addr = document.getElementById("addressInput");            
            console.log(addr);
            if (addr == '멀티캠퍼스') {
                this.isErrorOpen = false;
                this.isToShowOpen = true;
            } else {
                this.isErrorOpen = true;
                this.isToShowOpen = false;
            }
        },
    },
};
</script>
 
<style scoped>
</style>
