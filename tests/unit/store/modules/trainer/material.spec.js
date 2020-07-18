import Material from '@/store/modules/trainer/material';
import axios from 'axios';

const store = Material;
jest.mock('axios', () => jest.fn());


// describe
describe('Material modules trainer', () => {
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

    // deleteMaterial
    axios.mockResolvedValue(res);
    await store.actions.deleteMaterial({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.deleteMaterial({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // deleteMaterial

    jest.clearAllMocks();

    // postMaterial
    axios.mockResolvedValue(res);
    await store.actions.postMaterial({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postMaterial({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postMaterial
  });
  // it actions
});
// end describe
