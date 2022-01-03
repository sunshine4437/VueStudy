<template>
    <div class="deliverySelect">
        <div>
            <input
                style="font-size: 16px"
                v-model="addressInput"
                type="text"
                placeholder="주소 입력"
            />
            <button style="padding: 1px 10px" @click="addressSearch()">
                검색
            </button>
        </div>
        <div style="padding: 0 5px" v-if="isToShowOpen">
            <h3 style="color: red">06220</h3>
            <div style="display: flex; margin: auto; margin: 10px 0">
                <span
                    style="
                        border: 1px rgba(0, 153, 255, 0.5) solid;
                        margin: 0 5px 0 0;
                        padding: 0 3px;
                        width: 50px;
                        text-align: center;
                        color: rgb(0, 153, 255);
                    "
                    >도로명</span
                >
                <button
                    style="
                        border: none;
                        background-color: white;
                        color: black;
                        height: 20px;
                        padding: 0;
                    "
                    @click="window.close()"
                >
                    서울 강남구 테헤란로 212 (멀티캠퍼스)
                </button>
            </div>
            <div style="display: flex; margin: auto">
                <span
                    style="
                        border: 1px rgba(0, 153, 255, 0.5) solid;
                        margin: 0 5px 0 0;
                        padding: 0 3px;
                        width: 50px;
                        text-align: center;
                        color: rgb(0, 153, 255);
                    "
                    >지 번</span
                >
                <button
                    style="
                        border: none;
                        background-color: white;
                        color: black;
                        height: 20px;
                        padding: 0;
                    "
                >
                    서울 강남구 역삼동 718-5
                </button>
            </div>
        </div>
        <div class="Error" v-if="isErrorOpen">멀티캠퍼스를 입력해주세요</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isToShowOpen: true,
            isErrorOpen: false,
            addressInput: "",
        };
    },
    methods: {
        addressSearch() {
            console.log(this.addressInput);
            if (this.addressInput == "멀티캠퍼스") {
                this.isErrorOpen = false;
                this.isToShowOpen = true;
            } else {
                this.isErrorOpen = true;
                this.isToShowOpen = false;
            }
        },
        addAddr(){
            window.close();
        }
    },
};
</script>
 
<style>
</style>