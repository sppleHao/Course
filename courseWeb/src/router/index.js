import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'

import StudentMobileLogin from '@/pages/studentMobile/login/Login'
import StudentMobileActive from '@/pages/studentMobile/login/Active'
import StudentMobileFindBackPassword from '@/pages/studentMobile/login/FindBackPassword'

import StudentMobileAccountIndex from '@/pages/studentMobile/account/AccountIndex'

import StudentMobileCourseIndex from '@/pages/studentMobile/course/CourseIndex'

import StudentMobileSeminarSelect from '@/pages/studentMobile/seminar/Seminarselect'
import StudentMobileSeminarIndex from '@/pages/studentMobile/seminar/SeminarIndex'
import StudentMobileSeminarOperations from '@/pages/studentMobile/seminar/operation/Operations'
import StudentMobileSeminarPresenting from '@/pages/studentMobile/seminar/operation/Presenting'

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
      //忘记密码和修改密码界面
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
      component:StudentMobileSeminarSelect,
      props:true
    },
    {
      //讨论课首页
      path:'/studentMobile/course/:courseId/class/:classId/seminar/:seminarId',
      name:'StudentMobileSeminarIndex',
      component:StudentMobileSeminarIndex,
      props:true
    },
    {
      //讨论课操作（查看成绩、下载ppt、下载书面报告、报名、取消报名）
      path:'/studentMobile/course/:courseId/class/:classId/seminar/:seminarId/operation/:operation',
      name:'StudentMobileSeminarOperations',
      component:StudentMobileSeminarOperations,
      props:true
    },
    {
      //讨论课展示
      path:'/studentMobile/course/:courseId/class/:classId/seminar/:seminarId/presenting',
      name:'StudentMobileSeminarPresenting',
      component:StudentMobileSeminarPresenting,
      props:true
    }
  ]
})
