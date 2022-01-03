<template>
    <div class="payment">
        <div class="orderProduct">
            <h2>주문 상품 정보</h2>
            <table class="orderProductTable">
                <tr v-for="(op, idx) in orderProducts" :key="idx">
                    <td class="orderProductTd" style="width: 10%">
                        <span v-html="op.shopName"></span>
                    </td>
                    <td class="orderProductTd" style="width: 10%">
                        <img
                            class="orderProductImg"
                            :src="
                                require(`@/components/productDetail/image/${op.image}`)
                            "
                            alt="productImage"
                        />
                    </td>
                    <td
                        class="orderProductTd"
                        style="width: 50%; text-align: left"
                    >
                        <span v-html="op.productName"></span>
                    </td>
                    <td class="orderProductTd" style="width: 10%">
                        <span v-html="op.count"></span>
                    </td>
                    <td class="orderProductTd" style="width: 10%">
                        <span v-html="op.price"></span>
                    </td>
                    <td class="orderProductTd" style="width: 10%">
                        <span v-html="op.delivery"></span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="coupon">
            <h2>할인/포인트</h2>
            <table class="couponTable">
                <tr>
                    <td><span>쿠폰 할인</span></td>
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
                    <td><span>포인트</span></td>
                    <td class="couponNum">{{ point }}원</td>
                    <td>
                        <input
                            id="pointInput"
                            type="text"
                            style="width: 100%"
                        />
                    </td>
                    <td>
                        <button class="couponBtn" @click="applyPoint()">
                            사용
                        </button>
                    </td>
                    <td style="width: 200px">
                        사용 가능 포인트 : {{ usable }}원
                    </td>
                </tr>
            </table>
        </div>
        <div class="delivery">
            <h2 style="margin: 20px 0 0 -10px">배송지 입력</h2>
            <p>
                <span style="margin-right: 28px">이름</span>
                <span>
                    <input
                        type="text"
                        name="username"
                        class="shortInput"
                        required
                    />
                </span>
            </p>
            <p>
                <span>전화번호</span>
                <span>
                    <input
                        type="text"
                        name="mobile"
                        class="shortInput"
                        placeholder="-없이 숫자만"
                        id="mobile"
                        required
                        @change="phoneCheck()"
                    />
                </span>
                <span>
                    <span class="validate" v-if="!phoneValidate"
                        >-없이 숫자 11자리만 입력해주세요</span
                    >
                </span>
            </p>
            <p>
                <span>우편번호</span>
                <span>
                    <input type="text" id="zipCode" class="shortInput" />
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
                    <input type="text" id="baseAddr" class="longInput" />
                </span>
            </p>
            <p>
                <span>상세주소</span>
                <span colspan="2">
                    <input type="text" name="detailAddr" class="longInput" />
                </span>
            </p>
        </div>

        <div class="payMethod">
            <h2 style="margin: 20px 0 0 -10px">결제수단 선택</h2>
            <p>
                <input
                    type="radio"
                    value="credit"
                    v-model="radioPay"
                    name="payMethod"
                    style="width: auto"
                    required
                />신용카드
                <input
                    type="radio"
                    value="cash"
                    v-model="radioPay"
                    name="payMethod"
                    style="width: auto; margin-left: 30px"
                    required
                />무통장 입금
                <input
                    type="radio"
                    value="phone"
                    v-model="radioPay"
                    name="payMethod"
                    style="width: auto; margin-left: 30px"
                    required
                />휴대폰 결제
            </p>
            <div v-if="radioPay === 'credit'">
                <select class="paySelectBox">
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
                <select class="paySelectBox">
                    <option value="">선택</option>
                    <option value="">신한은행</option>
                    <option value="">국민은행</option>
                    <option value="">우리은행</option>
                    <option value="">카카오뱅크</option>
                </select>
                <p>계좌번호 : <input class="payInput" type="text" /></p>
            </div>
            <div v-if="radioPay === 'phone'">
                <button style="width: 100px; padding: 10px 10px">
                    휴대폰 결제
                </button>
            </div>
        </div>
        <div class="payInfo">
            <h2>최종 결제 정보</h2>
            <table class="payInfoTable">
                <tr>
                    <td
                        class="payIf"
                        style="border-top: 1px solid rgb(197, 195, 195)"
                    >
                        상품금액
                    </td>
                    <td
                        class="payNum"
                        style="border-top: 1px solid rgb(197, 195, 195)"
                    >
                        {{ totalPrice }}원
                    </td>
                    <td rowspan="4" class="buyBtnTd">
                        <button class="buyBtn">결제하기</button>
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
                <tr style="border-top: 2px rgb(197, 195, 195) solid">
                    <td
                        class="payIf"
                        style="border-bottom: 1px solid rgb(197, 195, 195)"
                    >
                        결제 금액
                    </td>
                    <td
                        class="payNum"
                        style="border-bottom: 1px solid rgb(197, 195, 195)"
                    >
                        {{ finalPrice }}원
                    </td>
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
        deliverySelect,
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
            usable: 3548,
            open: false,
            orderProducts: [
                {
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
                    image: "product01.jpg",
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
            if (pt === '') {
                alert('숫자를 입력해주세요')
            } else if (pt > parseInt(this.usable) + parseInt(this.point)) {
                alert("포인트가 부족합니다.");
            } else {
                this.usable = this.usable - pt + parseInt(this.point);
                this.point = pt;
                this.sale = parseInt(this.coupon) + parseInt(this.point);
                this.finalPrice = this.totalPrice - this.sale + this.delivery;
            }
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
    padding: 20px 10px;
    background-color: #fafafa;
}
.orderProduct,
.coupon,
.delivery,
.payMethod {
    border-bottom: 1px solid rgb(197, 195, 195);
}
.orderProductTable {
    width: 100%;
    border-collapse: collapse;
    padding: 10px 10px;
    text-align: center;
    margin: 10px 0;
}
.orderProductTd {
    border: 1px rgb(197, 195, 195) solid;
    padding: 5px 5px;
}
.orderProductImg {
    height: 140px;
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
    border-left: 1px solid rgb(197, 195, 195);
}
.payNum {
    width: 25%;
    text-align: right;
    padding: 5px 20px;
    border-right: 1px solid rgb(197, 195, 195);
}
.couponTable {
    width: 850px;
    border-collapse: collapse;
    padding: 10px 30px;
}
td {
    padding: 3px 10px;
}
.buyBtnTd {
    width: 50%;
    border: 0px;
}
.buyBtn {
    width: 200px;
    font-size: 150%;
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
.payMethod {
    height: 170px;
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
.paySelectBox {
    min-width: 125px;
    font-size: 16px;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 4px;
}

#pointInput,
.shortInput,
.longInput,
.payInput {
    font-size: 16px;
}
.validate {
    margin-left: 10px;
    color: red;
}
</style>