<template>
    <div class="home">
        <div class="swiper-container" id="home_sw">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="home_swiper_img">
                        <img src="../assets/img/img1.jpg"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="home_swiper_img">
                        <img src="../assets/img/img2.jpg"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="home_swiper_img">
                        <img src="../assets/img/img3.jpg"/>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
             <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!-- <div >
           <div>
                <div class="home_list_top">
                    <span>减肥食谱</span>
                </div> 
           </div>
           <div>
               <div class="home_list_top">
                    <span>减肥心得</span>
                </div> 
           </div>
           <div>
               <div class="home_list_top">
                    <span>打卡记录</span>
                </div> 
           </div>
        </div> -->
        <div >
           <div>
                <div class="home_list_top">
                    <span>1111</span>
                    <span>
                        <a>查看更多<i class="el-icon-d-arrow-right"></i></a>
                    </span>
                </div> 
                <div class="home_list_box">
                    <ul>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
           <div>
               <div class="home_list_top">
                    <span>2222</span>
                    <span>
                        <a>查看更多<i class="el-icon-d-arrow-right"></i></a>
                    </span>
                </div>
                <div class="home_list_box">
                    <ul>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> 
           </div>
           <div>
               <div class="home_list_top">
                    <span>3333</span>
                    <span>
                        <a>查看更多<i class="el-icon-d-arrow-right"></i></a>
                    </span>
                </div> 
                <div class="home_list_box">
                    <ul>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="home_list_title">
                                <a href="">大标题</a>
                            </div>
                            <div class="home_list_content">
                                <p>1222222222222222222</p>
                            </div>
                            <div class="home_list_bottom">
                                <div class="list_bottom_left">
                                    <span>作者</span>
                                    <span>3天前</span>
                                </div>
                                <div class="list_bottom_right">
                                    <span>阅读数量:1</span>
                                    <span>评论数量:1</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
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
        var mySwiper = new Swiper ('#home_sw', {
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // renderBullet: function (index, className) {
                //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        })
    }
}
</script>
<style scoped>
.swiper-slide {
    width: 100%;
}
.home_swiper_img img{
    width: 100%;
}
</style>