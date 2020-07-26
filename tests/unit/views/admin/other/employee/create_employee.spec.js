import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CreateEmployee from '@/views/admin/other/employee/CreateEmployee.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actionsBatch;
  let actionsEmployee;
  let store;

  // before each
  beforeEach(() => {
    actionsBatch = {
      getBatch: jest.fn(),
    };

    actionsEmployee = {
      getEmployee: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          actions: actionsBatch,
        },
        adminEmployee: {
          namespaced: true,
          actions: actionsEmployee,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    // expect
    expect(wrapper.vm.$func.userAuth).toBeCalled();
  });
  // it user auth
});
// end describe when created


// describe method
describe('Method', () => {
  let actionsBatch;
  let actionsEmployee;
  let gettersBatch;
  let gettersEmployee;
  let store;

  // before each
  beforeEach(() => {
    actionsBatch = {
      getBatch: jest.fn(),
    };

    actionsEmployee = {
      getEmployee: jest.fn(),
      postEmployee: jest.fn(),
      putEmployee: jest.fn(),
      resetPassword: jest.fn(),
    };

    gettersBatch = {
      batchList: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    gettersEmployee = {
      employeeData: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          getters: gettersBatch,
          actions: actionsBatch,
        },
        adminEmployee: {
          namespaced: true,
          getters: gettersEmployee,
          actions: actionsEmployee,
        },
      },
    });
  });
  // before each

  // it get all batch
  it('Get all batch', async () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    jest.spyOn(wrapper.vm, 'promiseGetAllBatch').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllBatch();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all batch

  // it promise get all batch
  it('Promise get all batch', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    const spy = jest.spyOn(wrapper.vm, 'getBatch');
    wrapper.vm.promiseGetAllBatch();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise get all batch

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    wrapper.vm.dataReady(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it get detail employee
  it('Get detail employee', async () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    jest.spyOn(wrapper.vm, 'promiseGetDetailEmployee').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfter = jest.spyOn(wrapper.vm, 'afterGetDetailEmployee').mockImplementation(() => { return; });
    await wrapper.vm.getDetailEmployee();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfter).toBeCalled();
  });
  // it get detail employee

  // it promise get detail employee
  it('Promise get detail employee', () => {
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            id: 5,
          },
        },
        $cookies :{
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

    const spy = jest.spyOn(wrapper.vm, 'getEmployee');
    wrapper.vm.promiseGetDetailEmployee();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise get detail employee

  // it after get detail employee
  it('After get detail employee', () => {
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    const spySetForm = jest.spyOn(wrapper.vm, 'setForm').mockImplementation(() => { return; });
    wrapper.vm.afterGetDetailEmployee(200);

    // expect
    expect(spySetForm).toBeCalled();

    wrapper.vm.afterGetDetailEmployee(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get detail employee

  // it set form
  it('Set form', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    const data = {
      username: 'a',
      usermail: 'b',
      phoneNumber: 'd',
      division: 'e',
      birthdate: {
        split: jest.fn().mockReturnValue(['1', '2', '3']),
      },
      gender: 'g',
      batchId: 'h',
    };
    wrapper.vm.setForm(data);

    // expect
    expect(wrapper.vm.form).toStrictEqual({
      name: data.username,
      email: data.usermail,
      password: 'blibliprobation',
      phoneNumber: data.phoneNumber,
      division: data.division,
      birthdate: `3-2-1`,
      gender: data.gender,
      batchId: data.batchId,
    });
  });
  // it set form

  // it req api
  it('Req api', async () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    jest.spyOn(wrapper.vm, 'promiseReqApi').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterReqApi = jest.spyOn(wrapper.vm, 'afterReqApi').mockImplementation(() => { return; });
    await wrapper.vm.reqApi();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterReqApi).toBeCalled();
  });
  // it req api

  // it promise req api
  it('Promise req api', () => {
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn(),
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

    const spy = jest.spyOn(wrapper.vm, 'postEmployee');
    wrapper.vm.promiseReqApi(wrapper.vm.postEmployee);

    // expect
    expect(spy).toBeCalled();
  });
  // it promise req api

  // it after req api
  it('After req api', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    wrapper.vm.afterReqApi(202);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterReqApi(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after req api

  // it toogle password
  it('Toogle password', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

  // it save
  it('Save', () => {
    const wrapper = shallowMount(CreateEmployee, {
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

    const spy = jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => { return; });
    wrapper.setData({
      paramId: 1,
    });
    wrapper.vm.save();

    // expect
    expect(wrapper.vm.form.id).toBe(wrapper.vm.paramId);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(wrapper.vm.putEmployee);

    spy.mockClear();
    wrapper.setData({
      paramId: null,
    });
    wrapper.vm.save();

    // expect
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(wrapper.vm.postEmployee);
  });
  // it save

  // it validate form
  it('Validate form', () => {
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
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
        password: 'a',
        division: 'a',
        batchId: 'a',
        email: 'albertkgmail.com',
      },
    });
    wrapper.vm.validationForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Email tidak valid!', 0);

    wrapper.setData({
      form: {
        name: 'a',
        password: 'a',
        division: 'a',
        batchId: 'a',
        email: 'albert@gmail.com',
        phoneNumber: '55121s2',
      },
    });
    wrapper.vm.validationForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalledWith('Nomor HP tidak valid!', 0);

    wrapper.setData({
      form: {
        name: 'a',
        password: 'a',
        division: 'a',
        batchId: 'a',
        email: 'albert@gmail.com',
        phoneNumber: '081299524475',
      },
    });
    const spy = jest.spyOn(wrapper.vm, 'save').mockImplementation(() => { return; });
    wrapper.vm.validationForm();

    // expect
    expect(spy).toBeCalled();
  });
  // it validate form

  // it confirm reset
  it('Confirm reset', async () => {
    const wrapper = shallowMount(CreateEmployee, {
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
    const wrapper = shallowMount(CreateEmployee, {
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
    const wrapper = shallowMount(CreateEmployee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn(),
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

    const spy = jest.spyOn(wrapper.vm, 'resetPassword');
    wrapper.vm.promiseResetPassword();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise reset password

  // it afterResetPassword
  it('After reset password', () => {
    const wrapper = shallowMount(CreateEmployee, {
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
