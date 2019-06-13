<template>
  <div id="app">
     
    <el-container>
  <el-header>
<MyHeader></MyHeader>
  </el-header>
    <el-container >
  <el-main>
     <router-view></router-view>   
  </el-main>
    </el-container>
  <el-footer>Footer</el-footer>
</el-container>
    
    
  </div>
</template>



<script>
import MyHeader from './components/Home/MyHeader.vue'
export default {
  name: 'app',
  components: {
    MyHeader
  },  
}

</script>

<style>
html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
 
    text-align: center;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
