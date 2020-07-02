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
  login({ commit }, payload) {
    axios({
      method: 'post',
      url: `${API}/login`,
      data: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setUser', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        payload.resolve(500);
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
