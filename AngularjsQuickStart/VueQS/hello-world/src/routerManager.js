
import VueRouter from 'vue-router'
import main from './components/Home/Main'
import Login from './components/Login'
import user from './components/User/User'

const routes=[
    {path:"/", component:Login},
    {
      path: '/main', component: main,
      children: [      
        { path: '', component: user },

      ]
    }
  ]

  var router=new VueRouter({
    routes
  })

  export default router;

 