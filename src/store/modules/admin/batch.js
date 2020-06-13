import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  batchs: {},
  batchBy: {},
};

const getters = {
  batchList(state) {
    return state.batchs;
  },

  batchBy(state) {
    return state.batchBy;
  },
};

const mutations = {
  setBatch(state, value) {
    state.batchs = value;
  },

  setBatchBy(state, value) {
    state.batchBy = value;
  },
};

const actions = {
  getBatch({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/batch`,
      responseType: 'json',
    })
      .then((res) => {
        commit('setBatch', res.data);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
      });
  },

  postBatch({ commit }, payload) {
    axios({
      method: 'post',
      url: `${API}/admin/batch`,
      data: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        console.log(commit);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
      });
  },

  getBatchBy({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/batch/detail`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setBatchBy', res.data);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
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
