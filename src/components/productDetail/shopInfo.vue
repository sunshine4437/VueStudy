<template>
    <div class="shop-info">
        <div class="shop-infoBox">
            <div class="shop-title">판매자</div>
        </div>
        <div class="shop-bestItem">
            <div class="bestItemMore">
                이 판매자의 인기상품이에요
                <button>더 보기</button>
            </div>
            <hr />
            <div>
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
                <li>
                    <img class="bestPic" src="http://placehold.it/100x100" />
                </li>
            </div>
        </div>
    </div>
</template>

        <style>
.shop-info {
    width: 100%;
    height: 200px;
    border: 1px black solid;
    overflow: hidden;
    margin: 0 0 5px 0;
}
.shop-infoBox {
    float: left;
    position: relative;
    width: 19%;
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
    width: 80%;
    height: 198px;
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
</style>