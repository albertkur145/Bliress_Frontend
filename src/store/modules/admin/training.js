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

  training(state) {
    return state.trainingBy;
  },

  attendanceList(state) {
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
      url: `${API}/admin/batch/training`,
      params: payload.params,
      responseType: 'json',
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
      url: `${API}/admin/batch/training/detail`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setTrainingBy', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postTraining({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/admin/batch/training`,
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

  putTraining({ commit }, payload) {
    return axios({
      method: 'put',
      url: `${API}/admin/batch/training`,
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

  deleteTraining({ commit }, payload) {
    return axios({
      method: 'delete',
      url: `${API}/admin/batch/training`,
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

  getAttendance({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/batch/training/attendance`,
      params: payload.params,
      responseType: 'json',
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
