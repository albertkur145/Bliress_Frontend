import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  employeesBatch: {},
  employees: {},
  employee: {},
};

const getters = {
  batchEmployeeList(state) {
    return state.employeesBatch;
  },

  employeeList(state) {
    return state.employees;
  },

  employeeData(state) {
    return state.employee;
  },
};

const mutations = {
  setEmployeesBatch(state, value) {
    state.employeesBatch = value;
  },

  setEmployees(state, value) {
    state.employees = value;
  },

  setEmployee(state, value) {
    state.employee = value;
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

  getEmployee({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/employee/detail`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setEmployee', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postEmployee({ commit }, payload) {
    axios({
      method: 'post',
      url: `${API}/admin/employee`,
      data: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        console.log(commit);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  putEmployee({ commit }, payload) {
    axios({
      method: 'put',
      url: `${API}/admin/employee`,
      data: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        console.log(commit);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteEmployee({ commit }, payload) {
    axios({
      method: 'delete',
      url: `${API}/admin/employee`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        console.log(commit);
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
