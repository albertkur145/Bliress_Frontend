import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  user: {},
};

const getters = {
  user(state) {
    return state.user;
  },
};

const mutations = {
  setUser(state, value) {
    state.user = value;
  },
};

const actions = {
  getUser({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/employee`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setUser', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  changePassword({ commit }, payload) {
    return axios({
      method: 'put',
      url: `${API}/employee/password`,
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
};

export default {
  namespaced: true,
  state: data,
  getters,
  mutations,
  actions,
};
