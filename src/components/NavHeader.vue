<template>
    <div id="navheader">
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">任务中心</el-menu-item>
        <el-menu-item index="2" >表格展示</el-menu-item>
        <el-submenu index="3">
            <template slot="title">我的报表</template>
            <el-menu-item index="2-1">已完成</el-menu-item>
            <el-menu-item index="2-2">未完成</el-menu-item>
            <el-menu-item index="2-3">已删除</el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="4"><a href="javascript:;" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
        },
        methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
        }
    }
    // scoped 表示局部作用域
</script>
<style scoped>

</style>


