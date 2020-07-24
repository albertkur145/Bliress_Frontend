import Auth from '@/store/modules/auth';
import axios from 'axios';

const store = Auth;
jest.mock('axios', () => jest.fn());


// describe
describe('Auth modules', () => {
  // it getters
  it('Getters', () => {
    const state = { user: 'User123' };

    // expect
    expect(store.getters.user(state)).toBe('User123');
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = { user: '' };
    store.mutations.setUser(state, 'User123');

    // expect
    expect(state.user).toBe('User123');
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

    // login
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
    // login
  });
  // it actions
});
// end describe
