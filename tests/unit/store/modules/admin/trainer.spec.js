import Trainer from '@/store/modules/admin/trainer';
import axios from 'axios';

const store = Trainer;
jest.mock('axios', () => jest.fn());


// describe
describe('Trainer modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      trainers: 'trainers',
      trainer: 'trainer',
    };

    // expect
    expect(store.getters.trainerList(state)).toBe(state.trainers);
    expect(store.getters.trainerData(state)).toBe(state.trainer);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      trainers: '',
      trainer: '',
    };

    store.mutations.setTrainers(state, 'trainers');
    store.mutations.setTrainer(state, 'trainer');

    // expect
    expect(state.trainers).toBe('trainers');
    expect(state.trainer).toBe('trainer');
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

    // getTrainers
    axios.mockResolvedValue(res);
    await store.actions.getTrainers({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainers', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainers({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTrainers

    jest.clearAllMocks();

    // getTrainer
    axios.mockResolvedValue(res);
    await store.actions.getTrainer({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainer', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTrainer

    jest.clearAllMocks();

    // postTrainer
    axios.mockResolvedValue(res);
    await store.actions.postTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postTrainer

    jest.clearAllMocks();

    // putTrainer
    axios.mockResolvedValue(res);
    await store.actions.putTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.putTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // putTrainer

    jest.clearAllMocks();

    // deleteTrainer
    axios.mockResolvedValue(res);
    await store.actions.deleteTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.deleteTrainer({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // deleteTrainer

    jest.clearAllMocks();

    // resetPassword
    axios.mockResolvedValue(res);
    await store.actions.resetPassword({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.resetPassword({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // resetPassword
  });
  // it actions
});
// end describe
