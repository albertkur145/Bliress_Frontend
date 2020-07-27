import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  trainings: {},
  trainingBy: {},
  attendance: {},
};

const getters = {
  trainingList(state) {
    return state.trainings;
  },

  trainingBy(state) {
    return state.trainingBy;
  },

  attendanceUser(state) {
    return state.attendance;
  },
};

const mutations = {
  setTrainings(state, value) {
    state.trainings = value;
  },

  setTrainingBy(state, value) {
    state.trainingBy = value;
  },

  setAttendance(state, value) {
    state.attendance = value;
  },
};

const actions = {
  getTrainings({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/training`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setTrainings', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getTrainingBy({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/training/detail`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setTrainingBy', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getAttendance({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/training/attendance`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setAttendance', res.data);
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
