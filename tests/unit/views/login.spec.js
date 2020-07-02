import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import flushPromises from 'flush-promises';
import Login from '@/views/Login.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock('axios', () => ({
  post: jest.fn(() => {
    Promise.resolve(200);
  }),
}))

// describe
describe('When Created', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn((user) => user),
      },
      $func: {
        popupLogoutFirst: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  // it
  it('If cookies user exist, popuplogout function have been called', () => {
    expect(wrapper.vm.$func.popupLogoutFirst).toBeCalled();
  });
  // it
});
// describe

// describe
describe(`When button 'masuk' click`, () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        login: {
          namespaced: true,
          actions,
        },
      },
    });
  });

  // it
  it('Vuex action login to be called', () => {
    const wrapper = shallowMount(Login, {
      mocks: {
        $cookies: {
          get: jest.fn(),
        },
      },
      store,
      localVue,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.find('.btn-login').trigger('click');
    expect(actions.login).toBeCalled();
  });
  // it
});
// describe

// describe
describe('Redirect page method', () => {
  // it
  it('Incorrect account', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          promise: 404,
        };
      },
      mocks: {
        $cookies: {
          get: jest.fn(),
        },
        $func: {
          popupError: jest.fn(),
        },
      },
      localVue,
      stubs: [
        'font-awesome-icon',
      ],
    });

    const spy = jest.spyOn(wrapper.vm, 'redirectPage');
    wrapper.vm.redirectPage();
    expect(spy).toHaveBeenCalled();
  });
  // it

  // describe
  describe('Correct account', () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              id: 1,
              role: 'Employee',
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          login: {
            namespaced: true,
            getters,
          },
        },
      });
    });

    // it
    it('Role Employee', () => {
      const wrapper = shallowMount(Login, {
        data() {
          return {
            promise: 200,
          };
        },
        mocks: {
          $cookies: {
            get: jest.fn(),
            set: jest.fn(),
          },
          $func: {
            popupSuccessfull: jest.fn(),
          },
        },
        store,
        localVue,
        stubs: [
          'font-awesome-icon',
        ],
      });

      wrapper.vm.redirectPage();
      expect(wrapper.vm.name).toBe('Training');
    });
    // it
  });
  // describe

  // describe
  describe('Correct account', () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              id: 1,
              role: 'Admin',
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          login: {
            namespaced: true,
            getters,
          },
        },
      });
    });

    // it
    it('Role Admin', () => {
      const wrapper = shallowMount(Login, {
        data() {
          return {
            promise: 200,
          };
        },
        mocks: {
          $cookies: {
            get: jest.fn(),
            set: jest.fn(),
          },
          $func: {
            popupSuccessfull: jest.fn(),
          },
        },
        store,
        localVue,
        stubs: [
          'font-awesome-icon',
        ],
      });

      wrapper.vm.redirectPage();
      expect(wrapper.vm.name).toBe('AdminBatch');
    });
    // it
  });
  // describe

  // describe
  describe('Correct account', () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              id: 1,
              role: 'Trainer',
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          login: {
            namespaced: true,
            getters,
          },
        },
      });
    });

    // it
    it('Role Trainer', () => {
      const wrapper = shallowMount(Login, {
        data() {
          return {
            promise: 200,
          };
        },
        mocks: {
          $cookies: {
            get: jest.fn(),
            set: jest.fn(),
          },
          $func: {
            popupSuccessfull: jest.fn(),
          },
        },
        store,
        localVue,
        stubs: [
          'font-awesome-icon',
        ],
      });

      wrapper.vm.redirectPage();
      expect(wrapper.vm.name).toBe('TrainerTraining');
    });
    // it
  });
  // describe

  // describe
  describe('Correct account', () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              id: 1,
              role: 'Unknown',
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          login: {
            namespaced: true,
            getters,
          },
        },
      });
    });

    // it
    it('Role Unknown', () => {
      const wrapper = shallowMount(Login, {
        data() {
          return {
            promise: 200,
          };
        },
        mocks: {
          $cookies: {
            get: jest.fn(),
            set: jest.fn(),
          },
          $func: {
            popupSuccessfull: jest.fn(),
          },
        },
        store,
        localVue,
        stubs: [
          'font-awesome-icon',
        ],
      });

      wrapper.vm.redirectPage();
      expect(wrapper.vm.name).toBe('');
    });
    // it
  });
  // describe
});
// describe

// describe
describe('Promise async loginUser', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        login: {
          namespaced: true,
          actions,
        }
      },
    });
  });

  // it
  it('Animation loader value', async () => {
    const wrapper = shallowMount(Login, {
      mocks: {
        $cookies: {
          get: jest.fn(),
        },
      },
      store,
      localVue,
      stubs: [
        'font-awesome-icon',
      ],
    });

    jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => {
      Promise.resolve(200);
    });

    const spyRedirectPage = jest.spyOn(wrapper.vm, 'redirectPage').mockImplementation(() => {
      return;
    });

    wrapper.find('.btn-login').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyRedirectPage).toBeCalled();
  });
  // it
});
// describe
