import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {};

const getters = {};

const mutations = {};

const actions = {
  deleteMaterial({ commit }, payload) {
    return axios({
      method: 'delete',
      url: `${API}/trainer/material`,
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

  postMaterial({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/trainer/material`,
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
