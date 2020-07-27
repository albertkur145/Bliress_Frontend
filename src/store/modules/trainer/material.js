import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  material: {},
};

const getters = {
  materialList(state) {
    return state.material;
  },
};

const mutations = {
  setMaterial(state, value) {
    state.material = value;
  },
};

const actions = {
  getMaterial({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/trainer/material`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setMaterial', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteMaterial({ commit }, payload) {
    return axios({
      method: 'delete',
      url: `${API}/trainer/material`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
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
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
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
