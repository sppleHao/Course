import Vue from 'vue'
import Router from 'vue-router'
import teacherPCLogin from '@/components/teacherPC/login'
import teacherMobileLogin from '@/components/teacherMobile/loginAndActivateAndHome/login'
import teacherMobileFindPassword from '@/components/teacherMobile/accountAndSettings/findPassword'
import teacherMobileProcessingSeminarHome from '@/components/teacherMobile/seminar/processingSeminarHome'
import teacherMobilePauseSeminar from '@/components/teacherMobile/seminar/pauseSeminar'
import teacherMobileProcessingSeminar from '@/components/teacherMobile/seminar/processingSeminar'
import teacherMobileProfile from '@/components/teacherMobile/loginAndActivateAndHome/profile'
import teacherMobileSeminar from '@/components/teacherMobile/seminar/seminar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //PC端路由
    //教师端
    {
      //登陆
      path: '/MTlogin',
      name: 'teacherMobileLogin',
      component: teacherMobileLogin
    },
    {
      //找回密码
      path: '/accountAndSettings/MTfindPassword',
      name: 'teacherMobileFindPassword',
      component: teacherMobileFindPassword
    },
    {
      //进行中讨论课首页
      path: '/seminar/MTprocessingSeminarHome:id',
      name: 'teacherMobileProcessingSeminarHome',
      component: teacherMobileProcessingSeminarHome
    },
    {
      //暂停讨论课
      path: '/seminar/MTpauseSeminar',
      name: 'teacherMobilePauseSeminar',
      component: teacherMobilePauseSeminar
    },
    {
      //讨论课进行中
      path: '/seminar/MTprocessingSeminar/:id',
      name: 'teacherMobileProcessingSeminar',
      component: teacherMobileProcessingSeminar
    },
    {
      //个人首页
      path: '/users/MTprofile/:name',
      name: 'teacherMobileProfile',
      component: teacherMobileProfile
    },
    {
      //讨论课首页
      path:'/seminar/MTseminarHome/:id',
      name:'teacherMobileSeminar',
      component:teacherMobileSeminar
    },
    //学生端


    //PC端路由
    //教师端
    {
      path:'/PCTlogin',
      name:'teacherPCLogin',
      component:teacherPCLogin
    },
    //学生端

  ]
})
