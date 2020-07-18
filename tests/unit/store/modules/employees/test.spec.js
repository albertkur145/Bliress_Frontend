import Test from '@/store/modules/employees/test';
import axios from 'axios';

const store = Test;
jest.mock('axios', () => jest.fn());


// describe
describe('Test modules employees', () => {
  // it getters
  it('Getters', () => {
    const state = {
      tests: 'tests',
      materials: 'materials',
      questions: 'questions',
    };

    // expect
    expect(store.getters.testList(state)).toBe(state.tests);
    expect(store.getters.materialList(state)).toBe(state.materials);
    expect(store.getters.questionList(state)).toBe(state.questions);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      tests: '',
      materials: '',
      questions: '',
    };

    store.mutations.setTests(state, 'tests');
    store.mutations.setMaterials(state, 'materials');
    store.mutations.setQuestions(state, 'questions');

    // expect
    expect(state.tests).toBe('tests');
    expect(state.materials).toBe('materials');
    expect(state.questions).toBe('questions');
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

    // get tests
    axios.mockResolvedValue(res);
    await store.actions.getTests({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setTests', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getTests({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    jest.clearAllMocks();
    // end get tests

    // get materials
    axios.mockResolvedValue(res);
    await store.actions.getMaterials({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setMaterials', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getMaterials({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    jest.clearAllMocks();
    // end get materials

    // get questions
    axios.mockResolvedValue(res);
    await store.actions.getQuestions({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setQuestions', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getQuestions({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    jest.clearAllMocks();
    // end get questions

    // submit test
    axios.mockResolvedValue(res);
    await store.actions.submitTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.submitTest({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    jest.clearAllMocks();
    // end submit test
  });
  // it actions
});
// end describe
