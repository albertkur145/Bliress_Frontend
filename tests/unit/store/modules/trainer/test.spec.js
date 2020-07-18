import Test from '@/store/modules/trainer/test';
import axios from 'axios';

const store = Test;
jest.mock('axios', () => jest.fn());


// describe
describe('Test modules trainer', () => {
  // it getters
  it('Getters', () => {
    const state = {
      materialsTest: 'materialsTest',
      test: 'test',
    };

    // expect
    expect(store.getters.materialTestList(state)).toBe(state.materialsTest);
    expect(store.getters.questionTest(state)).toBe(state.test);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      materialsTest: '',
      test: '',
    };

    store.mutations.setMaterialTest(state, 'materialsTest');
    store.mutations.setTest(state, 'test');

    // expect
    expect(state.materialsTest).toBe('materialsTest')
    expect(state.test).toBe('test');
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

    // getMaterialsTest
    axios.mockResolvedValue(res);
    await store.actions.getMaterialsTest({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setMaterialTest', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getMaterialsTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getMaterialsTest

    jest.clearAllMocks();

    // getTest
    axios.mockResolvedValue(res);
    await store.actions.getTest({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTest', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getTest

    jest.clearAllMocks();

    // postTest
    axios.mockResolvedValue(res);
    await store.actions.postTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postTest

    jest.clearAllMocks();

    // putTest
    axios.mockResolvedValue(res);
    await store.actions.putTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.putTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // putTest
  });
  // it actions
});
// end describe
