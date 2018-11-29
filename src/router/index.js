import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'
import SeminarCourseSelect from '@/pages/studentMobile/seminar/Courseselect'
import SeminarSelect from '@/pages/studentMobile/seminar/Seminarselect'
import SeminarIndex from '@/pages/studentMobile/seminar/SeminarIndex'
import SeminarIndexProcessing from '@/components/studentMobile/SeminarProcessing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeacherPCLogin',
      component: TeacherPCLogin
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
          path:'noSignUp'
        },
        {
          path:'signUp'
        }
      ]
    }
  ]
})
