import Material from '@/store/modules/admin/material';
import axios from 'axios';

const store = Material;
jest.mock('axios', () => jest.fn());


// describe
describe('Material modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      materials: 'materials',
    };

    // expect
    expect(store.getters.materialList(state)).toBe(state.materials);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      materials: '',
    };

    store.mutations.setMaterials(state, 'materials');

    // expect
    expect(state.materials).toBe('materials');
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

    // getMaterials
    axios.mockResolvedValue(res);
    await store.actions.getMaterials({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setMaterials', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getMaterials({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getMaterials

    jest.clearAllMocks();

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
