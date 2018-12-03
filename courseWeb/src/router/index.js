import Vue from 'vue'
import Router from 'vue-router'
import teacherPCLogin from '@/components/teacherPC/login'
import teacherMobileLogin from '@/components/teacherMobile/loginAndActivateAndHome/login'
import teacherMobileFindPassword from '@/components/teacherMobile/accountAndSettings/findPassword'
import teacherMobileProcessingSeminarHome from '@/components/teacherMobile/seminar/processingSeminarHome'
import teacherMobilePauseSeminar from '@/components/teacherMobile/seminar/pauseSeminar'
import teacherMobileProcessingSeminar from '@/components/teacherMobile/seminar/processingSeminar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/MTlogin',
      name: 'teacherMobileLogin',
      component: teacherMobileLogin
    },
    {
      path: '/accountAndSettings/MTfindPassword',
      name: 'teacherMobileFindPassword',
      component: teacherMobileFindPassword
    },
    {
      path: '/seminar/MTprocessingSeminarHome',
      name: 'teacherMobileProcessingSeminarHome',
      component: teacherMobileProcessingSeminarHome
    },
    {
      path: '/seminar/MTpauseSeminar',
      name: 'teacherMobilePauseSeminar',
      component: teacherMobilePauseSeminar
    },
    {
      path: '/seminar/MTprocessingSeminar/:id',
      name: 'teacherMobileProcessingSeminar',
      component: teacherMobileProcessingSeminar
    },



  ]
})
