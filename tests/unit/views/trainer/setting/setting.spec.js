import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Setting from '@/views/trainer/setting/Setting.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let gettersNotification;
  let actionsNotification;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      changePassword: jest.fn(),
    };

    actionsNotification = {
      getTriggerNotif: jest.fn(),
    };

    gettersNotification = {
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
        trainerAccount: {
          namespaced: true,
          actions,
        },
        trainerNotification: {
          namespaced: true,
          getters: gettersNotification,
          actions: actionsNotification,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Setting, {
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
  let gettersNotification;
  let actionsNotification;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      changePassword: jest.fn(),
    };

    actionsNotification = {
      getTriggerNotif: jest.fn(),
    };

    gettersNotification = {
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
        trainerAccount: {
          namespaced: true,
          actions,
        },
        trainerNotification: {
          namespaced: true,
          getters: gettersNotification,
          actions: actionsNotification,
        },
      },
    });
  });
  // before each

  // it has notif
  it('It has notif', async () => {
    const wrapper = shallowMount(Setting, {
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

    jest.spyOn(wrapper.vm, 'promiseIsHasNotif').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterTriggerNotif').mockImplementation(() => { return });
    await wrapper.vm.isHasNotif();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it has notif

  // it promise has notif
  it('It promise has notif', () => {
    const wrapper = shallowMount(Setting, {
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

    const spy = jest.spyOn(wrapper.vm, 'getTriggerNotif');
    wrapper.vm.promiseIsHasNotif();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise has notif

  // it afterTriggerNotif
  it('After trigger notif', () => {
    const wrapper = shallowMount(Setting, {
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
    const wrapper = shallowMount(Setting, {
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
    const wrapper = shallowMount(Setting, {
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
    const wrapper = shallowMount(Setting, {
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
    const wrapper = shallowMount(Setting, {
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

  // it logout
  it('Logout', () => {
    const wrapper = shallowMount(Setting, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
          remove: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.logout();

    // expect
    expect(wrapper.vm.$cookies.remove).toBeCalledWith('user');
    expect(wrapper.vm.$router.push).toBeCalledWith({ name: 'Login' });
  });
  // it logout
});
// end describe method
