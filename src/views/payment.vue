<template>
    <div class="payment">
        <div>
            <h4>주문 상품 정보</h4>
            <table class="orderProductTable">
                <tr v-for="op in orderProducts" :key="op.number">
                    <td class="orderProduct" style="width: 10%">
                        <span v-html="op.shopName"></span>
                    </td>
                    <td class="orderProduct" style="width: 10%">
                        <img v-bind:src="op.image" />
                    </td>
                    <td
                        class="orderProduct"
                        style="width: 50%; text-align: left"
                    >
                        <span v-html="op.productName"></span>
                    </td>
                    <td class="orderProduct" style="width: 10%">
                        <span v-html="op.count"></span>
                    </td>
                    <td class="orderProduct" style="width: 10%">
                        <span v-html="op.price"></span>
                    </td>
                    <td class="orderProduct" style="width: 10%">
                        <span v-html="op.delivery"></span>
                    </td>
                </tr>
            </table>
        </div>
        <hr />
        <div class="coupon">
            <h4>할인/포인트</h4>
            <table class="couponTable">
                <tr>
                    <td>쿠폰 할인</td>
                    <td class="couponNum">30,000원</td>
                    <td><button class="couponBtn">쿠폰 변경</button></td>
                </tr>
                <tr>
                    <td class="tableMiddle">1</td>
                </tr>
                <tr>
                    <td>포인트</td>
                    <td class="couponNum">243원</td>
                    <td><input type="text" style="width: 100%"></td>
                    <td><button class="couponBtn">사용</button></td>
                </tr>
            </table>
        </div>
        <hr />
        <div class="delivery">
            <h4>배송지 입력</h4>
            <table class="deliveryTable">
                <tr>
                    <td>이름</td>
                    <td>
                        <input
                            type="text"
                            name="username"
                            class="shortInput"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>전화번호</td>
                    <td>
                        <input
                            type="text"
                            name="mobile"
                            class="shortInput"
                            placeholder="-없이 숫자만"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>우편번호</td>
                    <td>
                        <input type="text" name="addr" class="shortInput" />
                        <button class="addrBtn" onclick="searchAddress()">
                            검색
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>기본주소</td>
                    <td>
                        <input
                            type="text"
                            name="base_addr"
                            class="longInput"
                        />
                    </td>
                </tr>
                <tr>
                    <td>상세주소</td>
                    <td>
                        <input
                            type="text"
                            name="detail_addr"
                            class="longInput"
                        />
                    </td>
                </tr>
            </table>
        </div>
        <hr />
        <div class="payMethod">
            <h4>결제수단 선택</h4>
            <p>
                <input type="radio" value="credit" name="payMethod" style="width: auto;" required>신용카드
                &nbsp;&nbsp;
                <input type="radio" value="credit" name="payMethod" style="width: auto;" required>무통장 입금
                &nbsp;&nbsp;
                <input type="radio" value="credit" name="payMethod" style="width: auto;" required>휴대폰 결제
            </p>
            <p>
                <select name="" class="cardSelect">
                    <option value="">선택</option>
                    <option value="">신한카드</option>
                    <option value="">국민카드</option>
                    <option value="">삼성카드</option>
                    <option value="">현대카드</option>
                    <option value="">롯데카드</option>
                    <option value="">농협카드</option>
                    <option value="">우리카드</option>
                    <option value="">하나카드</option>
                </select>
            </p>
        </div>
        <hr />
        <div class="payInfo">
            <h4>최종 결제 정보</h4>
            <table class="payInfoTable">
                <tr>
                    <td class="payIf">상품금액</td>
                    <td class="payNum">200,000원</td>
                    <td rowspan="4" class="buyBtn">
                        <button>결제하기</button>
                    </td>
                </tr>
                <tr>
                    <td class="payIf">할인금액</td>
                    <td class="payNum">30,243원</td>
                </tr>
                <tr>
                    <td class="payIf">배송비</td>
                    <td class="payNum">0원</td>
                </tr>
                <tr style="border-top: 2px black solid">
                    <td class="payIf">결제 금액</td>
                    <td class="payNum">169,757원</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderProducts: [
                {
                    number: "1",
                    shopName: "판매자",
                    image: "http://placehold.it/100X100",
                    productName: "상품명<br>옵션 : 선택된 옵션",
                    count: "1개",
                    price: "100,000원",
                    delivery: "무료배송",
                },
                {
                    number: "2",
                    shopName: "판매자",
                    image: "http://placehold.it/100X100",
                    productName: "상품명<br>옵션 : 선택된 옵션",
                    count: "1개",
                    price: "100,000원",
                    delivery: "무료배송",
                },
            ],
        };
    },
};
</script>

<style scoped>
.payment {
    border: 1px black solid;
    padding: 20px 10px;
}
.orderProductTable {
    width: 100%;
    border: 1px black solid;
    border-collapse: collapse;
    padding: 10px 10px;
    text-align: center;
    margin: 10px 0;
}

.orderProduct {
    border: 1px black solid;
    padding: 5px 5px;
}

.payInfoTable {
    width: 100%;
    border-collapse: collapse;
    padding: 10px 10px;
    text-align: center;
}
.payIf {
    width: 25%;
    text-align: left;
    padding: 5px 20px;
}
.payNum {
    width: 25%;
    text-align: right;
    padding: 5px 20px;
    border-left: 1px black solid;
}
.deliveryTable {
    width: 50%;
    border-collapse: collapse;
    padding: 10px 10px;
}
.couponTable{
    width: 50%;
    border-collapse: collapse;
    padding: 10px 30px;
}
td{
    padding: 3px 10px;
}
button {
    background-color: #0051ba;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    cursor: pointer;
    margin: 0px 1px;
}
.buyBtn {
    width: 50%;
    border: 0px;
}
.addrBtn {
    font-size: 15px;
    padding: 0 5px;
    width: 50px;
    margin: 0 10px;
}
.shortInput {
    width: 50%;
}

.longInput {
    width: 100%;
}
.cardSelect{
    margin: 0 10px;
    width: 10%;
}
.couponSpan{
    margin: 0 20px;
}
.couponBtn{
    width: 100px;
    font-size: 17px;
    padding: 2px 5px;
}
.tableMiddle{
    font-size: 4px;
    padding: 0 0;
    color: white;
}
.couponNum {
    width: 20%;
    text-align: right;
    padding: 5px 20px;
}
</style>
