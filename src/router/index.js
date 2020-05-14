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
    component: () => import('../views/employee/training/Training.vue'),
  },
  {
    path: '/training/detail',
    name: 'DetailTraining',
    component: () => import('../views/employee/training/DetailTraining.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/employee/account/Account.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/employee/notification/Notification.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/employee/test/Test.vue'),
  },
  {
    path: '/test/detail/:id',
    name: 'DetailTest',
    component: () => import('../views/employee/test/DetailTest.vue'),
  },
  {
    path: '/test/:material/question/:id',
    name: 'Question',
    component: () => import('../views/employee/test/Question.vue'),
  },
  {
    path: '/admin/batch',
    name: 'AdminBatch',
    component: () => import('../views/admin/batch/Batch.vue'),
  },
  {
    path: '/admin/batch/:id',
    name: 'AdminDetailBatch',
    component: () => import('../views/admin/batch/DetailBatch.vue'),
  },
  {
    path: '/admin/batch/:id/training',
    name: 'AdminTraining',
    component: () => import('../views/admin/batch/Training.vue'),
  },
  {
    path: '/admin/batch/:id/training/add',
    name: 'AdminAddTraining',
    component: () => import('../views/admin/batch/AddTraining.vue'),
  },
  {
    path: '/admin/batch/:id/employee',
    name: 'AdminEmployee',
    component: () => import('../views/admin/batch/Employee.vue'),
  },
  {
    path: '/admin/batch/:id/employee/add',
    name: 'AdminAddEmployee',
    component: () => import('../views/admin/batch/AddEmployee.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
