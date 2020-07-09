import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailBatch from '@/views/admin/batch/DetailBatch.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getBatchBy: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          actions,
        }
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
            batch: 202006,
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
      getBatchBy: jest.fn(),
      deleteBatch: jest.fn(),
    };

    getters = {
      batchBy: jest.fn().mockReturnValue({
        data: {
          batch: {},
          training: {
            slice: jest.fn(),
          },
          employee: {
            slice: jest.fn(),
          },
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          getters,
          actions,
        }
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
            batch: 202006,
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
            batch: 202006,
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
            batch: 202006,
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
            batch: 202006,
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

  // it get detail by batch
  it('Get detail by batch', async () => {
    const wrapper = shallowMount(DetailBatch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    jest.spyOn(wrapper.vm, 'promiseGetDetailByBatch').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterGetDetailByBatch = jest.spyOn(wrapper.vm, 'afterGetDetailByBatch').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getDetailByBatch();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterGetDetailByBatch).toBeCalled();
  });
  // it get detail by batch

  // it promise get detail batch
  it('Promise get detail by batch', () => {
    const wrapper = shallowMount(DetailBatch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    const spyGetBatchBy = jest.spyOn(wrapper.vm, 'getBatchBy');
    wrapper.vm.promiseGetDetailByBatch();

    // expect
    expect(spyGetBatchBy).toBeCalled();
    expect(spyGetBatchBy).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise get detail batch

  // it afterGetDetailByBatch
  it('After get detail by batch', () => {
    const wrapper = shallowMount(DetailBatch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    wrapper.vm.afterGetDetailByBatch(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.batch).toStrictEqual(wrapper.vm.batchBy.data.batch);
    expect(wrapper.vm.training).toStrictEqual(wrapper.vm.batchBy.data.training);
    expect(wrapper.vm.employee).toStrictEqual(wrapper.vm.batchBy.data.employee);

    wrapper.vm.afterGetDetailByBatch(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetDetailByBatch
});
// describe method
