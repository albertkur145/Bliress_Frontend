import Notification from '@/store/modules/admin/notification';
import axios from 'axios';

const store = Notification;
jest.mock('axios', () => jest.fn());


// describe
describe('Notification modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      notifications: 'notifications',
    };

    // expect
    expect(store.getters.notificationList(state)).toBe(state.notifications);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      notifications: '',
    };

    store.mutations.setNotifications(state, 'notifications');

    // expect
    expect(state.notifications).toBe('notifications');
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

    // postNotification
    axios.mockResolvedValue(res);
    await store.actions.postNotification({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postNotification({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postNotification
  });
  // it actions
});
// end describe
