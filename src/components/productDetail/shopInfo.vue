<template>
<div class="shop-info">
    <div class="shop-infoBox">
        <div class="shop-title"><h2>NEPA</h2></div>
    </div>
    <div class="shop-bestItem">
        <div class="bestItemMore">
            <span>이 판매자의 인기상품이에요</span>
            <button class="showMore">더 보기</button>
        </div>
        <hr />
        <div>
            <li>
                <img class="bestPic" style="border-radius: 30px" src="http://placehold.it/135x135" />
            </li>
            <li>
                <img class="bestPic" src="http://placehold.it/100x100" />
            </li>
            <li>
                <img class="bestPic" src="http://placehold.it/100x100" />
            </li>
            <li>
                <img class="bestPic" src="http://placehold.it/100x100" />
            </li>
            <li>
                <img class="bestPic" src="http://placehold.it/100x100" />
            </li>
            <li>
                <img class="bestPic" src="http://placehold.it/100x100" />
            </li>
        </div>
    </div>
</div>
</template>

       
<style scoped>
.shop-info {
    width: 100%;
    height: 210px;
    border: 1px black solid;
    overflow: hidden;
    margin: 0 0 5px 0;
}

.shop-infoBox {
    float: left;
    position: relative;
    width: 16%;
    height: 100%;
    padding: auto;
}

.shop-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 150%;
}

.shop-bestItem {
    float: right;
    width: 83%;
    height: 100%;
    padding: 0px 0px;
    border: 1px black solid;
}

.bestItemMore {
    padding: 10px 10px 5px 10px;
}

.bestPic {
    height: 135px;
    padding: 0px 20px 0 20px;
}

li {
    float: left;
    list-style-type: none;
}

.showMore {
    height: 30px;
    padding: 5px 10px;
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
    font-size: 15px;
    cursor: pointer;
    margin: 0px 1px;
}
</style>
