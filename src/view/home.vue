<template>
    <div class="home">
        <v-header></v-header>  
        <input type="test" v-model="todo" @keydown="enterAdd($event)"/><button @click="doAdd()">增加</button>
        <br>
        <hr>
        <br>
        <div style="padding:0 100px;">
            <h2>进行中</h2>
            <template>
                <el-table
                :data="willDoList"
                style="width: 700px">
                    <el-table-column
                        label=""
                        width="80">
                        <template slot-scope="scope">
                            <el-checkbox :checked="scope.row.liststatic == 0 ? false: true" :disabled="scope.row.liststatic == 0 ? false: true" @change="saveList(scope.row)"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="名称"
                        width="500">
                        <template slot-scope="scope">
                            <div>{{scope.row.listname}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作" width="100">
                        <template slot-scope="{row,$index}">
                            <el-button type="danger" size="mini"  @click="removedata($index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <h2>已完成</h2>
            <template>
                <el-table
                :data="haveDoList"
                style="width: 700px">
                    <el-table-column
                        label=""
                        width="80">
                        <template slot-scope="scope">
                            <el-checkbox :checked="scope.row.liststatic == 0 ? false: true" :disabled="scope.row.liststatic == 0 ? false: true" @change="saveList(scope.row)"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="名称"
                        width="500">
                        <template slot-scope="scope">
                            <div>{{scope.row.listname}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作" width="100">
                        <template slot-scope="{row,$index}">
                            <el-button type="danger" size="mini"  @click="removedata($index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <!-- <ul>
                <li v-for="(item, index) in haveDoList" v-bind:key="index">
                    <input type="checkbox" :checked="item.liststatic == 0 ? false: true" :disabled="item.liststatic == 0 ? false: true"/>{{item.listname}} -------<button @click="removedata(index)">删除</button>
                </li>
            </ul> -->
        </div>
        
        <v-footer></v-footer>
    </div>

</template>

<script>
import { constants } from 'fs';
import storage from '../model/storage.js';
import navheader from '../components/NavHeader.vue';
import navfooter from '../components/NavFooter.vue';
// 引入axios数据请求
import Axios from 'axios';
export default {   
    name: 'Home',
    data () {       
        return {
            msg: 'Welcome to Your Vue.js App',
            todo:"",
            list:[
                {
                    title:'第一天需要完成的事情',
                    checked:true
                },
                {
                    title:'第二天需要完成的事情',
                    checked:false
                }
            ],
            dataList:[]
        }
    },
    components:{
        'v-header':navheader,
        'v-footer':navfooter,
    },
    computed:{
        willDoList: function () {
            return this.dataList.filter(function (item) {
                if(item.liststatic === 0){
                    return item
                }
            })
        },
        haveDoList: function () {
            return this.dataList.filter(function (item) {
                if(item.liststatic === 1){
                    return item
                }
            })
        }
    },
    methods: {
        doAdd(){
            this.dataList.push({
                title:this.todo,
                checked:false
            });
            this.todo = '';
            // localStorage.setItem('list',JSON.stringify(this.list));
            storage.set('list',this.list);
        },
        // addDataBtn:function(){
        //     var _this=this;
        //     Axios.get('/api').then(function(res){
        //        if(res.data.code == 1){
        //            _this.dataList=res.data.data;
        //        }
        //     }).catch(function(err){
        //         console.log(err)
        //     })
        // },
        removedata(key){
            this.dataList.splice(key,1);
            // localStorage.setItem('list',JSON.stringify(this.list));
            // storage.set('list',this.list);
        },
        enterAdd(e){
            if(e.keyCode == 13){
                this.doAdd();
            }
        },
        saveList:function (item){
            console.log(item);
            item.liststatic = item.liststatic==0?1:0;
        //    localStorage.setItem('list',JSON.stringify(this.list)); 
        // storage.set('list',this.list);
        }
    },
    mounted(){
        // JSON.parse(localStorage.getItem('list'))
        var _this=this;
        Axios.get('/api').then(function(res){
            console.log(res);
            if(res.data.code == 1){
                _this.dataList=res.data.data;
                console.log(_this.dataList);
            }
        }).catch(function(err){
            console.log(err)
        })
    }
}
</script>
<style scoped>
   .home{
       text-align: left;
   }
</style>