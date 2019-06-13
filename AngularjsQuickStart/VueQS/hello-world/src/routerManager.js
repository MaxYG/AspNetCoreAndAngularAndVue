
import VueRouter from 'vue-router'
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