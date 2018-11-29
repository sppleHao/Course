import Vue from 'vue'
import Router from 'vue-router'
import teacherPCLogin from '@/components/teacherPC/login'
import teacherMobileLogin from '@/components/teacherMobile/loginAndActivateAndHome/login'
import teacherMobileFindPassword from '@/components/teacherMobile/accountAndSettings/findPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Mlogin',
      name: 'teacherMobileLogin',
      component: teacherMobileLogin
    },
    {
      path: '/accountAndSettings/MfindPassword',
      name: 'teacherMobileFindPassword',
      component: teacherMobileFindPassword
    }
  ]
})
