import Vue from 'vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import App from './App.vue'
require('./assets/product.css')
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
import router from "./routerManager.js" 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

