import axios from 'axios';
import config from '@/config';

const { API } = config;

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
  getTests({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/test`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
    })
      .then((res) => {
        commit('setTests', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getMaterials({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/test/material`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
    })
      .then((res) => {
        commit('setMaterials', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getQuestions({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/test/material/question`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
    })
      .then((res) => {
        commit('setQuestions', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  submitTest({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/test/material/question`,
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
};

export default {
  namespaced: true,
  state: data,
  getters,
  mutations,
  actions,
};
