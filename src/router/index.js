import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/Login'
import SeminarCourseSelect from '@/pages/studentMobile/Seminar/Courseselect'
import SeminarSelect from '@/pages/studentMobile/Seminar/Seminarselect'
import SeminarIndex from '@/pages/studentMobile/Seminar/SeminarIndex'

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
      children:[{
        path:'finished',
        name:'SeminarIndexFinished'
      },
        {
          path:'processing',
          name:'SeminarIndexProcessing'
        },
        {
          path:'noSignUp',
          name:'SeminarIndexNoSignUp'
        },
        {
          path:'signUp',
          name:'SeminarIndexNoSignUp'
        }
      ]
    }
  ]
})
