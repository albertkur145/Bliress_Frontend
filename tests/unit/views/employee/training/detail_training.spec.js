import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTraining from '@/views/employee/training/DetailTraining.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainingBy: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: {},
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
// end descirbe when created


// describe method
describe('Method', () => {
  let actions;
  let store;
  let getters;

  // before each
  beforeEach(() => {
    actions = {
      getTrainingBy: jest.fn(),
    };

    getters = {
      trainingBy: jest.fn(() => {
        return {
          data: {
            training: {},
          },
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });
  // before each

  // it dataReady branch
  it('Data ready - Branch', () => {
    const wrapper = shallowMount(DetailTraining, {
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
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: {},
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
  // it dataReady branch

  // it redirectTest
  it('Redirect test', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: {},
          },
        },
        $router: {
          push: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.redirectTest();

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
  });
  // it redirectTest

  // it getTrainingByID
  it('After promise getTrainingByID', async () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: {},
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

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });
    await wrapper.vm.getTrainingByID();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getTrainingByID
});
// end describe method
