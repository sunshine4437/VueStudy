<template>
<div class="basket">
    <div class="main">
        <div class="title">
            <h2>장바구니</h2>
        </div>
        <div class="selectDiv">
            <div class="allSelectDiv">
                <div><input type="checkbox"></div>
                <div>전체선택</div>
            </div>
            <div>선택삭제</div>
        </div>
        <div>
            <div v-for="n in 5" :key="n">
                <ul class="list">
                    <li class="list1">
                        <div><input type="checkbox"></div>
                    </li>
                    <li class="list2">
                        <div class="listImage"><img src="http://placehold.it/125X125/" alt=""></div>
                    </li>
                    <li class="list3">
                        <div>상품명</div>
                        <div>옵션변경</div>
                    </li>
                    <li class="list4">
                        <div>
                            가격
                        </div>
                    </li>
                    <li class="list5">
                        <div>배송정보</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="inform">
            <div>
                <div>결제예정금액</div>
            </div>
            <div>
                <div>상품금액</div>
                <div class="price">67,400원</div>
            </div>
            <div>
                <div>배송비(선결제)</div>
                <div class="price">2,500원</div>
            </div>
            <div>
                <div>할인금액</div>
                <div class="price" style="color:red;">-4,920원</div>
            </div>
            <div style="color:red; ">
                <div>합계</div>
                <div class="price" style="font-size:25px;">65,610원</div>
            </div>
        </div>
        <div class="orderBtn">
            <router-link class="signUpLink" v-bind:to="'/payment'"> <button>주문</button></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.basket {
    display: flex;
}

.main {
    display: inline-block;
    width: 85%;
    border: 1px solid black;
}

.selectDiv {
    display: flex;
    width: 100%;
}

.selectDiv >div {
    width: 50%;
    border: 1px solid black;

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
}

.list li {
    border: 1px solid black;
    position: relative;
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

.list3 {
    width: 15%;
}

.list4 {
    width: 15%;
}

.list5 {
    width: 70%;
}

.right {
    position: relative;
    display: inline-block;
    width: 20%;
    border: 1px solid black;
    padding: 10px;
    margin-left:10px;
}

.inform {
    border: 1px solid black;
    position: absolute;
    width: 90%;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
}

.inform>div {
    display: flex;
    padding: 20px 5px;

    border-bottom: 1px solid black;
}

.price {
    margin-left: auto;
}

.orderBtn {
    position: absolute;
    bottom: 10px;
    width: 90%;
    text-align: center;
}


</style>
