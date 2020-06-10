import axios from 'axios';

const API = 'http://localhost:8123/api';

const data = {
  tests: {},
  materials: {},
  questions: {},
};

const getters = {
  testList(state) {
    return state.tests;
  },

  materialList(state) {
    return state.materials;
  },

  questionList(state) {
    return state.questions;
  },
};

const mutations = {
  setTests(state, value) {
    state.tests = value;
  },

  setMaterials(state, value) {
    state.materials = value;
  },

  setQuestions(state, value) {
    state.questions = value;
  },
};

const actions = {
  getTests: ({ commit }, payload) => {
    axios({
      method: 'get',
      url: `${API}/test`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setTests', res.data);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
      });
  },

  getMaterials: ({ commit }, payload) => {
    axios({
      method: 'get',
      url: `${API}/test/materials`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setMaterials', res.data);
        payload.resolve(res.data.code);
      })
      .catch(() => {
        console.log('Error');
      });
  },

  getQuestions: ({ commit }, payload) => {
    axios({
      method: 'get',
      url: `${API}/test/materials/question`,
      params: payload.params,
      responseType: 'json',
    })
      .then((res) => {
        commit('setQuestions', res.data);
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
