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
      path:'/Seminar/CourseSelect',
      name:'CourseSelect',
      component:SeminarCourseSelect,
    },
    {
      path:'/Seminar/SeminarSelect',
      name:'SeminarSelect',
      component:SeminarSelect
    },
    {
      path:'/Seminar/SeminarIndex',
      name:'SeminarIndex',
      component:SeminarIndex
    }
  ]
})
