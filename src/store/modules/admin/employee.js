import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  employeesBatch: {},
};

const getters = {
  batchEmployeeList(state) {
    return state.employeesBatch;
  },
};

const mutations = {
  setEmployeesBatch(state, value) {
    state.employeesBatch = value;
  },
};

const actions = {
  getEmployeesBatch({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/batch/employee`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setEmployeesBatch', res.data);
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
