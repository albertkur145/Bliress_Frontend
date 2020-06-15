import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  employees: {},
};

const getters = {
  employeeList(state) {
    return state.employees;
  },
};

const mutations = {
  setEmployees(state, value) {
    state.employees = value;
  },
};

const actions = {
  getEmployees({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/employee`,
      responseType: 'json',
    })
      .then((res) => {
        commit('setEmployees', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  namespaced: true,
  state: data,
  getters,
  mutations,
  actions,
};
