import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'

import StudentMobileLogin from '@/pages/studentMobile/login/Login'
import StudentMobileActive from '@/pages/studentMobile/login/Active'
import StudentMobileFindBackPassword from '@/pages/studentMobile/login/FindBackPassword'

import StudentMobileAccountIndex from '@/pages/studentMobile/account/AccountIndex'

import StudentMobileCourseIndex from '@/pages/studentMobile/course/CourseIndex'

import SeminarSelect from '@/pages/studentMobile/seminar/Seminarselect'
import SeminarIndex from '@/pages/studentMobile/seminar/SeminarIndex'
import SeminarSignUp from '@/pages/studentMobile/seminar/operation/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeacherPCLogin',
      component: TeacherPCLogin
    },
    {
      //登陆界面
      path: '/studentMobile/login',
      name:'StudentMobileLogin',
      component:StudentMobileLogin
    },
    {
      //激活界面
      path: '/studentMobile/active',
      name:'StudentMobileActive',
      component:StudentMobileActive
    },
    {
      //忘记密码界面
      path:'/studentMobile/findPassword',
      name:'StudentMobileFindBackPassword',
      component:StudentMobileFindBackPassword,
      props:true
    },
    {
      //账户界面
      path:'/studentMobile/account',
      name:'StudentMobileAccountIndex',
      component:StudentMobileAccountIndex,
      alias:'/studentMobile/course',
    },
    {
      //课程选择界面
      path:'/studentMobile/course/:courseId',
      name:'StudentMobileCourseSelect',
      component:StudentMobileCourseIndex,
      props:true
    },
    {
      //讨论课选择界面
      path:'/studentMobile/course/:courseId/class/:classId/seminar',
      name:'StudentMobileSeminarSelect',
      component:SeminarSelect,
      props:true
    },
    {
      //讨论课首页
      path:'/studentMobile/course/:courseId/class/:classId/seminar/:seminarId',
      name:'StudentMobileSeminarIndex',
      component:SeminarIndex,
      props:true
    },
    {
      //讨论课报名
      path:'/studentMobile/course/:courseId/class/:classId/seminar/:seminarId/signUp',
      name:'StudentMobileSeminarSignUp',
      component:SeminarSignUp,
      props:true
    }
  ]
})
