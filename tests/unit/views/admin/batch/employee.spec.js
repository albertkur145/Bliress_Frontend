import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Employee from '@/views/admin/batch/Employee.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getEmployeesBatch: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminEmployee: {
          namespaced: true,
          actions,
        }
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
        $route: {
          params: {
            batch: {
              split: jest.fn().mockReturnValue(['1', '2']),
            },
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
      getEmployeesBatch: jest.fn(),
    };

    getters = {
      batchEmployeeList: jest.fn().mockReturnValue({
        data: {
          employeeList: {},
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminEmployee: {
          namespaced: true,
          getters,
          actions,
        }
      },
    });
  });
  // before each

  // it get all employees
  it('Get all employees', async () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: {
              split: jest.fn().mockReturnValue(['1', '2']),
            },
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

    jest.spyOn(wrapper.vm, 'promiseGetAllEmployees').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getAllEmployees();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all employees

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Employee, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: {
              split: jest.fn().mockReturnValue(['1', '2']),
            },
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
    expect(wrapper.vm.employee).toStrictEqual(wrapper.vm.batchEmployeeList.data.employeeList);

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready
});
// end describe method