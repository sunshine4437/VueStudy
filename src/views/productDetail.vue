<template>
<div class="productDetail">
    <hr />
    <div class="detailTop">
        <div class="leftBox">
            <img class="scale-down" src="http://placehold.it/500X500" />
        </div>
        <div class="rightBox">
            <div class="enter"></div>
            <div class="rightTitle">
                <h2>
                    네파 신상, 이월 다운/플리스 외 FW의류 + 연말 파이널 sale
                </h2>
                <h1>{{ price }}원</h1>
            </div>
            <hr />
            <div class="rightTop">
                <p>15시 이전 주문 시 오늘 배송</p>
                <p>배송비 무료</p>
            </div>
            <hr />
            <div class="rightSelect">
                <h3>옵션 선택</h3>
                <div class="searchBar">
                    <select name="searchSelect" class="searchSelectBox" @click="firstSelected($event)">
                        <option value="0">상품 번호</option>
                        <option value="01_7G72068">01_7G72068</option>
                        <option value="02_7G72054">02_7G72054</option>
                        <option value="03_7G72072">03_7G72072</option>
                        <option value="04_7G82072">04_7G82072</option>
                        <option value="05_7F82042">05_7F82042</option>
                    </select>
                </div>
                <div class="searchBar">
                    <select name="searchSelect" class="searchSelectBox" v-show="isSelected" @click="secondSelected($event)">
                        <option value="0">사이즈</option>
                        <option value="90">90</option>
                        <option value="95">95</option>
                        <option value="100">100</option>
                        <option value="105">105</option>
                        <option value="110">110</option>
                    </select>
                </div>
            </div>
            <hr />
            <div class="rightSelected">
                <table style="width: 100%">
                    <tr>
                        <td style="text-align: left; padding: 0 0 0 20px">
                            <h3>선택된 옵션</h3>
                        </td>
                    </tr>
                    <div class="temp">
                        <tr v-for="item in items.slice(1)" :key="item">
                            <td>
                                <span v-html="item.name + '/' + item.size"></span>
                            </td>
                        </tr>
                    </div>

                </table>
            </div>
            <div class="clear"></div>
            <hr>
            <div class="rightButton">
                <h3 style="text-align: right; margin-right: 35px">
                    총 상품금액 : {{ totalPrice }}원
                </h3>
                <button class="myCartBtn" style="margin-right: 20px">
                    장바구니
                </button>
                <router-link v-bind:to="'/payment'">
                    <button class="buyBtn">구매하기</button>
                </router-link>
            </div>
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
                };
                this.items.push(newItem);
                this.totalPrice += this.price;
                event.target.value = 0;
            }
        },
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
    height: auto;
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
    /* background-color: #fafafa; */
}

.rightTop {
    width: 100%;
    padding: 0 0 0 20px;
    float: right;
    /* background-color: #fafafa; */
}

.rightSelect {
    width: 100%;
    height: 200px;
    padding: 0 0 0 20px;
    float: right;
    /* background-color: #fafafa; */
}

.rightSelected {

    width: 100%;
    float: right;
    padding: 0 35px 20px 0;
    text-align: right;
    /* background-color: #fafafa; */
}

.temp {
    height: 100px;
    overflow: scroll;
}

.searchBar {
    display: flex;
    margin: 10px;
}

.searchSelectBox {
    min-width: 200px;
    font-size: 20px;
    border: 2px solid #0051ba;
    border-radius: 4px;
}

.rightButton {
    display: inline-block;
    width: 100%;
    float: right;
    padding: 0;
    text-align: center;
    /* background-color: #fafafa; */
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
