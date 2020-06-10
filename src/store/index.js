import Vue from 'vue';
import Vuex from 'vuex';
import '@/api/mock';
import employeeTraining from './modules/employees/training';
import employeeTest from './modules/employees/test';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employeeTraining,
    employeeTest,
  },
});
