<template>
    <div class="container">
        <hr />
        <div class="detailTop">
            <div class="leftBox">
                <img class="scale-down" src="http://placehold.it/500X500" />
            </div>
            <div class="rightBox">
                <br /><br /><br />
                <div class="rightTitle">
                    <h2>상품명</h2>
                </div>
                <div class="rightTop">
                    <h2>9900원</h2>
                    <hr />
                    <h4>배송비 무료</h4>
                </div>
                <div class="rightSelect">
                    <h4>옵션 선택</h4>
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
                <div class="rightButton">
                    <h4>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        총 상품금액
                    </h4>
                    <button
                        class="myCartBtn"
                        onclick="pdsClickLog('200000516', 'utlity', {});"
                    >
                        <em>장바구니</em>
                    </button>
                    &nbsp;
                    <button
                        class="buyBtn"
                        onclick="pdsClickLog('200000517', 'utlity', {});"
                    >
                        <em>구매하기</em>
                    </button>
                    &nbsp;&nbsp;
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
/* html {
    overflow-y: scroll;
} */
* {
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
.scale-down {
    object-fit: scale-down;
    width: 100%;
}
.detailTop {
    width: 100%;
    height: 700px;
    display: flex;
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
    border: 1px black solid;
    border-radius: 15px;
    float: right;
}
.rightTop {
    width: 100%;
    padding: 0 0 0 20px;
    border: 1px black solid;
    border-radius: 15px;
    float: right;
}
.rightSelect {
    width: 100%;
    height: 25%;
    padding: 0 0 0 20px;
    border: 1px black solid;
    border-radius: 15px;
    float: right;
}
.rightSelected {
    width: 100%;
    float: right;
    padding: 0 50px 0 0;
    border: 1px black solid;
    border-radius: 15px;
    text-align: right;
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
    border: 1px black solid;
    border-radius: 15px;
    text-align: center;
}
.myCartBtn {
    width: 280px;
    height: 50px;
    font-size: 200%;
}
.buyBtn {
    width: 280px;
    height: 50px;
    font-size: 200%;
}

.clear {
    clear: both;
}
</style>