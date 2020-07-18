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

    axios.mockResolvedValue(res);
    await store.actions.getNotifications({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setNotifications', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getNotifications({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
  });
  // it actions
});
// end describe
