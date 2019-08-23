import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/home';
import Chart from '@/view/chart';
import Release from '@/view/release';
import Collection from '@/view/collection';
import Delect from '@/view/delect';
import Newpost from '@/view/newpost';

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/center',
      name: 'Newpost',
      component: Newpost,
      //引子路由
      children:[
        {
          path: '/center/addnewpost',
          name: 'Newpost',
          component: Newpost
        },
        {
          path: '/center/release',
          name: 'release',
          component: Release
        },
        {
          path: '/center/collection',
          name: 'collection',
          component: Collection
        },
        {
          path: '/center/delect',
          name: 'delect',
          component: Delect
        }
      ]
    },
    
  ]
})
