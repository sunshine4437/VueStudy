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
                    <h1>27,000원~</h1>
                </div>
                <hr />
                <div class="rightTop">
                    <h3>배송비 무료</h3>
                </div>
                <hr />
                <div class="rightSelect">
                    <h3>옵션 선택</h3>
                    <div class="searchBar">
                        <select name="searchSelect" class="searchSelectBox">
                            <option value="0">옵션 1</option>
                            <option value="1">상품명 1</option>
                            <option value="2">상품명 2</option>
                            <option value="3">상품명 3</option>
                            <option value="3">상품명 4</option>
                            <option value="3">상품명 5</option>
                        </select>                        
                    </div>
                </div>
                <div class="rightSelected">
                    <h4>상품명 2</h4>
                </div>
                <div class="clear"></div>
                <div class="rightButton" style="padding: 10px">
                    <h4 style="display: flex">
                        <label for="" style="margin-left: auto"
                            >총 상품금액</label
                        >
                        <label for="" style="width: 190px; margin-right: 35px"
                            >100,000,000원</label
                        >
                    </h4>
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
    width: 100%;
    height: 700px;
    display: flex;
    background-color: #fafafa;
    margin: 0 0 30px 0;
}

.leftBox {
    width: 50%;
    padding: 0 0;
}

.rightBox {
    width: 50%;
    padding: 0 0;
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
    height: 25%;
    padding: 0 0 0 20px;
    float: right;
    /* background-color: #fafafa; */
}

.rightSelected {
    width: 100%;
    float: right;
    padding: 0 83px 0 0;
    text-align: right;
    /* background-color: #fafafa; */
}

.searchBar {
    display: flex;
}

.searchSelectBox {
    min-width: 200px;
    font-size: 20px;
    border: 2px solid #0051ba;
    border-radius: 4px;
}

.rightButton {
    width: 100%;
    float: right;
    padding: 0 10px 20px 20px;
    text-align: center;
    /* background-color: #fafafa; */
}

.myCartBtn {
    width: 250px;
    font-size: 150%;
}

.buyBtn {
    width: 250px;
    font-size: 150%;
}

.clear {
    clear: both;
}
</style>
