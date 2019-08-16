<template>
    <div class="home">
        <div class="swiper-container" id="home_sw">
            <div class="swiper-wrapper">
            <div class="swiper-slide">11111</div>
            <div class="swiper-slide">222222</div>
            <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>

</template>

<script>
// import { constants } from 'fs';
// import storage from '../model/storage.js';
// import qs from 'qs'
// // 引入axios数据请求
// import Axios from 'axios';
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
export default {   
    name: 'Home',
    data () {       
        return {
           
        }
    },
    computed:{
    },
    methods: {
    },
    mounted(){
        new Swiper ('#home_sw', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
        })
    }
}
</script>
<style scoped>
</style>