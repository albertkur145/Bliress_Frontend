import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Account from '@/views/employee/account/Account.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;
  let actionsNotif;
  let gettersNotif;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
    };

    actionsNotif = {
      getTriggerNotif: jest.fn(),
    };

    gettersNotif = {
      triggerNotif: jest.fn(() => {
        return {
          data: {
            hasNotif: true,
          },
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
        },
        employeeNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
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


// describe method
describe('Method', () => {
  let actions;
  let store;
  let getters;
  let actionsNotif;
  let gettersNotif;

  // before each
  beforeEach(() => {
    actions = {
      getUser: jest.fn(),
      changePassword: jest.fn(),
    };

    actionsNotif = {
      getTriggerNotif: jest.fn(),
    };

    getters = {
      user: jest.fn(() => {
        return {
          data: {
            employee: {},
          },
        };
      }),
    };

    gettersNotif = {
      triggerNotif: jest.fn(() => {
        return {
          data: {
            hasNotif: true,
          },
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeEmployee: {
          namespaced: true,
          actions,
          getters,
        },
        employeeNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
      },
    });
  });
  // before each

  // it logout
  it('Logout', () => {
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
  // it logout

  // it data ready
  it('Data ready', () => {
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
          popupLostConnection: jest.fn(),
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

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it getUserAccount
  it('Get user account', async () => {
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
  // it getUserAccount

  // it isHasNotif
  it('Is has notif', async () => {
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

    const spy = jest.spyOn(wrapper.vm, 'afterTriggerNotif');
    jest.spyOn(wrapper.vm, 'promiseIsHasNotif').mockImplementation(() => {
      Promise.resolve(200);
    });
    await wrapper.vm.isHasNotif();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it isHasNotif

  // it afterTriggerNotif
  it('After trigger notif', () => {
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

    wrapper.vm.afterTriggerNotif(200);

    // expect
    expect(wrapper.vm.hasNotif).toBe(wrapper.vm.triggerNotif.data.hasNotif);

    wrapper.vm.afterTriggerNotif(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterTriggerNotif

  // it form password
  it('Form password', async () => {
    const wrapper = shallowMount(Account, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $swal: {
          mixin: jest.fn(() => {
            return {
              queue: jest.fn().mockReturnValue({
                value: ['123', '234', '345', '456'],
              }),
            };
          }),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    await wrapper.vm.formPassword();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Konfirmasi password lama salah!', 5000);

    wrapper.vm.$swal.mixin.mockReturnValue({
      queue: jest.fn().mockReturnValue({
        value: ['123', '123', '345', '456'],
      }),
    });

    await wrapper.vm.formPassword();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Konfirmasi password baru salah!', 5000);

    wrapper.vm.$swal.mixin.mockReturnValue({
      queue: jest.fn().mockReturnValue({
        value: ['123', '123', '345', '345'],
      }),
    });

    const spy = jest.spyOn(wrapper.vm, 'changePasswordUser').mockImplementation(() => { return });
    await wrapper.vm.formPassword();

    // expect
    expect(spy).toBeCalled();
  });
  // it form password

  // it changePasswordUser
  it('Change password user', async () => {
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

    const spy = jest.spyOn(wrapper.vm, 'afterChangePassword');
    jest.spyOn(wrapper.vm, 'promiseChangePassword').mockImplementation(() => {
      Promise.resolve(200);
    });
    await wrapper.vm.changePasswordUser();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it changePasswordUser

  // it promiseChangePassword
  it('Promise change password', () => {
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

    const spy = jest.spyOn(wrapper.vm, 'changePassword');
    wrapper.vm.promiseChangePassword({ id: 1 });

    // expect
    expect(spy).toBeCalledWith({
      params: {
        id: 1,
      },
      resolve: expect.any(Function),
    });
  });
  // it promiseChangePassword

  // it afterChangePassword
  it('After trigger notif', () => {
    const wrapper = shallowMount(Account, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
          remove: jest.fn(),
        },
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
          popupSuccessfull: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.vm.afterChangePassword(200);

    // expect
    expect(wrapper.vm.$cookies.remove).toBeCalledWith('user');
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalledWith('Berhasil, silahkan login kembali', 5000, { name: 'Login' });

    wrapper.vm.afterChangePassword(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterChangePassword
});
// end describe method
