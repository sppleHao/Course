import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'

import StudentMobileLogin from '@/pages/studentMobile/login/Login'
import StudentMobileActive from '@/pages/studentMobile/login/Active'
import StudentMobileFindBackPassword from '@/pages/studentMobile/login/FindBackPassword'

import SeminarCourseSelect from '@/pages/studentMobile/seminar/Courseselect'
import SeminarSelect from '@/pages/studentMobile/seminar/Seminarselect'
import SeminarIndex from '@/pages/studentMobile/seminar/SeminarIndex'
import SeminarIndexBeforeDDL from '@/components/studentMobile/SeminarBeforeDDL'
import SeminarIndexProcessing from '@/components/studentMobile/SeminarProcessing'
import SeminarIndexSignUp from '@/components/studentMobile/SeminarSignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeacherPCLogin',
      component: TeacherPCLogin
    },
    {
      path: '/studentMobile/login',
      component:StudentMobileLogin
    },
    {
      path: '/studentMobile/active',
      component:StudentMobileActive
    },
    {
      path:'/studentMobile/findPassword',
      component:StudentMobileFindBackPassword
    },
    {
      path:'/seminar/courseSelect',
      name:'CourseSelect',
      component:SeminarCourseSelect,
    },
    {
      path:'/seminar/seminarSelect',
      name:'SeminarSelect',
      component:SeminarSelect
    },
    {
      path:'/seminar/seminarIndex',
      name:'SeminarIndex',
      component:SeminarIndex,
      children:[
        {
          path:'finished'
        },
        {
          path:'processing',
          component:SeminarIndexProcessing
        },
        {
          path:'before',
          component:SeminarIndexBeforeDDL
        },
        {
          path:'signUp',
          component:SeminarIndexSignUp
        }
      ]
    }
  ]
})
