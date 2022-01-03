<template>
    <div class="productDetail">
        <div class="detailTop">
            <div
                class="leftBox scale-down"
                style="margin: auto; text-align: center"
            >
                <img
                    style="width: 500px; height: 500px; border-radius: 10px"
                    src="@/components/productDetail/image/product01.jpg"
                />
            </div>
            <div class="rightBox">
                <div class="enter"></div>
                <div class="rightTitle">
                    <h2>
                        네파 신상, 이월 다운/플리스 외 FW의류 + 연말 파이널 sale
                    </h2>
                    <h1>{{ AddComma(price) }}원</h1>
                </div>
                <div class="rightTop">
                    <p>15시 이전 주문 시 오늘 출발</p>
                    <p>
                        배송비 {{ AddComma(delivery) }}원 (
                        {{ AddComma(delivery_low) }}원 이상 구매 시 배송비 무료)
                    </p>
                </div>
                <div class="rightSelect">
                    <h3>옵션 선택</h3>
                    <div class="searchBar">
                        <select
                            id="search1"
                            name="searchSelect"
                            class="searchSelectBox"
                            @click="firstSelected($event)"
                        >
                            <option value="0">상품 번호</option>
                            <option value="01_7G72068">01_7G72068</option>
                            <option value="02_7G72054">02_7G72054</option>
                            <option value="03_7G72072">03_7G72072</option>
                            <option value="04_7G82072">04_7G82072</option>
                            <option value="05_7F82042">05_7F82042</option>
                        </select>
                    </div>
                    <div class="searchBar">
                        <select
                            name="searchSelect"
                            class="searchSelectBox"
                            v-show="isSelected"
                            @click="secondSelected($event)"
                        >
                            <option value="0">사이즈</option>
                            <option value="90">90</option>
                            <option value="95">95</option>
                            <option value="100">100</option>
                            <option value="105">105</option>
                            <option value="110">110</option>
                        </select>
                    </div>
                </div>
                <div class="rightSelected">
                    <h3 style="text-align: left; padding: 0 0 0 20px">
                        선택된 옵션
                    </h3>
                    <table style="width: 100%">
                        <div class="rightSelectedTable">
                            <tr
                                v-for="(item, index) in items.slice(1)"
                                :key="index"
                            >
                                <td>
                                    <span v-html="item.name"></span>
                                </td>
                                <td style="width: 50px">
                                    <span v-html="item.size"></span>
                                </td>
                                <td style="width: 30px">
                                    <button
                                        @click="removeSelected(index)"
                                        class="removeSelectedBtn"
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
                <div class="clear"></div>
                <div class="rightButton">
                    <h3 style="text-align: right; margin: 20px 35px 30px 0">
                        총 상품금액 : {{ AddComma(totalPrice) }}원
                    </h3>
                    <router-link v-if="Login" v-bind:to="'/basket'">
                        <button class="myCartBtn" style="margin-right: 20px">
                            장바구니
                        </button>
                    </router-link>
                    <router-link v-else v-bind:to="'/Login'">
                        <button class="myCartBtn" style="margin-right: 20px">
                            장바구니
                        </button>
                    </router-link>
                    <router-link v-bind:to="'/payment'">
                        <button class="buyBtn">구매하기</button>
                    </router-link>
                </div>
                <!-- <div class="rightSelectedTable">
                        <tr v-for="item in getBasketList.slice(1)" :key="item">
                            <td>
                                <span v-html="item.name"></span>
                            </td>
                            <td style="width: 50px">
                                <span v-html="item.size"></span>
                            </td>
                            <td style="width: 50px">
                                <span v-html="item.price"></span>
                            </td>
                        </tr>
                    </div> -->
                <div class="clear"></div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="shopInfo">
            <shopInfo></shopInfo>
        </div>
        <div class="clear"></div>
        <div class="detail">
            <detail></detail>
        </div>
    </div>
</template>

