<template>
  <div id="app">
    <leftNav></leftNav> 
    <i class="sss iconfont icon-chengduyinhang"></i>
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
.sss{
  font-size: 50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float: left;
  width: 95%;
  height: 100%;
  background-color: #eff2f7;
  overflow: hidden;
}
</style>
