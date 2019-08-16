import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/home';
import Chart from '@/view/chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    }
  ]
})
