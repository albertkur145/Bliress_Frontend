import Vue from 'vue';
import Vuex from 'vuex';
import '@/api/mock';
import auth from './modules/auth';
import employeeTraining from './modules/employees/training';
import employeeMaterial from './modules/employees/material';
import employeeTest from './modules/employees/test';
import employeeNotification from './modules/employees/notification';
import employeeEmployee from './modules/employees/employee';
import adminBatch from './modules/admin/batch';
import adminEmployee from './modules/admin/employee';
import adminTraining from './modules/admin/training';
import adminMaterial from './modules/admin/material';
import adminTest from './modules/admin/test';
import adminNotification from './modules/admin/notification';
import adminTrainer from './modules/admin/trainer';
import trainerTraining from './modules/trainer/training';
import trainerMaterial from './modules/trainer/material';
import trainerTest from './modules/trainer/test';
import trainerNotification from './modules/trainer/notification';
import trainerAccount from './modules/trainer/account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    employeeTraining,
    employeeMaterial,
    employeeTest,
    employeeNotification,
    employeeEmployee,
    adminBatch,
    adminEmployee,
    adminTraining,
    adminMaterial,
    adminTest,
    adminNotification,
    adminTrainer,
    trainerTraining,
    trainerMaterial,
    trainerTest,
    trainerNotification,
    trainerAccount,
  },
});
