<template>
<div class="payment">
    <div>
        <h2>주문 상품 정보</h2>
        <table class="orderProductTable">
            <tr v-for="(op,idx) in orderProducts" :key="idx">
                <td class="orderProduct" style="width: 10%">
                    <span v-html="op.shopName"></span>
                </td>
                <td class="orderProduct" style="width: 10%">
                    <!-- <img :src="require(`@/components/productDetail/${op.image}`)" alt="productImage"> -->
                    <img v-bind:src="op.image" />
                </td>
                <td class="orderProduct" style="width: 50%; text-align: left">
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
        <h2>할인/포인트</h2>
        <table class="couponTable">
            <tr>
                <td>쿠폰 할인</td>
                <td class="couponNum">{{ coupon }}원</td>
                <td>
                    <button class="couponBtn" @click="applyCoupon()">
                        쿠폰 변경
                    </button>
                </td>
            </tr>
            <tr>
                <td class="tableMiddle">1</td>
            </tr>
            <tr>
                <td>포인트</td>
                <td class="couponNum">{{ point }}원</td>
                <td>
                    <input id="pointInput" type="text" style="width: 100%" />
                </td>
                <td>
                    <button class="couponBtn" @click="applyPoint()">
                        사용
                    </button>
                </td>
            </tr>
        </table>
    </div>
    <hr />
    <div class="delivery">
        <h2 style="margin: 20px 0 0 -10px">배송지 입력</h2>
        <p>
            <span style="margin-right: 30px">이름</span>
            <span>
                <input type="text" name="username" class="shortInput" required />
            </span>
        </p>
        <p>
            <span>전화번호</span>
            <span>
                <input type="text" name="mobile" class="shortInput" placeholder="-없이 숫자만" id="mobile" required @change="phoneCheck()" />
            </span>
            <span>
                <span class="validate" v-if="!phoneValidate">-없이 숫자 11자리만 입력해주세요</span>
            </span>
        </p>
        <p>
            <span>우편번호</span>
            <span>
                <input type="text" name="addr" class="shortInput" />
                <span>
                    <window-popup v-model="open">
                        <deliverySelect></deliverySelect>
                    </window-popup>
                    <button class="addrBtn" @click="open = true">
                        검색
                    </button>
                </span>
            </span>
        </p>
        <p>
            <span>기본주소</span>
            <span colspan="2">
                <input type="text" name="base_addr" class="longInput" />
            </span>
        </p>
        <p>
            <span>상세주소</span>
            <span colspan="2">
                <input type="text" name="detail_addr" class="longInput" />
            </span>
        </p>
    </div>
    <hr />
    <div class="payMethod">
        <h2 style="margin: 20px 0 0 -10px">결제수단 선택</h2>
        <p>
            <input type="radio" value="credit" v-model="radioPay" name="payMethod" style="width: auto" required />신용카드
            <input type="radio" value="cash" v-model="radioPay" name="payMethod" style="width: auto; margin-left: 30px" required />무통장 입금
            <input type="radio" value="phone" v-model="radioPay" name="payMethod" style="width: auto; margin-left: 30px" required />휴대폰 결제
        </p>
        <div v-if="radioPay === 'credit'">
            <select>
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
        </div>
        <div v-if="radioPay === 'cash'">
            <select>
                <option value="">선택</option>
                <option value="">신한은행</option>
                <option value="">국민은행</option>
                <option value="">우리은행</option>
                <option value="">카카오뱅크</option>
            </select>
            <p>계좌번호 : <input type="text" /></p>
        </div>
        <div v-if="radioPay === 'phone'">
            <button style="font-size: 50%; width: 100px">
                휴대폰 결제
            </button>
        </div>
    </div>
    <hr />
    <div class="payInfo">
        <h2>최종 결제 정보</h2>
        <table class="payInfoTable">
            <tr>
                <td class="payIf">상품금액</td>
                <td class="payNum">{{ totalPrice }}원</td>
                <td rowspan="4" class="buyBtn">
                    <button>결제하기</button>
                </td>
            </tr>
            <tr>
                <td class="payIf">할인금액</td>
                <td class="payNum">{{ sale }}원</td>
            </tr>
            <tr>
                <td class="payIf">배송비</td>
                <td class="payNum">{{ delivery }}원</td>
            </tr>
            <tr style="border-top: 2px black solid">
                <td class="payIf">결제 금액</td>
                <td class="payNum">{{ finalPrice }}원</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import WindowPopup from "@/components/payment/WindowPopup.vue";
import deliverySelect from "@/components/payment/deliverySelect.vue";
export default {
    components: {
        WindowPopup,
        deliverySelect
    },
    data() {
        return {
            point: 0,
            totalPrice: 108000,
            coupon: 0,
            sale: 0,
            finalPrice: 110500,
            radioPay: "",
            delivery: 2500,
            phoneValidate: true,
            open: false,
            orderProducts: [{
                    number: "1",
                    shopName: "판매자",
                    image: "product01.jpg",
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
    methods: {
        applyPoint() {
            let pt = document.getElementById("pointInput").value;
            this.point = pt;
            this.sale = parseInt(this.coupon) + parseInt(this.point);
            this.finalPrice = this.totalPrice - this.sale + this.delivery;
        },
        applyCoupon() {
            this.coupon = this.totalPrice * 0.1;
            this.sale = parseInt(this.coupon) + parseInt(this.point);
            this.finalPrice = this.totalPrice - this.sale + this.delivery;
        },
        phoneCheck() {
            let mobile = document.getElementById("mobile").value;
            if (
                /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/.test(
                    mobile
                )
            ) {
                this.phoneValidate = true;
            } else {
                this.phoneValidate = false;
            }
        },
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

.couponTable {
    width: 50%;
    border-collapse: collapse;
    padding: 10px 30px;
}

td {
    padding: 3px 10px;
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

.delivery,
.payMethod {
    padding: 0 10px;
}

.shortInput {
    width: 250px;
    margin-left: 10px;
}

.longInput {
    width: 500px;
    margin-left: 10px;
}

.cardSelect {
    margin: 0 10px;
    width: 10%;
}

.couponSpan {
    margin: 0 20px;
}

.couponBtn {
    width: 100px;
    font-size: 17px;
    padding: 2px 5px;
}

.tableMiddle {
    font-size: 4px;
    padding: 0 0;
    color: white;
}

.couponNum {
    width: 20%;
    text-align: right;
    padding: 5px 20px;
}

.validate {
    margin-left: 10px;
    color: red;
}
</style>
