import Vue from 'vue';
import Vuex from 'vuex';
import '@/api/mock';
import employeeTraining from './modules/employees/training';
import employeeTest from './modules/employees/test';
import employeeNotification from './modules/employees/notification';
import employeeEmployee from './modules/employees/employee';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employeeTraining,
    employeeTest,
    employeeNotification,
    employeeEmployee,
  },
});
