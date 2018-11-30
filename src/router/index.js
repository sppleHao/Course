import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'

import StudentMobileLogin from '@/pages/studentMobile/login/Login'
import StudentMobileActive from '@/pages/studentMobile/login/Active'
import StudentMobileFindBackPassword from '@/pages/studentMobile/login/FindBackPassword'

import StudentMobileAccountIndex from '@/pages/studentMobile/account/AccountIndex'

import StudentMobileCourseIndex from '@/pages/studentMobile/course/CourseIndex'

//import SeminarCourseSelect from '@/pages/studentMobile/seminar/Courseselect'
import SeminarSelect from '@/pages/studentMobile/seminar/Seminarselect'
import SeminarIndex from '@/pages/studentMobile/seminar/SeminarIndex'

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
      component:StudentMobileFindBackPassword,
      props:true
    },
    {
      path:'/studentMobile/account',
      component:StudentMobileAccountIndex,
      alias:'/studentMobile/course',
    },
    {
      path:'/studentMobile/course/:courseId',
      component:StudentMobileCourseIndex,
      props:true
    },
    // {
    //   path:'/studentMobile/course/:courseId/seminar',
    //   name:'CourseSelect',
    //   component:SeminarCourseSelect,
    // },
    {
      path:'/studentMobile/course/:courseId/seminar',
      name:'SeminarSelect',
      component:SeminarSelect,
      props:true
    },
    {
      path:'/studentMobile/course/:courseId/seminar/:seminarId',
      name:'SeminarIndex',
      component:SeminarIndex,
      props:true
    }
  ]
})
