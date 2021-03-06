import Training from '@/store/modules/trainer/training';
import axios from 'axios';

const store = Training;
jest.mock('axios', () => jest.fn());


// describe
describe('Training modules trainer', () => {
  // it getters
  it('Getters', () => {
    const state = {
      trainings: 'trainings',
      trainingBy: 'trainingBy',
    };

    // expect
    expect(store.getters.trainingList(state)).toBe(state.trainings);
    expect(store.getters.trainingBy(state)).toBe(state.trainingBy);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      trainings: '',
      trainingBy: '',
    };

    store.mutations.setTrainings(state, 'trainings');
    store.mutations.setTrainingBy(state, 'trainingBy');

    // expect
    expect(state.trainings).toBe('trainings');
    expect(state.trainingBy).toBe('trainingBy');
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

    // getTrainings
    axios.mockResolvedValue(res);
    await store.actions.getTrainings({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainings', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainings({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTrainings

    jest.clearAllMocks();

    // getTrainingBy
    axios.mockResolvedValue(res);
    await store.actions.getTrainingBy({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainingBy', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainingBy({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTrainingBy
  });
  // it actions
});
// end describe
