import axios from 'axios';
import '@/api/mock/employee/training';

const API = 'http://localhost:8080/api';

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
  getTrainings: ({ commit }) => {
    axios
      .get(`${API}/training`)
      .then((res) => commit('setTrainings', res.data));
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
        payload.resolve();
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
