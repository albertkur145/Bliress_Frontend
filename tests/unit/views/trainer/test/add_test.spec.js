import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTest from '@/views/trainer/test/AddTest.vue';

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
        trainerTest: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  it('User auth', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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
      postTest: jest.fn(),
      putTest: jest.fn(),
    };

    getters = {
      questionTest: jest.fn().mockReturnValue({
        data: {
          material: {
            questions: {},
          },
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        trainerTest: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    const spySetForm = jest.spyOn(wrapper.vm, 'setForm').mockImplementation(() => {
      return;
    });
    wrapper.vm.dataReady(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.material).toBe(wrapper.vm.questionTest.data.material);
    expect(spySetForm).toBeCalled();

    spySetForm.mockClear();
    wrapper.vm.questionTest.data.material.questions = null;
    wrapper.vm.dataReady(200);

    // expect
    expect(spySetForm).not.toBeCalled();

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch

  // it get questions after promise
  it('Get questions', async () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    jest.spyOn(wrapper.vm, 'promiseGetTest').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getQuestions();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get questions after promise

  // it set form
  it('Set form', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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
      available: '20',
      closed: '1',
      timeLimit: '30',
      material: {
        questions: ['a', 'b'],
      },
    };

    wrapper.vm.setForm(data);

    // expect
    expect(wrapper.vm.form.available).toBe(data.available);
    expect(wrapper.vm.form.closed).toBe(data.closed);
    expect(wrapper.vm.form.timeLimit).toBe(data.timeLimit);
    expect(wrapper.vm.form.questions).toBe(data.material.questions);
  });
  // it set form

  // it save
  it('Save', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    jest.spyOn(wrapper.vm, 'validateForm').mockReturnValue(1);
    const spyReqApi = jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => { return; });
    wrapper.setData({
      material: {
        questions: ['1', '2'],
      },
    });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();

    spyReqApi.mockClear();
    wrapper.setData({
      material: {
        questions: null,
      },
      form: {
        timeLimit: 10,
      },
    });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();
    expect(wrapper.vm.form.timeLimit).toBe(10);

    jest.spyOn(wrapper.vm, 'validateForm').mockReturnValue(0);
    wrapper.vm.save();
  });
  // it save

  // it reqAPI
  it('Req API', async () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    jest.spyOn(wrapper.vm, 'promiseSave').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyRedirectAfterSave = jest.spyOn(wrapper.vm, 'redirectAfterSave').mockImplementation(() => {
      return;
    });

    await wrapper.vm.reqApi();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyRedirectAfterSave).toBeCalled();
  });
  // it reqAPI

  // it promiseSave
  it('Promise save', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    wrapper.vm.promiseSave(actions.putTest);

    // expect
    expect(actions.putTest).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        materialId: wrapper.vm.paramMaterial,
        test: wrapper.vm.form,
      },
      resolve: expect.any(Function),
    });
  });
  // it promiseSave

  // it redirect after save
  it('RedirectAfterSave branch', () => {
    const wrapper = shallowMount(AddTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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

    wrapper.vm.redirectAfterSave(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.redirectAfterSave(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it redirect after save

  // it validateForm
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
            batch: 2,
            training: 1,
            material: 5,
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
  // it validateForm
});
// end describe method
