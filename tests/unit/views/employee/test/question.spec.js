import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Question from '@/views/employee/test/Question.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getQuestions: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeTest: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  it('User auth', () => {
    const wrapper = shallowMount(Question, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
            material: {},
          },
        },
        $cookies: {
          get: jest.fn((user) => user),
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
      getQuestions: jest.fn(),
      submitTest: jest.fn(),
    };

    getters = {
      questionList: jest.fn(() => {
        return {
          data: {},
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeTest: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });
  // before each

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(Question, {
      data() {
        return {
          promise: 200,
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            training: {},
            material: {},
          },
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch

  // it getAllQuestions
  it('GetAllQuestion after promise', async () => {
    const wrapper = shallowMount(Question, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
            material: {},
          },
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getAllQuestions();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllQuestions

  // it afterSubmit branch
  it('After submit - branch', () => {
    const wrapper = shallowMount(Question, {
      data() {
        return {
          promise: 200,
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            training: {},
            material: {},
          },
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.afterSubmit();

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.afterSubmit();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterSubmit branch

  // it submit after promise
  it('Submit after promise', async () => {
    const wrapper = shallowMount(Question, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
            material: {},
          },
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseSubmit').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterSubmit = jest.spyOn(wrapper.vm, 'afterSubmit').mockImplementation(() => {
      return;
    });

    await wrapper.vm.submit();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterSubmit).toBeCalled();
  });
  // it submit after promise

  // it confirm out button click
  // it('Confirm out button click', () => {
  //   const wrapper = shallowMount(Question, {
  //     mocks: {
  //       $func: {
  //         userAuth: jest.fn(),
  //       },
  //       $route: {
  //         params: {
  //           training: {},
  //           material: {},
  //         },
  //       },
  //       $cookies: {
  //         get: jest.fn((user) => user),
  //       },
  //     },
  //     localVue,
  //     store,
  //     stubs: [
  //       'font-awesome-icon',
  //       'router-link',
  //     ],
  //   });

  //   wrapper.find('#container .head .back').trigger('click');

  // });
  // it confirm out button click
});
// end describe method
