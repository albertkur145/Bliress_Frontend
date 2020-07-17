import Login from '@/store/modules/login';
import axios from 'axios';

const store = Login;
jest.mock('axios', () => jest.fn());

// describe
describe('Describe', () => {

  // it mutations
  it('Mutations', async () => {
    const state = { user: '' };
    store.mutations.setUser(state, 'User123');

    // expect
    expect(state.user).toBe('User123');
  });
  // it mutations

  // it getters
  it('Getters', () => {
    const state = { user: 'User123' };
    let getters = store.getters.user(state);

    // expect
    expect(getters).toBe('User123');
  });
  // it getters

  // it actions
  it('Actions', async () => {
    const commit = jest.fn();
    const resolve = jest.fn();
    const res = {
      data: {
        code: 200,
      },
    };

    axios.mockResolvedValue(res);
    await store.actions.login({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setUser', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    const spyConsole = jest.spyOn(console, 'log');
    axios.mockRejectedValue('Catch');
    await store.actions.login({ commit }, { resolve });

    // expect
    expect(resolve).toBeCalledWith(500);
    expect(spyConsole).toBeCalledWith('Catch');
  });
  // it actions
});
// describe
