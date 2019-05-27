
import VueRouter from 'vue-router'
//import home from './components/Home/Home.vue'
//import about from './components/Home/About.vue'
import main from './components/Home/Main'
import user from './components/User/User'

const routes=[
    {path:"/", component:main},
    {path:"/user", component:user},
  ]

  var router=new VueRouter({
    routes
  })

  export default router;