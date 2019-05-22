
import VueRouter from 'vue-router'
//import home from './components/Home/Home.vue'
//import about from './components/Home/About.vue'
import main from './components/Home/Main'

const routes=[
    {path:"/", component:main},
   
  ]

  var router=new VueRouter({
    routes
  })

  export default router;