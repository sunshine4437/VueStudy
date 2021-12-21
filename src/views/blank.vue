<template>
<div>
    <div class="container">
        <h1 class="title">빈 페이지</h1>
        <router-link v-bind:to="'/'">
            <h1 class="content">돌아가기</h1>
        </router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: block;
    height: 900px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>
