import Training from '@/store/modules/employees/training';
import axios from 'axios';

const store = Training;
jest.mock('axios', () => jest.fn());


// describe
describe('Training modules employees', () => {
  // it getters
  it('Getters', () => {
    const state = {
      trainings: 'trainings',
      trainingBy: 'trainingBy',
    };

    // expect
    expect(store.getters.trainingList(state)).toBe('trainings');
    expect(store.getters.trainingBy(state)).toBe('trainingBy');
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

    axios.mockResolvedValue(res);
    await store.actions.getTrainings({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainings', res.data);
    expect(resolve).toBeCalledWith(res.data.code);
    resolve.mockClear();

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainings({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');

    axios.mockResolvedValue(res);
    await store.actions.getTrainingBy({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTrainingBy', res.data);
    expect(resolve).toBeCalledWith(res.data.code);
    resolve.mockClear();

    axios.mockRejectedValue('Catch');
    await store.actions.getTrainingBy({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
  });
  // it actions
});
// end describe
