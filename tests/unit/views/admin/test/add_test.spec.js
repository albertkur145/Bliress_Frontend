import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTest from '@/views/admin/test/AddTest.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTest: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTest: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    // expect
    expect(wrapper.vm.$func.userAuth).toBeCalled();
  });
  // it user auth
});
// end describe when created


// describe method
describe('Method', () => {
  let actions;
  let getters;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTest: jest.fn(),
      putTest: jest.fn(),
      postTest: jest.fn(),
    };

    getters = {
      questionTest: jest.fn().mockReturnValue({
        data: {
          material: {
            questions: ['a', 'b'],
          },
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTest: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get questions
  it('Get questions', async () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseGetQeustions').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getQuestions();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled(); 
  });
  // it get questions

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        data() {
          return {
            material: {
              questions: 'a',
            },
          };
        },
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spySetForm = jest.spyOn(wrapper.vm, 'setform').mockImplementation(() => { return; });
    wrapper.vm.dataReady(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.material).toStrictEqual(wrapper.vm.questionTest.data.material);
    expect(spySetForm).toBeCalled();

    spySetForm.mockClear();
    wrapper.setData({
      material: {
        questions: null,
      },
    });
    wrapper.vm.dataReady(200);

    // expect
    expect(spySetForm).not.toBeCalled();

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it set form
  it('Set form', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const data = {
      available: 'a',
      closed: 'b',
      timeLimit: 'c',
      material: {
        questions: {},
      },
    };
    wrapper.vm.setform(data);

    // expect
    expect(wrapper.vm.form).toStrictEqual({
      available: data.available,
      closed: data.closed,
      timeLimit: data.timeLimit,
      questions: data.material.questions,
    });
  });
  // it set form

  // it set form question
  it('Set form question', () => {
    const wrapper = shallowMount(AddTest, {
      data() {
        return {
          form: {
            questions: {
              push: jest.fn(),
            },
          },
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.setFormQuestion();
  });
  // it set form question

  // it save
  it('Save', () => {
    const wrapper = shallowMount(AddTest, {
      data() {
        return {
          material: {
            quetions: 'a',
          },
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'validateForm').mockReturnValue(true);
    const spyReqApi = jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => { return; });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();
    expect(spyReqApi).toBeCalledWith(wrapper.vm.putTest);

    spyReqApi.mockClear();
    wrapper.setData({
      material: {
        questions: null,
      },
    });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();
    expect(spyReqApi).toBeCalledWith(wrapper.vm.postTest);

    jest.spyOn(wrapper.vm, 'validateForm').mockReturnValue(false);
    wrapper.vm.save();
  });
  // it save

  // it req api
  it('Req api', async () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseReqApi').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterReqApi = jest.spyOn(wrapper.vm, 'afterReqApi').mockImplementation(() => { return; });
    await wrapper.vm.reqApi();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterReqApi).toBeCalled();
  });
  // it req api

  // it promise req api
  it('Promise req api', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spyPutTest = jest.spyOn(wrapper.vm, 'putTest');
    wrapper.vm.promiseReqApi(wrapper.vm.putTest);

    // expect
    expect(spyPutTest).toBeCalled();
    expect(spyPutTest).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        materialId: wrapper.vm.paramMaterial,
        test: wrapper.vm.form,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise req api

  // it after req api
  it('After req api', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.afterReqApi(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalledWith('Berhasil simpan data', 5000, wrapper.vm.back);

    wrapper.vm.afterReqApi(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after req api

  // it validate form
  it('Validate form', () => {
    const wrapper = shallowMount(AddTest, {
      data() {
        return {
          form: {
            timeLimit: 0,
          },
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
            material: 1,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    let value = wrapper.vm.validateForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();
    expect(value).toBe(0);

    wrapper.setData({
      form: {
        timeLimit: 5,
        questions: [
          {
            length: 1,
            questionText: {
              length: 0,
            },
            choices: [
              {
                length: 1,
                answer: {
                  length: 0,
                },
              },
            ],
          },
        ],
      },
    });
    value = wrapper.vm.validateForm();

    // expect
    expect(value).toBe(0);

    wrapper.setData({
      form: {
        timeLimit: 5,
        questions: [
          {
            length: 1,
            questionText: {
              length: 5,
            },
            choices: [
              {
                length: 1,
                answer: {
                  length: 0,
                },
              },
            ],
          },
        ],
      },
    });
    value = wrapper.vm.validateForm();

    // expect
    expect(value).toBe(0);

    wrapper.setData({
      form: {
        timeLimit: 5,
        questions: [
          {
            length: 1,
            questionText: {
              length: 5,
            },
            choices: [
              {
                length: 1,
                answer: {
                  length: 3,
                },
              },
            ],
          },
        ],
      },
    });
    value = wrapper.vm.validateForm();

    // expect
    expect(value).toBe(1);
  });
  // it validate form
});
// end describe method
