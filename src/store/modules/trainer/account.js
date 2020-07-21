import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {};

const getters = {};

const mutations = {};

const actions = {
  changePassword({ commit }, payload) {
    return axios({
      method: 'put',
      url: `${API}/trainer/password`,
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
