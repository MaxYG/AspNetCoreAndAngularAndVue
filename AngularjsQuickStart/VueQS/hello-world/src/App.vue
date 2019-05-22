<template>
  <div id="app">
    <h1>Hello App!</h1>
   
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'


export default {
  //name: 'app',
  // components: {
  //   HelloWorld
  // }

  // computed: {
  //   username () {      
  //     return this.$route.params.username
  //   }
  // },
  // methods: {
  //   goBack () {
  //     window.history.length > 1
  //       ? this.$router.go(-1)
  //       : this.$router.push('/')
  //   }
  // }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
