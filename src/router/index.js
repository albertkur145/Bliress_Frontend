import Vue from 'vue';
import VueRouter from 'vue-router';
import nProgress from 'nprogress';

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
    path: '/training/:training',
    name: 'DetailTraining',
    component: () => import('../views/employee/training/DetailTraining.vue'),
  },
  {
    path: '/training/:training/attendance',
    name: 'Attendance',
    component: () => import('../views/employee/training/QrcodeScanner.vue'),
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
    path: '/test/:training',
    name: 'DetailTest',
    component: () => import('../views/employee/test/DetailTest.vue'),
  },
  {
    path: '/test/:training/material/:material',
    name: 'Question',
    component: () => import('../views/employee/test/Question.vue'),
  },
  {
    path: '/admin/batch',
    name: 'AdminBatch',
    component: () => import('../views/admin/batch/Batch.vue'),
  },
  {
    path: '/admin/batch/:batch',
    name: 'AdminDetailBatch',
    component: () => import('../views/admin/batch/DetailBatch.vue'),
  },
  {
    path: '/admin/batch/:batch/training',
    name: 'AdminTraining',
    component: () => import('../views/admin/batch/Training.vue'),
  },
  {
    path: '/admin/batch/:batch/training/:training/attendance',
    name: 'AdminAttendance',
    component: () => import('../views/admin/batch/Attendance.vue'),
  },
  {
    path: '/admin/batch/:batch/training/:training/attendance/qrcode',
    name: 'AdminQrcode',
    component: () => import('../views/admin/batch/Qrcode.vue'),
  },
  {
    path: '/admin/batch/:batch/training/:training/material',
    name: 'AdminMaterialTraining',
    component: () => import('../views/admin/batch/MaterialList.vue'),
  },
  {
    path: '/admin/batch/:batch/training/:training/material/upload',
    name: 'AdminUploadMaterialTraining',
    component: () => import('../views/admin/batch/UploadMaterial.vue'),
  },
  {
    path: '/admin/batch/:batch/training/add',
    name: 'AdminAddTraining',
    component: () => import('../views/admin/batch/AddTraining.vue'),
  },
  {
    path: '/admin/batch/:batch/training/:training',
    name: 'AdminChangeTraining',
    component: () => import('../views/admin/batch/AddTraining.vue'),
  },
  {
    path: '/admin/batch/:batch/employee',
    name: 'AdminEmployee',
    component: () => import('../views/admin/batch/Employee.vue'),
  },
  // {
  //   path: '/admin/batch/:batch/employee/add',
  //   name: 'AdminAddEmployee',
  //   component: () => import('../views/admin/batch/AddEmployee.vue'),
  // },
  {
    path: '/admin/test',
    name: 'AdminTest',
    component: () => import('../views/admin/test/Test.vue'),
  },
  {
    path: '/admin/test/batch/:batch/training/:training',
    name: 'AdminDetailTest',
    component: () => import('../views/admin/test/DetailTest.vue'),
  },
  {
    path: '/admin/test/batch/:batch/training/:training/material/:material',
    name: 'AdminReviewTest',
    component: () => import('../views/admin/test/ReviewTest.vue'),
  },
  {
    path: '/admin/test/batch/:batch/training/:training/material/:material/addtest',
    name: 'AdminAddTest',
    component: () => import('../views/admin/test/AddTest.vue'),
  },
  {
    path: '/admin/test/batch/:batch/training/:training/material/:material/changetest',
    name: 'AdminChangeTest',
    component: () => import('../views/admin/test/AddTest.vue'),
  },
  {
    path: '/admin/notification',
    name: 'AdminNotification',
    component: () => import('../views/admin/notification/Notification.vue'),
  },
  {
    path: '/admin/notification/add',
    name: 'AdminAddNotification',
    component: () => import('../views/admin/notification/AddNotification.vue'),
  },
  {
    path: '/admin/other',
    name: 'AdminOther',
    component: () => import('../views/admin/other/Other.vue'),
  },
  {
    path: '/admin/employee',
    name: 'AdminMenuEmployee',
    component: () => import('../views/admin/other/employee/Employee.vue'),
  },
  {
    path: '/admin/employee/create',
    name: 'AdminCreateEmployee',
    component: () => import('../views/admin/other/employee/CreateEmployee.vue'),
  },
  {
    path: '/admin/employee/:id',
    name: 'AdminChangeEmployee',
    component: () => import('../views/admin/other/employee/CreateEmployee.vue'),
  },
  {
    path: '/admin/trainer',
    name: 'AdminTrainer',
    component: () => import('../views/admin/other/trainer/Trainer.vue'),
  },
  {
    path: '/admin/trainer/create',
    name: 'AdminCreateTrainer',
    component: () => import('../views/admin/other/trainer/CreateTrainer.vue'),
  },
  {
    path: '/admin/trainer/:id',
    name: 'AdminChangeTrainer',
    component: () => import('../views/admin/other/trainer/CreateTrainer.vue'),
  },
  {
    path: '/trainer/training',
    name: 'TrainerTraining',
    component: () => import('../views/trainer/training/Training.vue'),
  },
  {
    path: '/trainer/training/:training/batch/:batch',
    name: 'TrainerDetailTraining',
    component: () => import('../views/trainer/training/DetailTraining.vue'),
  },
  {
    path: '/trainer/training/:training/batch/:batch/qrcode',
    name: 'TrainerQrcode',
    component: () => import('../views/trainer/training/Qrcode.vue'),
  },
  {
    path: '/trainer/training/:training/batch/:batch/upload',
    name: 'TrainerUploadMaterial',
    component: () => import('../views/trainer/training/UploadMaterial.vue'),
  },
  {
    path: '/trainer/test',
    name: 'TrainerTest',
    component: () => import('../views/trainer/test/Test.vue'),
  },
  {
    path: '/trainer/test/batch/:batch/training/:training',
    name: 'TrainerDetailTest',
    component: () => import('../views/trainer/test/DetailTest.vue'),
  },
  {
    path: '/trainer/test/batch/:batch/training/:training/material/:material',
    name: 'TrainerReviewTest',
    component: () => import('../views/trainer/test/ReviewTest.vue'),
  },
  {
    path: '/trainer/test/batch/:batch/training/:training/material/:material/addtest',
    name: 'TrainerAddTest',
    component: () => import('../views/trainer/test/AddTest.vue'),
  },
  {
    path: '/trainer/test/batch/:batch/training/:training/material/:material/changetest',
    name: 'TrainerChangeTest',
    component: () => import('../views/trainer/test/AddTest.vue'),
  },
  {
    path: '/trainer/notification',
    name: 'TrainerNotification',
    component: () => import('../views/trainer/notification/Notification.vue'),
  },
  {
    path: '/trainer/setting',
    name: 'TrainerSetting',
    component: () => import('../views/trainer/setting/Setting.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    nProgress.start();
  }
  next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
