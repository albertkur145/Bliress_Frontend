import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '@/views/Login.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
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

  // it popuplogout
  it('If cookies user exist, popuplogout function have been called', () => {
    expect(wrapper.vm.$func.popupLogoutFirst).toBeCalled();
  });
  // it popuplogout
});
// end describe when created


// describe button click
describe(`When button 'masuk' click`, () => {
  let store;
  let actions;

  // before each
  beforeEach(() => {
    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it vuex action
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

    // expect
    expect(actions.login).toBeCalled();
  });
  // it vuex action
});
// end describe button click


// describe redirect page method
describe('Redirect page method', () => {
  // it incorrect account
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

    // expect
    expect(spy).toHaveBeenCalled();
  });
  // it incorrect account

  // describe correct account
  describe('Correct account', () => {
    let store;
    let getters;

    // before each
    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              user: {
                id: 1,
                roles: ['ROLE_EMPLOYEE'],
              },
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          auth: {
            namespaced: true,
            getters,
          },
        },
      });
    });
    // before each

    // it role employee
    it('Role employee', () => {
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

      // expect
      expect(wrapper.vm.name).toBe('Training');
    });
    // it role employee
  });
  // describe correct acount

  // describe correct acount
  describe('Correct account', () => {
    let store;
    let getters;

    // before each
    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              user: {
                id: 1,
                roles: ['ROLE_ADMIN'],
              },
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          auth: {
            namespaced: true,
            getters,
          },
        },
      });
    });
    // before each

    // it role admin
    it('Role admin', () => {
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

      // expect
      expect(wrapper.vm.name).toBe('AdminBatch');
    });
    // it role admin
  });
  // describe correct acount

  // describe correct account
  describe('Correct account', () => {
    let store;
    let getters;

    // before each
    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              user: {
                id: 1,
                roles: ['ROLE_TRAINER'],
              },
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          auth: {
            namespaced: true,
            getters,
          },
        },
      });
    });
    // before each

    // it role trainer
    it('Role trainer', () => {
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

      // expect
      expect(wrapper.vm.name).toBe('TrainerTraining');
    });
    // it role trainer
  });
  // describe correct account

  // describe correct account
  describe('Correct account', () => {
    let store;
    let getters;

    // before each
    beforeEach(() => {
      getters = {
        user: jest.fn(() => {
          return {
            data: {
              user: {
                id: 1,
                roles: ['Unknown'],
              },
            },
          };
        }),
      };

      store = new Vuex.Store({
        modules: {
          auth: {
            namespaced: true,
            getters,
          },
        },
      });
    });
    // before each

    // it role unknown
    it('Role unknown', () => {
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

      // expect
      expect(wrapper.vm.name).toBe('');
    });
    // it role unknown
  });
  // describe correct account
});
// end describe redirect page method


// describe promise async loginUser
describe('Promise async loginUser', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          actions,
        }
      },
    });
  });
  // before each

  // it after resolve
  it('After resolve', async () => {
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

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });

    const spyRedirectPage = jest.spyOn(wrapper.vm, 'redirectPage').mockImplementation(() => {
      return;
    });

    wrapper.find('.btn-login').trigger('click');
    await wrapper.vm.$nextTick();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyRedirectPage).toBeCalled();
  });
  // it after resolve
});
// end describe promise async loginUser
