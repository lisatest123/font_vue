<template>
    <div class="home">
        <v-header></v-header>  
        <input type="test" v-model="todo" @keydown="enterAdd($event)"/><button @click="doAdd()">增加</button>
        <br>
        <hr>
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(item, index) in willDoList" v-bind:key="index">
                <input type="checkbox" v-model="item.checked" :disabled="item.checked" @change="saveList()"/>{{item.title}} -------<button @click="removedata(index)">删除</button>
            </li>
        </ul>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item, index) in haveDoList" v-bind:key="index">
                <input type="checkbox" v-model="item.checked" :disabled="item.checked"/>{{item.title}} -------<button @click="removedata(index)">删除</button>
            </li>
        </ul>
        <v-footer></v-footer>
    </div>

</template>

<script>
import { constants } from 'fs';
import storage from '../model/storage.js';
import navheader from '../components/NavHeader.vue';
import navfooter from '../components/NavFooter.vue';
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
            ]
        }
    },
    components:{
        'v-header':navheader,
        'v-footer':navfooter,
    },
    computed:{
        willDoList: function () {
            return this.list.filter(function (item) {
                if(item.checked === false){
                    return item
                }
            })
        },
        haveDoList: function () {
            return this.list.filter(function (item) {
                if(item.checked === true){
                    return item
                }
            })
        }
    },
    methods: {
        doAdd(){
            this.list.push({
                title:this.todo,
                checked:false
            });
            this.todo = '';
            // localStorage.setItem('list',JSON.stringify(this.list));
            storage.set('list',this.list);
        },
        removedata(key){
            this.list.splice(key,1);
            // localStorage.setItem('list',JSON.stringify(this.list));
            storage.set('list',this.list);
        },
        enterAdd(e){
            if(e.keyCode == 13){
                this.doAdd();
            }
        },
        saveList:function (){
        //    localStorage.setItem('list',JSON.stringify(this.list)); 
        storage.set('list',this.list);
        }
    },
    mounted(){
        // JSON.parse(localStorage.getItem('list'))
        var list = storage.get('list');
        if(list){
            this.list = list;
        }
    }
}
</script>
<style scoped>
   .home{
       text-align: left;
   }
</style>