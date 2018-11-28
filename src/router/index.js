import Vue from 'vue'
import Router from 'vue-router'
import TeacherPCLogin from '@/components/teacherPC/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeacherPCLogin',
      component: TeacherPCLogin
    }
  ]
})
