<template>
    <div class="newpost">
        <div>
            <el-form  class="demo-form-inline">
                <el-form-item label="文章分类">
                    <el-select v-model="params.articleStyle"  placeholder="请选择文章分类">
                        <el-option label="11111" value="1"></el-option>
                        <el-option label="222222" value="2"></el-option>
                        <el-option label="33333" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div> 
        <div>
            <editor :content="params.articleCont"></editor>
        </div>
       
    </div>

</template>

<script>
// import { constants } from 'fs';
// import storage from '../model/storage.js';
// import qs from 'qs'
// // 引入axios数据请求
// import Axios from 'axios';
import editor from '../components/editor'
export default {   
    name: 'Newpost',
    data () {       
        return {
           params:{
               articleStyle:'',
               articleCont:''
           }
        }
    },
    computed:{
    },
    methods: {
    },
    mounted(){

    },
    components:{
        editor:editor
    }
}
</script>
<style scoped>
</style>