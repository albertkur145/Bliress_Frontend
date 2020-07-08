import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTraining from '@/views/trainer/training/DetailTraining.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when create
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainingBy: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerTraining: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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
// end describe when create


// describe method
describe('Method', () => {
  let actionsTraining;
  let actionsMaterial;
  let gettersTraining;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainingBy: jest.fn(),
    };

    gettersTraining = {
      trainingBy: jest.fn().mockReturnValue({
        data: {
          materials: {},
          batch: {},
          employees: {},
        },
      }),
    };

    actionsMaterial = {
      deleteMaterial: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerTraining: {
          namespaced: true,
          getters: gettersTraining,
          actions: actionsTraining,
        },
        trainerMaterial: {
          namespaced: true,
          actions: actionsMaterial,
        },
      },
    });
  });
  // before each

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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
    expect(wrapper.vm.materials).toBe(wrapper.vm.trainingBy.data.materials);
    expect(wrapper.vm.batch).toBe(wrapper.vm.trainingBy.data.batch);
    expect(wrapper.vm.employees).toBe(wrapper.vm.trainingBy.data.employees);

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch

  // it getTrainingById after promise
  it('After promise getTrainingById', async () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    jest.spyOn(wrapper.vm, 'promiseGetTrainingById').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getTrainingById();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getTrainingById after promise

  // it redirectToUpload
  it('Redirect to upload', () => {
    const wrapper = shallowMount(DetailTraining, {
      data() {
        return {
          apiReady: true,
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $router: {
          push: jest.fn(),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    wrapper.find('#container .content .material-list .top .add').trigger('click');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'TrainerUploadMaterial',
      params: {
        training: wrapper.vm.paramTraining,
        batch: wrapper.vm.paramBatch,
      },
    });
  });
  // it redirectToUpload

  // it confirmDelete
  it('Confirm delete', async () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn(() => {
            return {
              value: true,
            };
          }),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    const spyDeleteData = jest.spyOn(wrapper.vm, 'deleteData').mockImplementation(() => { return; });
    await wrapper.vm.confirmDelete();

    // expect
    expect(spyDeleteData).toBeCalled();

    spyDeleteData.mockClear();
    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({
      value: false,
    });
    await wrapper.vm.confirmDelete();

    // expect
    expect(spyDeleteData).not.toBeCalled();
  })
  // it confirmDelete

  // it deleteData
  it('Delete data', async () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    jest.spyOn(wrapper.vm, 'promiseDeleteData').mockImplementation(() => {
      Promise.resolve(200);
    });
    const afterDeleteData = jest.spyOn(wrapper.vm, 'afterDeleteData').mockImplementation(() => { return; });
    await wrapper.vm.deleteData();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(afterDeleteData).toBeCalled();
  })
  // it deleteData

  // it promiseDeleteData
  it('Promise delete data', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    const spyDeleteMaterial = jest.spyOn(wrapper.vm, 'deleteMaterial');
    wrapper.vm.promiseDeleteData(2);

    // expect
    expect(spyDeleteMaterial).toBeCalled();
    expect(spyDeleteMaterial).toBeCalledWith({
      params: {
        batchId: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        materialId: 2,
      },
      resolve: expect.any(Function),
    });
  })
  // it promiseDeleteData

  // it afterDeleteData
  it('After delete data', () => {
    const wrapper = shallowMount(DetailTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
        $route: {
          params: {
            training: 1,
            batch: 1,
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

    wrapper.vm.afterDeleteData(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterDeleteData(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  })
  // it afterDeleteData
});
// end describe method
