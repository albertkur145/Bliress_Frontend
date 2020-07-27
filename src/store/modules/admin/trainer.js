import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  trainers: {},
  trainer: {},
};

const getters = {
  trainerList(state) {
    return state.trainers;
  },

  trainerData(state) {
    return state.trainer;
  },
};

const mutations = {
  setTrainers(state, value) {
    state.trainers = value;
  },

  setTrainer(state, value) {
    state.trainer = value;
  },
};

const actions = {
  getTrainers({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/trainer`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setTrainers', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getTrainer({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/trainer/detail`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setTrainer', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postTrainer({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/admin/trainer`,
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

  putTrainer({ commit }, payload) {
    return axios({
      method: 'put',
      url: `${API}/admin/trainer`,
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

  deleteTrainer({ commit }, payload) {
    return axios({
      method: 'delete',
      url: `${API}/admin/trainer`,
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

  resetPassword({ commit }, payload) {
    return axios({
      method: 'put',
      url: `${API}/admin/trainer/reset`,
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
};

export default {
  namespaced: true,
  state: data,
  getters,
  mutations,
  actions,
};
