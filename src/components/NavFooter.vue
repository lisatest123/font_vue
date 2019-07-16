<template>
    <div id="footer">
        <h2>根部组件-----{{msg}}</h2>
        <ul>
            <li>123</li>
            <li>123</li>
        </ul>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            msg:"我是底部组件"
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