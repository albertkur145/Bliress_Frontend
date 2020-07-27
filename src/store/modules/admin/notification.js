import axios from 'axios';
import config from '@/config';

const { API } = config;

const data = {
  notifications: {},
};

const getters = {
  notificationList(state) {
    return state.notifications;
  },
};

const mutations = {
  setNotifications(state, value) {
    state.notifications = value;
  },
};

const actions = {
  getNotifications({ commit }, payload) {
    return axios({
      method: 'get',
      url: `${API}/admin/notification`,
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

  postNotification({ commit }, payload) {
    return axios({
      method: 'post',
      url: `${API}/admin/notification`,
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