<script>
import detail from "@/components/productDetail/detail.vue";
import shopInfo from "@/components/productDetail/shopInfo.vue";
import { createNamespacedHelpers } from "vuex";
const loginStore = createNamespacedHelpers("loginStore");
const basketList = createNamespacedHelpers("basketList");
export default {
    components: {
        detail: detail,
        shopInfo: shopInfo,
    },
    data: function () {
        return {
            isSelected: false,
            firstOption: 0,
            secondOption: 0,
            items: [{}],
            totalPrice: 0,
            price: 27000,
            delivery: 2500,
            delivery_low: 50000,
            delivery_fee: 2500,
        };
    },
    methods: {
        firstSelected(event) {
            if (event.target.value != 0) {
                this.isSelected = true;
                this.firstOption = event.target.value;
            } else {
                this.isSelected = false;
            }
        },
        secondSelected(event) {
            if (event.target.value != 0) {
                this.secondOption = event.target.value;
                this.isSelected = false;
                let newItem = {
                    name: this.firstOption,
                    size: this.secondOption,
                    price: this.price,
                };
                this.items.push(newItem);
                // this.addList(newItem);
                this.totalPrice += this.price;

                if (this.totalPrice >= 50000) {
                    this.delivery_fee = 0;
                }

                event.target.value = 0;
                document.getElementById("search1").value = 0;
            }
        },
        addBasketList() {
            for (let i = 1; i < this.items.length; i++) {
                this.addList(this.items[i]);
            }
        },
        removeSelected(idx) {
            this.items.splice(idx + 1, 1);
            this.totalPrice -= this.price;

            if (this.totalPrice < 50000) {
                this.delivery_fee = 2500;
            }
        },
        AddComma(num) {
            var regexp = /\B(?=(\d{3})+(?!\d))/g;
            return num.toString().replace(regexp, ",");
        },
        ...loginStore.mapMutations(["Login"]),
        ...basketList.mapMutations(["addList"]),
    },
    computed: {
        ...basketList.mapGetters(["getBasketList"]),
    },
};
</script>

<style scoped>
* {
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

h1 {
    text-align: left;
}

hr {
    padding: 0 0;
    margin: 0 0;
}

.enter {
    margin: 60px;
}

.scale-down {
    object-fit: scale-down;
    width: 100%;
}

.detailTop {
    display: block;
    width: 100%;
    height: 750px;
    display: flex;
    background-color: #fafafa;
    margin: 0 0 30px 0;
}

.leftBox {
    width: 50%;
    padding: 0 0;
}

.rightBox {
    display: inline-block;
    width: 50%;
    height: auto;
    padding: 0 20px;
    margin-left: auto;
}

.rightTitle {
    width: 100%;
    padding: 0 0 0 20px;
    float: right;
    border-bottom: 1px solid rgb(197, 195, 195);
}

.rightTop {
    width: 100%;
    padding: 0 0 0 20px;
    float: right;
    border-bottom: 1px solid rgb(197, 195, 195);
}

.rightSelect {
    width: 100%;
    height: 150px;
    padding: 0 0 0 20px;
    float: right;
    border-bottom: 1px solid rgb(197, 195, 195);
}

.rightSelected {
    width: 100%;
    float: right;
    padding: 0 35px 20px 0;
    text-align: right;
    height: 160px;
    border-bottom: 1px solid rgb(197, 195, 195);
}

.rightSelectedTable {
    overflow-y: scroll;
    height: 80px;
    width: 200px;
    margin: 0 0 0 auto;
}
.removeSelectedBtn {
    width: 16px;
    height: 18px;
    padding: 0 0;
    font-size: 14px;
    color: #fafafa;
    background-color: rgb(0, 153, 255);
}
.searchBar {
    display: flex;
    margin: 10px;
}

.searchSelectBox {
    min-width: 200px;
    font-size: 18px;
    border-radius: 4px;
    outline: 2px solid rgb(0, 153, 255);
    border: none;
}

.rightButton {
    display: inline-block;
    width: 100%;
    padding: 0;
    text-align: center;
}

.myCartBtn {
    width: 200px;
    font-size: 150%;
}

.buyBtn {
    width: 200px;
    font-size: 150%;
}

.clear {
    clear: both;
}
</style>
