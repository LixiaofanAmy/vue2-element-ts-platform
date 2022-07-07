import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    meta: { title: '登录' },
  },
  {
    path: '/views',
    name: 'ViewsPage',
    component: () => import('@/pages/ViewsPage.vue'),
    children: [
      {
        path: '/views/task-details',
        name: 'task-details',
        component: () => import('@/views/security-check/TaskDetails.vue'),
      },
      {
        path: '/views/task-management',
        name: 'task-management',
        component: () => import('@/views/security-check/TaskManagement.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
