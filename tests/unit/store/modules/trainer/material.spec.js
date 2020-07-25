import Material from '@/store/modules/trainer/material';
import axios from 'axios';

const store = Material;
jest.mock('axios', () => jest.fn());


// describe
describe('Material modules trainer', () => {
  // it getters
  it('Getters', () => {
    const state = {
      material: 'material',
    };

    // expect
    expect(store.getters.materialList(state)).toBe(state.material);
  });
  // it getters

  // it mutations
  it('It mutations', () => {
    const state = {
      material: '',
    };

    store.mutations.setMaterial(state, 'material');

    // expect
    expect(state.material).toBe('material');
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

    // getMaterial
    axios.mockResolvedValue(res);
    await store.actions.getMaterial({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setMaterial', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getMaterial({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getMaterial

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
