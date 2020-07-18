import Employee from '@/store/modules/employees/employee';
import axios from 'axios';

const store = Employee;
jest.mock('axios', () => jest.fn());


// describe
describe('Employee modules employees', () => {
  // it getters
  it('Getters', () => {
    const state = {
      user: 'user',
    };

    // expect
    expect(store.getters.user(state)).toBe(state.user);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      user: '',
    };

    store.mutations.setUser(state, 'user');

    // expect
    expect(state.user).toBe('user');
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
    await store.actions.getUser({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setUser', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getUser({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
  });
  // it actions
});
// end describe