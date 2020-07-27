import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  notifications: {},
  hasNotif: {},
};

const getters = {
  notificationList(state) {
    return state.notifications;
  },

  triggerNotif(state) {
    return state.hasNotif;
  },
};

const mutations = {
  setNotifications(state, value) {
    state.notifications = value;
  },

  setHasNotif(state, value) {
    state.hasNotif = value;
  },
};

const actions = {
  getNotifications({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/trainer/notification`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setNotifications', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getTriggerNotif({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/trainer/notification/trigger`,
      params: payload.params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      data: {},
    })
      .then((res) => {
        commit('setHasNotif', res.data);
        payload.resolve(res.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postNotifications({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/trainer/notification`,
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
