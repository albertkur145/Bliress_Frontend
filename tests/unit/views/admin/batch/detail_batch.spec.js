import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailBatch from '@/views/admin/batch/DetailBatch.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actionsTraining;
  let actionsEmployee;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainings: jest.fn(),
    };

    actionsEmployee = {
      getEmployeesBatch: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTraining: {
          namespaced: true,
          actions: actionsTraining,
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
    const wrapper = shallowMount(DetailBatch, {
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
  let actionsBatch;
  let actionsTraining;
  let actionsEmployee;
  let gettersTraining;
  let gettersEmployee;
  let store;

  // before each
  beforeEach(() => {
    actionsBatch = {
      deleteBatch: jest.fn(),
    };

    actionsTraining = {
      getTrainings: jest.fn(),
    };

    gettersTraining = {
      trainingList: jest.fn().mockReturnValue({
        data: {
          trainingList: [],
        },
      }),
    };

    actionsEmployee = {
      getEmployeesBatch: jest.fn(),
    };

    gettersEmployee = {
      batchEmployeeList: jest.fn().mockReturnValue({
        data: {
          employeeList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          actions: actionsBatch,
        },
        adminTraining: {
          namespaced: true,
          actions: actionsTraining,
          getters: gettersTraining,
        },
        adminEmployee: {
          namespaced: true,
          actions: actionsEmployee,
          getters: gettersEmployee,
        },
      },
    });
  });
  // before each

  // it confirmDialog
  it('Confirm dialog', async () => {
    const wrapper = shallowMount(DetailBatch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({ value: true }),
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

    const spyDelete = jest.spyOn(wrapper.vm, 'delete').mockImplementation(() => { return; });
    await wrapper.vm.confirmDialog();

    // expect
    expect(spyDelete).toBeCalled();

    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({ value: false });
    spyDelete.mockClear();
    await wrapper.vm.confirmDialog();

    // expect
    expect(spyDelete).not.toBeCalled();
  });
  // it confirmDialog

  // it delete
  it('Delete', async () => {
    const wrapper = shallowMount(DetailBatch, {
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

    jest.spyOn(wrapper.vm, 'promiseDelete').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterDelete = jest.spyOn(wrapper.vm, 'afterDelete').mockImplementation(() => { return; });
    await wrapper.vm.delete();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterDelete).toBeCalled();
  });
  // it delete

  // it promise delete
  it('Promise delete', () => {
    const wrapper = shallowMount(DetailBatch, {
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

    const spyDeleteBatch = jest.spyOn(wrapper.vm, 'deleteBatch');
    wrapper.vm.promiseDelete();

    // expect
    expect(spyDeleteBatch).toBeCalled();
    expect(spyDeleteBatch).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise delete

  // it after delete
  it('After delete', () => {
    const wrapper = shallowMount(DetailBatch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
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

    wrapper.vm.afterDelete(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalledWith('Sukses hapus data', 5000, { name: 'AdminBatch' });

    wrapper.vm.afterDelete(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after delete

  // it get training
  it('Get training', async () => {
    const wrapper = shallowMount(DetailBatch, {
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

    jest.spyOn(wrapper.vm, 'promiseGetTraining').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetTraining').mockImplementation(() => { return; });
    await wrapper.vm.getTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get training

  // it promise get training
  it('Promise get training', () => {
    const wrapper = shallowMount(DetailBatch, {
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

    const spy = jest.spyOn(wrapper.vm, 'getTrainings');
    wrapper.vm.promiseGetTraining();

    // expect
    expect(spy).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise get training

  // it after get training
  it('After get training', () => {
    const wrapper = shallowMount(DetailBatch, {
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

    wrapper.vm.afterGetTraining(200);

    // expect
    expect(wrapper.vm.training).toStrictEqual(wrapper.vm.trainingList.data.trainingList);

    wrapper.vm.afterGetTraining(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get training

  // it get employee
  it('Get employee', async () => {
    const wrapper = shallowMount(DetailBatch, {
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

    jest.spyOn(wrapper.vm, 'promiseGetEmployee').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetEmployee').mockImplementation(() => { return; });
    await wrapper.vm.getEmployee();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get employee

  // it promise get employee
  it('Promise get employee', () => {
    const wrapper = shallowMount(DetailBatch, {
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

    const spy = jest.spyOn(wrapper.vm, 'getEmployeesBatch');
    wrapper.vm.promiseGetEmployee();

    // expect
    expect(spy).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise get employee

  // it after get employee
  it('After get employee', () => {
    const wrapper = shallowMount(DetailBatch, {
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

    wrapper.vm.afterGetEmployee(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.employee).toStrictEqual(wrapper.vm.batchEmployeeList.data.employeeList);

    wrapper.vm.afterGetEmployee(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get employee
});
// describe method
