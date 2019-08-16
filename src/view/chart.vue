<template>
    <div class="chart">
        <div class="chart_left">
            <ul>
                <li><label>姓名:</label><span>lisa</span></li>
                <li><label>现体重:</label><span>lisakg</span></li>
                <li><label>目标体重:</label><span>lisakg</span></li>
                <li><label>已减体重:</label><span>lisakg</span></li>
                <li><label>BMI:</label><span>22</span></li>
            </ul>
        </div>
        <div class="chart_right">
            <div id="myChart" ref="myChart"></div>    
        </div>
        
    </div>

</template>

<script>
import qs from 'qs'
// 引入axios数据请求
import Axios from 'axios';
import echarts from 'echarts';
export default {   
    name: 'Chart',
    data () {       
        return {
            msg: 'Welcome to Your Vue.js App',
        }
    },
    computed:{
       
    },
    
    mounted(){
        this.draw();
    },
    methods: {
       draw () {
             // 实例化echarts对象
             var myChart = echarts.init(this.$refs.myChart)
             
             // 绘制条形图
             myChart.setOption({
                 title: {
                     text: 'Echarts 入门实例',
                     top: 5,
                     left: 'center'
                 },
                 legend: {
                     data: ['衣服', '帽子', '裤子', '鞋子'],
                     top: 30
                 },
                 // X轴
                 xAxis: {
                     data: [
                         '一月', '二月', '三月', '四月'
                     ]
                 },
                 // Y轴
                 yAxis: {},
                 // 数据
                 series: [
                     {
                         name: '衣服',
                         type: 'bar',
                         data: [120, 100, 440, 320]
                     },
                     {
                         name: '帽子',
                         type: 'bar',
                         data: [200, 120, 240, 330]
                     },
                     {
                         name: 'bar',
                         type: 'line',
                         data: [120, 200, 240, 260, 300]
                     },
                     {
                         name: 'bar',
                         type: 'line',
                         data: [120, 200, 300, 140, 260]
                     }
                 ]                       
             })
         }
    },
}
</script>
<style scoped>
    .chart{
         position: relative;
         width: 100%;
         font-size: 14px;
    }
    .chart_left{
        position: absolute;
        left:0;
        top: 0;
        width: 200px;
        height: 100%;
    }
    .chart_left ul{
        padding: 30px 0 0 0;
        margin: 0;
        height: 100%;
        background: #cccccc;
    }
    .chart_left ul li{
        width: 100%;
        line-height: 40px;
        list-style: none;
    }
    .chart_left ul li label{
        display: inline-block;
        width: 80px;
        text-align: right;
    }
    .chart_left ul li span{
        display: inline-block;
        width: 80px;
        text-align: left;
        padding-left: 10px;
    }
    .chart_right{
        height: 100%;
        margin-left:200px;
    }
    #myChart{
        width: 100%;
        height: 450px;
    }
</style>