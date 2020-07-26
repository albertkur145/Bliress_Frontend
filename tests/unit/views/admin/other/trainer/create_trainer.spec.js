import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CreateTrainer from '@/views/admin/other/trainer/CreateTrainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainer: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 2,
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
// end describe when created


// describe method
describe('Method', () => {
  let actions;
  let getters;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainer: jest.fn(),
      postTrainer: jest.fn(),
      putTrainer: jest.fn(),
      resetPassword: jest.fn(),
    };

    getters = {
      trainerData: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it toogle password
  it('Toogle password', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: null,
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

    wrapper.setData({
      passwordType: 'password',
    });
    wrapper.vm.tooglePassword();

    // expect
    expect(wrapper.vm.passwordType).toBe('text');
    expect(wrapper.vm.showPasswordIcon).toBe('eye');

    wrapper.setData({
      passwordType: 'text',
    });
    wrapper.vm.tooglePassword();

    // expect
    expect(wrapper.vm.passwordType).toBe('password');
    expect(wrapper.vm.showPasswordIcon).toBe('eye-slash');
  });
  // it toogle password

  // it get detail trainer
  it('Get detail trainer', async () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 2,
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

    jest.spyOn(wrapper.vm, 'promiseGetDetailTrainer').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyPromise = jest.spyOn(wrapper.vm, 'afterGetDetailTrainer').mockImplementation(() => { return; });
    await wrapper.vm.getDetailTrainer();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyPromise).toBeCalled();
  });
  // it get detail trainer

  // it after get detail trainer
  it('After get detail trainer', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            id: 2,
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

    const spy = jest.spyOn(wrapper.vm, 'setForm');
    wrapper.vm.afterGetDetailTrainer(200);

    // expect
    expect(spy).toBeCalled();

    wrapper.vm.afterGetDetailTrainer(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get detail trainer

  // it set form
  it('Set form', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 2,
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
      username: 'a',
      usermail: 'b',
      password: 'blibliprobation',
      division: 'd',
    };
    wrapper.vm.setForm(data);

    // expect
    expect(wrapper.vm.form).toStrictEqual({
      name: data.username,
      email: data.usermail,
      password: 'blibliprobation',
      division: data.division,
    });
  });
  // it set form

  // it save
  it('Save', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: null,
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

    const spyReqApi = jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => { return; });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();
    expect(spyReqApi).toBeCalledWith(wrapper.vm.postTrainer);

    spyReqApi.mockClear();
    wrapper.setData({
      paramId: 2,
    });
    wrapper.vm.save();

    // expect
    expect(spyReqApi).toBeCalled();
    expect(spyReqApi).toBeCalledWith(wrapper.vm.putTrainer);
  });
  // it save

  // it req api
  it('Req api', async () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: null,
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

    jest.spyOn(wrapper.vm, 'promiseReqApi').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfter = jest.spyOn(wrapper.vm, 'afterReqApi').mockImplementation(() => { return; });
    await wrapper.vm.reqApi();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfter).toBeCalled();
  });
  // it req api

  // it promise req api
  it('Promise req api', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: null,
          },
        },
        $cookies: {
          get: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spy = jest.spyOn(wrapper.vm, 'postTrainer');
    wrapper.vm.promiseReqApi(wrapper.vm.postTrainer);

    // expect
    expect(spy).toBeCalled();
  });
  // it promise req api

  // it after req api
  it('After req api', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            id: null,
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

    wrapper.vm.afterReqApi(202);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterReqApi(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after req api

  // it validation form
  it('Validation form', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $route: {
          params: {
            id: null,
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

    wrapper.setData({
      form: {
        name: '',
      },
    });
    wrapper.vm.validationForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Form tidak lengkap!', 0);

    wrapper.setData({
      form: {
        name: 'a',
        password: 'b',
        division: 'c',
        email: 'aaa',
      },
    });
    wrapper.vm.validationForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Email tidak valid!', 0);

    wrapper.setData({
      form: {
        name: 'a',
        password: 'b',
        division: 'c',
        email: 'a@gmail.com',
      },
    });
    const spy = jest.spyOn(wrapper.vm, 'save').mockImplementation(() => { return; });
    wrapper.vm.validationForm();

    // expect
    expect(spy).toBeCalled();
  });
  // it validation form

  // it confirm reset
  it('Confirm reset', async () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({
            value: true,
          }),
        },
        $route: {
          params: {
            id: 5,
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

    const spy = jest.spyOn(wrapper.vm, 'resetPasswordUser').mockImplementation(() => { return });
    await wrapper.vm.confirmReset();

    // expect
    expect(spy).toBeCalled();
    spy.mockClear();

    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({ value: false });
    await wrapper.vm.confirmReset();

    expect(spy).not.toBeCalled();
  });
  // it confirm reset

  // it resetPasswordUser
  it('Reset password user', async () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 5,
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

    jest.spyOn(wrapper.vm, 'promiseResetPassword').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterResetPassword').mockImplementation(() => { return; });
    await wrapper.vm.resetPasswordUser();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it resetPasswordUser

  // it promise reset password
  it('Promise reset password', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 5,
          },
        },
        $cookies: {
          get: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spy = jest.spyOn(wrapper.vm, 'resetPassword');
    wrapper.vm.promiseResetPassword();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise reset password

  // it afterResetPassword
  it('After reset password', () => {
    const wrapper = shallowMount(CreateTrainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            id: 5,
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

    wrapper.vm.afterResetPassword(202);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterResetPassword(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterResetPassword
});
// end describe method
