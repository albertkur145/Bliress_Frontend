import Batch from '@/store/modules/admin/batch';
import axios from 'axios';

const store = Batch;
jest.mock('axios', () => jest.fn());


// describe
describe('Batch modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      batchs: 'batchs',
    };

    // expect
    expect(store.getters.batchList(state)).toBe(state.batchs);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      batchs: '',
    };

    store.mutations.setBatch(state, 'batchs');

    // expect
    expect(state.batchs).toBe('batchs');
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

    // getBatch
    axios.mockResolvedValue(res);
    await store.actions.getBatch({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setBatch', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getBatch

    jest.clearAllMocks();

    // postBatch
    axios.mockResolvedValue(res);
    await store.actions.postBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postBatch

    // deleteBatch
    axios.mockResolvedValue(res);
    await store.actions.deleteBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.deleteBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // deleteBatch
  });
  // it actions
});
// end describe
