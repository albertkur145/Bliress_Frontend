import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  materials: {},
};

const getters = {
  materialList(state) {
    return state.materials;
  },
};

const mutations = {
  setMaterials(state, value) {
    state.materials = value;
  },
};

const actions = {
  getMaterials({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/material`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setMaterials', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteMaterial({ commit }, payload) {
    axios({
      method: 'delete',
      url: `${API}/admin/material`,
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
    axios({
      method: 'post',
      url: `${API}/admin/material`,
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
