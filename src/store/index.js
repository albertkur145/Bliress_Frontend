import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import '@/api/mock/employee/training';

Vue.use(Vuex);

const data = {
  trainings: [],
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
  getTrainings: ({ commit }) => {
    axios
      .get('/api/training')
      .then((res) => commit('setTrainings', res.data));
  },
};

export default new Vuex.Store({
  state: data,
  getters,
  mutations,
  actions,
});
