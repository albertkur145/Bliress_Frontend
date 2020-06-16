import Vue from 'vue';
import Vuex from 'vuex';
import '@/api/mock';
import login from './modules/login';
import employeeTraining from './modules/employees/training';
import employeeTest from './modules/employees/test';
import employeeNotification from './modules/employees/notification';
import employeeEmployee from './modules/employees/employee';
import adminBatch from './modules/admin/batch';
import adminEmployee from './modules/admin/employee';
import adminTraining from './modules/admin/training';
import adminMaterial from './modules/admin/material';
import adminTest from './modules/admin/test';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    employeeTraining,
    employeeTest,
    employeeNotification,
    employeeEmployee,
    adminBatch,
    adminEmployee,
    adminTraining,
    adminMaterial,
    adminTest,
  },
});
