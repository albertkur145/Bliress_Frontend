import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Batch from '@/views/admin/batch/Batch.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getBatch: jest.fn(),
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
    const wrapper = shallowMount(Batch, {
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
      getBatch: jest.fn(),
      postBatch: jest.fn(),
    };

    getters = {
      batchList: jest.fn().mockReturnValue({
        data: {},
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

  // it get all batch
  it('Get all batch', async () => {
    const wrapper = shallowMount(Batch, {
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

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(Batch, {
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
  // it data ready branch

  // it input dialog
  it('Input dialog', async () => {
    const wrapper = shallowMount(Batch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $swal: {
          mixin: jest.fn(() => {
            return {
              queue: jest.fn().mockReturnValue({
                value: [
                  {
                    length: 2,
                  },
                  {
                    length: 2,
                  },
                ],
              }),
            };
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

    const spyAddBatch = jest.spyOn(wrapper.vm, 'addBatch').mockImplementation(() => { return; });
    await wrapper.vm.inputDialog();

    // expect
    expect(spyAddBatch).toBeCalled();

    wrapper.vm.$swal.mixin.mockImplementation(() => {
      return {
        queue: jest.fn().mockReturnValue({
          value: [
            {
              length: 0,
            },
            {
              length: 2,
            },
          ],
        }),
      };
    });
    await wrapper.vm.inputDialog();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();
  });
  // it input dialog

  // it add batch
  it('Add batch', async () => {
    const wrapper = shallowMount(Batch, {
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

    jest.spyOn(wrapper.vm, 'promiseAddBatch').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterAddBatch = jest.spyOn(wrapper.vm, 'afterAddBatch').mockImplementation(() => { return; });
    await wrapper.vm.addBatch();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterAddBatch).toBeCalled();
  });
  // it add batch

  // it promise add batch
  it('Promise add batch', () => {
    const wrapper = shallowMount(Batch, {
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

    const spyPostBatch = jest.spyOn(wrapper.vm, 'postBatch');
    wrapper.vm.promiseAddBatch(['2', '5']);

    // expect
    expect(spyPostBatch).toBeCalled();
    expect(spyPostBatch).toBeCalledWith({
      params: {
        batch: 2,
        year: 5,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise add batch

  // it after add batch
  it('After add batch', () => {
    const wrapper = shallowMount(Batch, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
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

    wrapper.vm.afterAddBatch(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalledWith('Berhasil tambah batch baru', 5000, { name: 'AdminBatch' });

    wrapper.vm.afterAddBatch(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after add batch
});
// end describe method
