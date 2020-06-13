import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  trainings: {},
};

const getters = {
  trainingList(state) {
    return state.trainings;
  },
};

const mutations = {
  setTrainings(state, value) {
    state.trainings = value;
  },
};

const actions = {
  getTrainings({ commit }, payload) {
    axios({
      method: 'get',
      url: `${API}/admin/batch/training`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setTrainings', res.data);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
      });
  },

  postTraining({ commit }, payload) {
    axios({
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
