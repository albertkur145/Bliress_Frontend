import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Account from '@/views/employee/account/Account.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
        }
      },
    });
  });
  // before each

  // it popuplogout
  it('User auth', async () => {
    const wrapper = shallowMount(Account, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });

    // expect
    expect(wrapper.vm.$func.userAuth).toBeCalled();
  });
  // it popuplogout
});
// end describe when created


// describe logout function
describe('Logout function', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
        }
      },
    });
  });
  // before each

  // it button click
  it('Button click', () => {
    const wrapper = shallowMount(Account, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
          remove: jest.fn(),
        },
        $func: {
          userAuth: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    const spyLogout = jest.spyOn(wrapper.vm, 'logout');
    wrapper.vm.logout();

    // expect
    expect(spyLogout).toBeCalled();
  });
  // it button click
});
// end describe logout function


// describe method dataReady
describe('Method dataReady', () => {
  let actions;
  let store;
  let getters;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
    };

    getters = {
      user: jest.fn(() => {
        return {
          data: {},
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
          getters,
        }
      },
    });
  });
  // before each

  // it branch
  it('Branch', () => {
    const wrapper = shallowMount(Account, {
      data() {
        return {
          promise: 200,
        };
      },
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
  });
  // it branch
});
// end describe method dataReady


// describe method getUserAccount
describe('Method getUserAccount', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
        }
      },
    });
  });
  // before each

  // it after promise
  it('After promise', async () => {
    const wrapper = shallowMount(Account, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady');
    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    await wrapper.vm.getUserAccount();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it after promise
});
// end describe method getUserAccount
