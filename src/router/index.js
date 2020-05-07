import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('../views/employee/Training.vue'),
  },
  {
    path: '/training/detail',
    name: 'DetailTraining',
    component: () => import('../views/employee/DetailTraining.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/employee/Account.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/employee/Notification.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/employee/Test.vue'),
  },
  {
    path: '/test/detail/:id',
    name: 'DetailTest',
    component: () => import('../views/employee/DetailTest.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
