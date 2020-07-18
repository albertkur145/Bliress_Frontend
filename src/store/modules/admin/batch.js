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

  batchBy(state) {
    return state.batchBy;
  },

  batchTrainingList(state) {
    return state.batchTrainings;
  },
};

const mutations = {
  setBatch(state, value) {
    state.batchs = value;
  },

  setBatchBy(state, value) {
    state.batchBy = value;
  },

  setBatchTraining(state, value) {
    state.batchTrainings = value;
  },
};

const actions = {
  getBatch({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/batch`,
      responseType: 'json',
    })
      .then((res) => {
        commit('setBatch', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getBatchTraining({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/batchtraining`,
      responseType: 'json',
    })
      .then((res) => {
        commit('setBatchTraining', res.data);
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
    })
      .then((res) => {
        console.log(commit);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getBatchBy({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/batch/detail`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setBatchBy', res.data);
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
