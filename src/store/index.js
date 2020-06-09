import Vue from 'vue';
import Vuex from 'vuex';
import employeeTraining from './modules/employees/training';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employeeTraining,
  },
});
