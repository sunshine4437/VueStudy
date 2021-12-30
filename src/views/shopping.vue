<template>
<div class="asdf">
    <div class="container2">
        <div class="aside_info">
            <h2>가격비교</h2>
            <ul class="buy">
                <li>숙박대전</li>
                <li>배송선물</li>
                <li>희망쇼핑</li>
                <li>할인금액</li>
            </ul>
            <h2>사이즈</h2>
            <ul class="size">
                <li>130~140이상</li>
                <li>145~155이상</li>
                <li>160~170이상</li>
                <li>175이상</li>
            </ul>
            <h2>색상</h2>
            <ul class="color">
                <li>흰색</li>
                <li>검은색</li>
                <li>빨간색</li>
                <li>파란색</li>
            </ul>
            <h2>판매처</h2>
            <ul class="aside_vendor">
                <li>백화점</li>
                <li>인터넷쇼핑몰</li>
                <li>홈쇼핑</li>
                <li>아울렛</li>
            </ul>
            <h2>배송혜택</h2>
            <ul class="aside_delivery">
                <li>무료배송</li>
                <li>오늘발송</li>
                <li>반품 배송비 지원</li>
                <li>무료선물포장</li>
            </ul>
        </div>
    </div>

    <div class="container0">
        <div class="container">
            <div class="products_fa">
                <h2 class='span1'> 인기상품</h2>
                <div class="products">
                    <router-link v-bind:to="'/productDetail'">
                        <img src="@/components/mainPage/productTableImage/1.jpg">
                        <p>[뉴발란스] 운동화 MW880GR4 NBPQAS102G 15 </p>
                        <p class="price">125,000원</p>
                    </router-link>
                    <a href="#">
                        <img src="@/components/mainPage/productTableImage/1.jpg">
                        <p>[뉴발란스] 327 스니커즈 MS327FE</p>
                        <p class="price">150,900원</p>
                    </a>
                    <a href="#">
                        <img src="@/components/mainPage/productTableImage/1.jpg">
                        <p>아디다스 울트라부스트 21_FY0379</p>
                        <p class="price">114,500원</p>
                    </a>
                    <a href="#">
                        <img src="@/components/mainPage/productTableImage/1.jpg">
                        <p>나이키 남성 에어맥스 90 EOI DA5562-001</p>
                        <p class="price">129,000원</p>
                    </a>
                </div>
            </div>

            <h2 class="span1"> 관련상품</h2>
            <div class="products1">
                <ul>
                    <li class="item" v-for="(item, idx) in items" :key="idx">
                        <a href="#">
                            <img src="@/components/mainPage/productTableImage/1.jpg">
                        </a>
                        <div class="desc">
                            <span class="name">{{item.brand}}<br>
                                {{item.name}}<br><br>
                                {{item.color}}</span>
                        </div>
                        <div class="desc">
                            <span class="name"> 가격<br><br>
                                {{item.price}}</span>
                        </div>
                        <div class="desc">
                            <span class="name"> 판매처<br>{{item.selling}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    brand: "나이키",
                    name: "에어맥스",
                    color: "트리플블랙",
                    price: "173,000",
                    selling: "two_step"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                },
                {
                    brand: "아디다스",
                    name: "에어ddd맥스",
                    color: "트리sdsds플블랙",
                    price: "173,0dsds00",
                    selling: "two_dsdstep"
                }
            ]
        }
    }
}
</script>

<style scoped>
.asdf {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
}

.container0 {
    margin: 0;
    padding: 0;
    display: flex;
}

.container {
    margin: 0;
    padding: 0;
    display: inline;
    border: 1px solid black;
    border-radius: 4px;
}

.products_fa {
    display: inline;
}

.span1 {
    display: flex;
    font-size: 22px;
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    margin: 10px;
    background-color: #fafafa;
    border-radius: 4px;
}

.products {
    display: inline-flex;
    justify-content: center;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.products router-link {
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 16px;
}

.products a {
    display: inline;
    width: 225px;
    margin: 0 10px;
    background-color: #fafafa;
    border-radius: 4px;
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

}

.products p {
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 16px;
    text-align: center;
}

.products1 ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.products1 li {
    margin: 10px 10px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    background-color: #fafafa;
    border-radius: 4px;
    margin-left: 1px solid black;
}

.products1 .item a>img {
    width: 225px;
}

.desc {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 200px;
    height: 200px;
    border-left: 1px solid rgb(189, 185, 185);
    border-right: 1px solid rgb(189, 185, 185);
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 16px;
    /* text-align: center; */
}

br {
    padding-top: 10px;
}

.desc::before {}

.container2 {
    display: inline-block;
    margin: 0;
    padding: 0;
}

.aside_info {
    border: 1px solid black;
    width: 150px;
    background-color: #fafafa;
    border-bottom: 1px solid black;
    border-radius: 4px;

}

.aside_info h2 {
    margin: 0;
    display: flex;
    padding-left: 10px;
    border-bottom: 1px solid black;
    background-color: white;
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    font-size: 22px;
}

.aside_info ul {
    list-style: none;
    margin: 10px;
    padding: 0;
    align-items: center;
}

.aside_info li {
    font-size: 16px;
    font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
    padding: 5px;
    margin: 0;
}

.clearfix {
    clear: both;
}
</style>
