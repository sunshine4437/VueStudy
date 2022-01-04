<template>
<div class="basket">
    <div class="main">
        <div class="title">
            <h2>장바구니</h2>
        </div>
        <div class="selectDiv">
            <div class="allSelectDiv">
                <div><input type="checkbox" @click="allCheck()" id="allCheckedList"></div>
                <div>전체선택 </div>
            </div>
            <div @click="removeList()">선택삭제 </div>
        </div>
        <div>
            <div class="listDiv" v-for="(item, idx) in getBasketList" :key="idx">
                <ul class="list">
                    <li class="list1">
                        <div><input class="checkedList" type="checkbox" @click="sumPrice()"></div>
                    </li>
                    <li class="list2">
                        <div class="listImage">
                            <img :src="require(`@/components/productDetail/image/${item.img}`)" alt="dfd" style="width:100px; height:100px;">
                        </div>
                    </li>
                    <li class="list3">
                        <div>
                            {{ item.seller}}
                            <p>{{item.title}}</p>
                            <p>{{item.name}}</p>
                            {{ item.amount}}
                        </div>
                        <div>
                            <!-- <p><input type="number" class="option" min="0" max="100">{{item.option}}</p> -->
                            {{item.size}}
                        </div>
                    </li>
                    <li class="list4">
                        <div>
                            <p class="rate">{{item.price}}원</p>

                        </div>
                    </li>
                    <li class="list5">
                        <div>
                            {{ item.delivery_fee }}
                            {{ item.delivery_low }}

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="inform">
            <div class="line">
                <label>결제예정금액</label>
            </div>
            <div>
                <label>상품금액</label>
                <label class="price">67,400원</label>
            </div>
            <div>
                <label>배송비(선결제)</label>
                <label class="price">2,500원</label>
            </div>
            <div>
                <label>할인금액</label>
                <label class="price" style="color:red;">-4,920원</label>
            </div>
            <div style="color:red; ">
                <label>합계</label>
                <label class="price" style="font-size:25px;" id="totalSum">0원</label>
            </div>
        </div>
        <div class="orderBtn">
            <router-link class="signUpLink" v-bind:to="'/payment'"> <button>주문</button></router-link>
        </div>

    </div>
</div>
</template>

<script>
import {
    createNamespacedHelpers
} from "vuex";
const basketList = createNamespacedHelpers("basketList");
export default {
    data() {
        return {
            sum: 0,
            // items: [{
            //         image: "1.jpg",
            //         name: "[뉴발란스] 운동화 MW880GR4 NBPQAS102G",
            //         option: "옵션변경",
            //         price: "125000",
            //         rate: "125,000원",
            //         info: "무료배송",
            //     },
            //     {
            //         image: "2.jpg",
            //         name: "나이키 에어맥스97 트리플블랙",
            //         option: "옵션변경",
            //         price: "173000",
            //         rate: "10% 163,000원",
            //         info: "무료배송",
            //     }, {
            //         image: "3.jpg",
            //         name: "[네파]21년 신상 남성용 벨키자 미드 구스 다운자켓(7H7026)",
            //         option: "옵션변경",
            //         price: "129000",
            //         rate: "24% 98,040원",
            //         info: "무료배송",
            //     }, {
            //         image: "4.jpg",
            //         name: "LG Gram 17Z90N 노트북 17인치 IPS 초경량, (2560 x 1600), 10세대 인텔 코어 i7, 8GB RAM, 512GB SSD, 윈도우 10 홈, 17시간 배터리",
            //         option: "옵션변경",
            //         price: "1382490",
            //         rate: "14% 1,175,120원",
            //         info: "155,360원",
            //         fee: "예상 통관대행료"
            //     }, {
            //         image: "5.jpg",
            //         name: "벌레퇴치 영국방역회사인정 초파리 페로몬 삼각트랩(1개입)",
            //         option: "옵션변경",
            //         price: "1980",
            //         rate: "1980",
            //         info: "2500",
            //         fee: "배송비",
            //     },
            // ]
            // items: this.getBasketList,
        }
    },
    methods: {
        sumPrice() {
            let checkedList = document.getElementsByClassName("checkedList");
            let totalSum = document.getElementById("totalSum");
            this.sum = 0;
            for (let i = 0; i < checkedList.length; i++) {
                if (checkedList[i].checked == true) {
                    this.sum += Number(this.getBasketList[i + 1].price);
                }
            }

            totalSum.textContent = this.sum + "원";
        },
        AddComma(num) {
            var regexp = /\B(?=(\d{3})+(?!\d))/g;
            return num.toString().replace(regexp, ',');
        },
        allCheck() {
            let allCheck = document.getElementById("allCheckedList");
            let checkedList = document.getElementsByClassName("checkedList");
            if (allCheck.checked == true)
                for (let i = 0; i < checkedList.length; i++) {
                    checkedList[i].checked = true;
                }
            else {
                for (let i = 0; i < checkedList.length; i++) {
                    checkedList[i].checked = false;
                }
            }

        },
        removeList() {
            let checkedList = document.getElementsByClassName("checkedList");
            for (let i = 0; i < checkedList.length; i++) {
                if (checkedList[i].checked == true) {
                    this.delList(i);
                    checkedList[i].checked = false;
                }
            }

        },
        ...basketList.mapMutations(["delList"]),
    },
    computed: {
        ...basketList.mapGetters(["getBasketList"]),
    }
}
</script>

<style scoped>
.basket {
    display: flex;
}

.main {
    display: inline-block;
    width: 85%;
    /* border: 1px solid black; */
}

.selectDiv {
    display: flex;
    width: 100%;
}

.selectDiv>div {
    width: 50%;
    /* border: 1px solid black; */

}

.allSelectDiv {
    display: flex;
}

.list {
    list-style: none;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fafafa;
    border-radius: 4px;
}

.list3 p {
    margin: 10px;
    padding: 0px;
}

.list3 .option {
    margin-right: 10px;
}

.list4 .price {
    font-size: 16px;
    margin: 10px 0;
    text-decoration: line-through;
}

.list4 .rate {
    font-weight: bold;
}

.list :nth-child(3) {
    width: 50%;
}

.list :nth-child(4) {
    width: 20%;

}

.list :nth-child(5) {
    width: 20%;
}

.list li {
    /* border: 1px solid black; */
    border-left: 1px solid rgb(197, 195, 195);
    position: relative;

    padding: 5px;
}

/* .listImage{
     width: 200px;
    height: 200px;
    overflow: hidden;
    margin: 0 auto;
} */
.list1 {
    width: 30px;
    margin: 0;
    padding: 0;
}

.list1 input {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
}

/* .list3 {
    width: 15%;
}

.list4 {
    width: 15%;
}

.list5 {
    width: 70%;
} */

.right {
    position: relative;
    display: inline-block;
    width: 20%;
    /* border: 1px solid black; */
    padding: 10px;
    margin-left: 10px;
    min-height: 600px;
}

.inform {
    /* border: 1px solid black; */
    width: 90%;
    background-color: #fafafa;
    border-radius: 4px;
}

.inform .line {
    border-bottom: 1px solid rgb(197, 195, 195);
}

.inform>div {
    display: flex;
    padding: 20px 5px;

}

.price {
    margin-left: auto;
}

.orderBtn {
    margin-top: 20px;
    width: 90%;
    text-align: center;
}

.productImage {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

h2 {
    background-color: #fafafa;
}
</style>
