<template>
    <div id="navheader">
        <h1>{{msg}}</h1>
        <button @click="run()">点击事件</button>
        <ul>
            <li>首页</li>
            <li>已完成</li>
            <li>未完成</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"我是一个头部"
        }
    },
    methods:{
        run(){
            console.log('123');
        }
    }
}
// scoped 表示局部作用域
</script>
<style scoped>

</style>


