import Training from '@/store/modules/admin/training';
import axios from 'axios';

const store = Training;
jest.mock('axios', () => jest.fn());


// describe
describe('Training modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      trainings: 'trainings',
      trainingBy: 'trainingBy',
      attendance: 'attendance',
    };

    // expect
    expect(store.getters.trainingList(state)).toBe(state.trainings);
    expect(store.getters.training(state)).toBe(state.trainingBy);
    expect(store.getters.attendanceList(state)).toBe(state.attendance);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      trainings: '',
      trainingBy: '',
      attendance: '',
    };

    store.mutations.setTrainings(state, 'trainings');
    store.mutations.setTrainingBy(state, 'trainingBy');
    store.mutations.setAttendance(state, 'attendance');

    // expect
    expect(state.trainings).toBe('trainings');
    expect(state.trainingBy).toBe('trainingBy');
    expect(state.attendance).toBe('attendance');
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

    jest.clearAllMocks();

    // postTraining
    axios.mockResolvedValue(res);
    await store.actions.postTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postTraining

    jest.clearAllMocks();

    // putTraining
    axios.mockResolvedValue(res);
    await store.actions.putTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.putTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // putTraining

    jest.clearAllMocks();

    // deleteTraining
    axios.mockResolvedValue(res);
    await store.actions.deleteTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.deleteTraining({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // deleteTraining

    jest.clearAllMocks();

    // getAttendance
    axios.mockResolvedValue(res);
    await store.actions.getAttendance({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setAttendance', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getAttendance({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getAttendance
  });
  // it actions
});
// end describe
