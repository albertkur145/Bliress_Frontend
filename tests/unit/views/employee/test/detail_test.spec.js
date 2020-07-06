import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTest from '@/views/employee/test/DetailTest.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store

  // before each
  beforeEach(() => {
    actions = {
      getMaterials: jest.fn(),
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
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
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
      getMaterials: jest.fn(),
    };

    getters = {
      materialList: jest.fn(() => {
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
    const wrapper = shallowMount(DetailTest, {
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

  // it getAllMaterials
  it('After promise', async () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
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

    await wrapper.vm.getAllMaterials();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllMaterials

  // it redirectToQuestion
  it('redirectToQuestion', async () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({
            value: true,
          }),
        },
        $route: {
          params: {
            training: {},
          },
        },
        $router: {
          push: jest.fn(),
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

    await wrapper.vm.redirectToQuestion(1);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();

    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({
      value: false,
    });
    await wrapper.vm.redirectToQuestion(1);
  });
  // it redirectToQuestion
});
// describe method
