<template>
<div>
    <div class="container2">
        <div class="aside_info">
            <span>가격비교</span>
            <ul class="buy">
                <li>숙박대전</li>
                <li>배송선물</li>
                <li>희망쇼핑</li>
                <li>할인금액</li>
            </ul>
            <span>사이즈</span>
            <ul class="size">
                <li>130~140이상</li>
                <li>145~155이상</li>
                <li>160~170이상</li>
                <li>175이상</li>
            </ul>
            <span>색상</span>
            <ul class="color">
                <li>흰색</li>
                <li>검은색</li>
                <li>빨간색</li>
                <li>파란색</li>
            </ul>
            <span>판매처</span>
            <ul class="aside_vendor">
                <li>백화점</li>
                <li>인터넷쇼핑몰</li>
                <li>홈쇼핑</li>
                <li>아울렛</li>
            </ul>
            <span>배송혜택</span>
            <ul class="aside_delivery">
                <li>무료배송</li>
                <li>오늘발송</li>
                <li>반품배송비 지원</li>
                <li>무료선물포장</li>
            </ul>
        </div>
    </div>

    <div class="container0">
        <div class="container">
            <span class='span1'> 인기상품 </span>
            <div class="products">
                <router-link v-bind:to="'/productDetail'">
                    <img src="@/components/mainPage/productTableImage/1.jpg">
                    <p>선글라스</p>
                    <p class="price">49,000</p>
                </router-link>
                <a href="#">
                    <img src="@/components/mainPage/productTableImage/1.jpg">
                    <p>구두</p>
                    <p class="price">89,000</p>
                </a>
                <a href="#">
                    <img src="@/components/mainPage/productTableImage/1.jpg">
                    <p>가방</p>
                    <p class="price">69,000</p>
                </a>
            </div>

            <span class="span1"> 관련상품</span>
            <div class="products1">
                <ul>
                    <li class="item">
                        <a href="#">
                            <img src="@/components/mainPage/productTableImage/1.jpg">
                        </a>
                        <div class="desc">
                            <span class="name"> 상품명:<br>운동화</span>
                        </div>
                        <div class="desc">
                            <span class="name"> 가격: <br>79,000</span>
                        </div>
                        <div class="desc">
                            <span class="name"> 판매처:<br>홈쇼핑</span>
                        </div>

                    </li>
                    <li class="item">
                        <a href="#">
                            <img src="@/components/mainPage/productTableImage/1.jpg">
                        </a>
                        <div class="desc">
                            <span class="name"> 상품명:<br>로퍼</span>
                        </div>
                        <div class="desc">
                            <span class="price"> 가격: <br>99,000</span>
                        </div>
                        <div class="desc">
                            <span class="vendor">판매처:<br>백화점</span>
                        </div>

                    </li>
                    <li class="item">
                        <a href="#">
                            <img src="@/components/mainPage/productTableImage/1.jpg">
                        </a>
                        <div class="desc">
                            <span class="name"> 상품명:<br>손목시계</span>
                        </div>
                        <div class="desc">
                            <span class="price"> 가격: <br>109,000</span>
                        </div>
                        <div class="desc">
                            <span class="vendor">판매처:<br>아울렛</span>
                        </div>

                    </li>
                </ul>
            </div>
        </div>

        <div class="clearfix"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container0 {
    display: flex;
}

.container {
    margin: auto;
    display: inline-block;
    align-items: center;
    text-align: center;
}

.span1 {
    display: flex;
    font-size: 22px;
    margin: 5px;

    background-color: rgba(154, 201, 240, 0.897);
}

.products {
    display: inline-block;
}

.products a {
    display: inline-block;
    width: 225px;
    margin: 0 10px;
    background-color: rgba(174, 209, 236, 0.897);
    border: solid 1px black;
    text-decoration: none;
}

.products a:visited,
.products a:hover,
.products a:link {
    color: black;
    text-decoration: none;
}

.products img {
    width: 225px;
    height: 225px;
    border-bottom: solid 1px black;
}

.products p {
    font-size: 15px;
}

.products1 ul {
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
}

.products1 .item {
    margin: 10px 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(174, 209, 236, 0.897);
}

.products1 .item a>img {
    width: 225px;
    border: 1px solid black;
    margin-top: 3px;
    text-decoration: none;
}

.products1 .item .name {
    font-size: 20px;
    border: 1px;
}

.products1 .item .price {
    font-size: 20px;
}

.products1 .item .vendor {
    font-size: 20px;
}

.desc {
    width: 100px;
}

.container2 {
    float: left;
}

.aside_info {
    border: 1px solid black;
    text-align: center;
    background-color: rgba(174, 209, 236, 0.897);
    border-bottom: 1px solid black;

}

.aside_info span {
    display: flex;
    padding-left: 10px;
    font-size: 20px;
    border-bottom: 1px solid black;
    background-color: white;
}

.aside_info ul {
    font-size: 15px;
    list-style: none;
    margin: 10px;
    padding: 0;
}

.aside_info .buy {
    list-style: none;
    margin: 0;
    padding: 10px;
}

.clearfix {
    clear: both;
}
</style>
