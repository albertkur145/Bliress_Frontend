import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Test from '@/views/employee/test/Test.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTests: jest.fn(),
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

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Test, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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
  // it user auth
});
// end describe when created 


// describe method
describe('Method', () => {
  let actions;
  let store;
  let getters;

  // before each
  beforeEach(() => {
    actions = {
      getTests: jest.fn(),
    };

    getters = {
      testList: jest.fn(() => {
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

  // it dataReady branch
  it('Data ready - Branch', () => {
    const wrapper = shallowMount(Test, {
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

  // it getAllTests
  it('After promise', async () => {
    const wrapper = shallowMount(Test, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    await wrapper.vm.getAllTests();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllTests
});
// describe method
