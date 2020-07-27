import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Employee from '@/views/admin/other/employee/Employee.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getEmployees: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminEmployee: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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
      getEmployees: jest.fn(),
      deleteEmployee: jest.fn(),
    };

    getters = {
      employeeList: jest.fn().mockReturnValue({
        data: {
          employeeList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminEmployee: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all employee
  it('Get all employee', async () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseGetAllEmployee').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllEmployee();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all employee

  // it promise get all employee
  it('Promise get all employee', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    const spy = jest.spyOn(wrapper.vm, 'getEmployees');
    wrapper.vm.promiseGetAllEmployee();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise get all employee

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
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

  // it delete
  it('Delete', async () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseDelete').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterDelete = jest.spyOn(wrapper.vm, 'afterDelete').mockImplementation(() => { return; });
    await wrapper.vm.delete(14);

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterDelete).toBeCalled();
  });
  // it delete

  // it promise delete
  it('Promise delete', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    const spyDeleteEmployee = jest.spyOn(wrapper.vm, 'deleteEmployee');
    wrapper.vm.promiseDelete(2);

    // expect
    expect(spyDeleteEmployee).toBeCalled();
  });
  // it promise delete

  // it after delete
  it('After delete', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccess: jest.fn(),
          popupLostConnection: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.afterDelete(200);

    // expect
    expect(wrapper.vm.$func.popupSuccess).toBeCalled();

    wrapper.vm.afterDelete(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after delete

  // it redirect create employee
  it('Redirect create employee', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
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
        'router-link',
      ],
    });

    wrapper.vm.redirectCreateEmployee(12);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminChangeEmployee',
      params: {
        id: 12,
      },
    });
  });
  // it redirect create employee

  // it confirm delete
  it('Confirm delete', async () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({
            value: true,
          }),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spyDelete = jest.spyOn(wrapper.vm, 'delete').mockImplementation(() => { return; });
    await wrapper.vm.confirmDelete(20);

    // expect
    expect(spyDelete).toBeCalled();

    spyDelete.mockClear();
    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({
      value: false,
    });
    await wrapper.vm.confirmDelete(20);

    // expect
    expect(spyDelete).not.toBeCalled();
  });
  // it confirm delete
});
// end describe method
