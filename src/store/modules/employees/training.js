import axios from 'axios';

const API = 'http://localhost:8123/api';

const data = {
  trainings: {},
  trainingBy: {},
};

const getters = {
  trainingList(state) {
    return state.trainings;
  },

  trainingBy(state) {
    return state.trainingBy;
  },
};

const mutations = {
  setTrainings(state, value) {
    state.trainings = value;
  },

  setTrainingBy(state, value) {
    state.trainingBy = value;
  },
};

const actions = {
  getTrainings: ({ commit }, payload) => {
    axios({
      method: 'get',
      url: `${API}/training`,
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

  getTrainingBy: ({ commit }, payload) => {
    axios({
      method: 'get',
      url: `${API}/training/detail`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setTrainingBy', res.data);
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
