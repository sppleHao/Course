// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import downMenu from './components/teacherMobile/myComponents/downMenu/downMenu.js'
import openAndCloseMenu from './components/teacherMobile/myComponents/openAndCloseMenu/openAndCloseMenu.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$axios = axios
Vue.use(downMenu)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(openAndCloseMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created(){
    axios.defaults.baseURL='http://119.29.24.35:8000//'
  },
  components: { App },
  template: '<App/>'
})
