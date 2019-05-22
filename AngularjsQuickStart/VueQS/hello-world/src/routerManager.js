
import VueRouter from 'vue-router'
import home from './components/Home/Home.vue'
import about from './components/Home/About.vue'

const routes=[
    {path:"/home", component:home},
    {path:"/about", component:about}
  ]

  var router=new VueRouter({
    routes
  })

  export default router;