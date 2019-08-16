<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import navheader from './components/NavHeader.vue';
import navfooter from './components/NavFooter.vue';
export default {
  name: 'App',
  components:{
        'v-header':navheader,
        'v-footer':navfooter,
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
  position: relative;
}
</style>
