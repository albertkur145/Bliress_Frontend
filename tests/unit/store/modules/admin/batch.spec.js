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
      batchBy: 'batchBy',
      batchTrainings: 'batchTrainings',
    };

    // expect
    expect(store.getters.batchList(state)).toBe(state.batchs);
    expect(store.getters.batchBy(state)).toBe(state.batchBy);
    expect(store.getters.batchTrainingList(state)).toBe(state.batchTrainings);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      batchs: '',
      batchBy: '',
      batchTrainings: '',
    };

    store.mutations.setBatch(state, 'batchs');
    store.mutations.setBatchBy(state, 'batchBy');
    store.mutations.setBatchTraining(state, 'batchTrainings');

    // expect
    expect(state.batchs).toBe('batchs');
    expect(state.batchBy).toBe('batchBy');
    expect(state.batchTrainings).toBe('batchTrainings');
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

    // getBatchTraining
    axios.mockResolvedValue(res);
    await store.actions.getBatchTraining({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setBatchTraining', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getBatchTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getBatchTraining

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

    // getBatchBy
    axios.mockResolvedValue(res);
    await store.actions.getBatchBy({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setBatchBy', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getBatchBy({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getBatchBy

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
