import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  batchs: {},
  batchBy: {},
  batchTrainings: {},
};

const getters = {
  batchList(state) {
    return state.batchs;
  },
};

const mutations = {
  setBatch(state, value) {
    state.batchs = value;
  },
};

const actions = {
  getBatch({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/batch`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
    })
      .then((res) => {
        commit('setBatch', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postBatch({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/admin/batch`,
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

  deleteBatch({ commit }, payload) {
    return axios({
      method: 'delete',
      url: `${API}/admin/batch`,
      params: payload.params,
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
