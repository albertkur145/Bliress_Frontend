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
    return axios({
      method: 'get',
      url: `${API}/material`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
    })
      .then((res) => {
        commit('setMaterials', res.data);
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
