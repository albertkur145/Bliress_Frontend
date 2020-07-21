import Notification from '@/store/modules/trainer/notification';
import axios from 'axios';

const store = Notification;
jest.mock('axios', () => jest.fn());


// describe
describe('Notification modules trainer', () => {
  // it getters
  it('Getters', () => {
    const state = {
      notifications: 'notifications',
      hasNotif: 'hasNotif',
    };

    // expect
    expect(store.getters.notificationList(state)).toBe(state.notifications);
    expect(store.getters.triggerNotif(state)).toBe(state.hasNotif);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      notifications: '',
      hasNotif: '',
    };

    store.mutations.setNotifications(state, 'notifications');
    store.mutations.setHasNotif(state, 'hasNotif');

    // expect
    expect(state.notifications).toBe('notifications');
    expect(state.hasNotif).toBe('hasNotif');
  });
  // it mutations

  // it actions
  it('Actions', async () => {
    const commit = jest.fn();
    const resolve = jest.fn();
    const res = {
      data: {
        code: 200,
      },
    };
    const spyConsole = jest.spyOn(console, 'log');

    // getNotifications
    axios.mockResolvedValue(res);
    await store.actions.getNotifications({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setNotifications', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getNotifications({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getNotifications

    jest.clearAllMocks();

    // getTriggerNotif
    axios.mockResolvedValue(res);
    await store.actions.getTriggerNotif({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setHasNotif', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTriggerNotif({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTriggerNotif

    jest.clearAllMocks();

    // postNotifications
    axios.mockResolvedValue(res);
    await store.actions.postNotifications({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postNotifications({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postNotifications
  });
  // it actions
});
// end describe
