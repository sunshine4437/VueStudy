<template>
<div class="main">
    <div class="banner">
        <!-- <img src="http://placehold.it/1920x500" alt="banner" style="cursor: pointer"/> -->
        <!-- <img src="https://picsum.photos/1900/00" alt="banner" style="cursor: pointer"/> -->
        <bannerImage />
    </div>
    <div>
    </div>
    <div>
        <h2 style="border: black solid 1px">text</h2>
        <div class="imageArea" v-for="n in length" v-bind:key="n">
            <ul>
                <li class="card_image" v-for='j in 4' :key="j">
                    <div>
                        <!-- <a v-bind:href="images[0].link"><img :src="getImage(images[0].image)" alt="productImage"></a> -->
                        <a v-bind:href="images[(j-1)+(n-1)*4].link"><img :src="require(`@/components/mainPage/productTableImage/${images[(j-1)+(n-1)*4].image}`)" alt="productImage"></a>
                    </div>
                    <a v-bind:href="images[(j-1)+(n-1)*4].link">
                        <p style="border: 1px solid black">{{images[(j-1)+(n-1)*4].name}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="moreImageDiv">
            <button v-on:click="moreImage" class="moreImageBtn">더 보기</button>
        </div>
    </div>
</div>
</template>

<script>
import imageJson from './image.json'
import bannerImage from '@/components/mainPage/mainPageBanner.vue'
export default {
    data() {
        return {
            length: 1,
            imageLength: imageJson.length / 4,
            images: imageJson,

        }
    },
    components: {
        bannerImage,
    },
    methods: {
        moreImage() {
            // console.log(this.length, this.imageLength);
            if (this.length < this.imageLength)
                return this.length++;
            else
                return this.length;

        },
    },
}
</script>

<style scoped>
.main {
    border: 1px solid black;
}

.banner img {
    max-width: 100%;
    height: auto;
}

h2 {
    text-align: left;
    margin: 0 0 0 10px;
    padding: 0;
    margin-bottom: 20px;
    font-size: 24px;
}

ul {
    list-style: none;
    display: flex;
    margin: 10;
    padding: 0;
}

.card_image {
    margin-left: auto;
    margin-right: auto;
}

.card_image div {
    width: 300px;
    height: 300px;
    border: black 1px solid;
    overflow: hidden;
    margin: 0 auto;
}

.card_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card_image a {
    text-align: center;
}

.card_image a:link {
    color: black;
    text-decoration: none;
}

.card_image a:hover {
    color: navy;
    text-decoration: none;
}

.card_image a:visited {
    color: black;
    text-decoration: none;
}

.card_image a p {
    font-family: '함초롱돋움';
    font-weight: bold;
    font-size: 20px;
}

.moreImageDiv {
    text-align: center;
}

button {
    background-color: #0051ba;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
}
/*  */

</style>
