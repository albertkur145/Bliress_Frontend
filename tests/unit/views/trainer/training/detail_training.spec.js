import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTraining from '@/views/trainer/training/DetailTraining.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when create
describe('When created', () => {
  let actionsTraining;
  let actionsMaterial;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainingBy: jest.fn(),
    };

    actionsMaterial = {
      getMaterial: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerTraining: {
          namespaced: true,
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
            training: '1',
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
// end describe when create


// describe method
describe('Method', () => {
  let actionsTraining;
  let actionsMaterial;
  let gettersTraining;
  let gettersMaterial;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainingBy: jest.fn(),
    };

    gettersTraining = {
      trainingBy: jest.fn().mockReturnValue({
        data: {
          employee: {},
        },
      }),
    };

    actionsMaterial = {
      deleteMaterial: jest.fn(),
      getMaterial: jest.fn(),
    };

    gettersMaterial = {
      materialList: jest.fn().mockReturnValue({
        data: {
          materialList: [],
        },
      }),
    },

    store = new Vuex.Store({
      modules: {
        trainerTraining: {
          namespaced: true,
          getters: gettersTraining,
          actions: actionsTraining,
        },
        trainerMaterial: {
          namespaced: true,
          getters: gettersMaterial,
          actions: actionsMaterial,
        },
      },
    });
  });
  // before each

  // it afterGetTraining
  it('After get training ', () => {
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
            training: '1',
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
    expect(wrapper.vm.employee).toBe(wrapper.vm.trainingBy.data.employee);

    wrapper.vm.afterGetTraining(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetTraining branch

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
            training: '1',
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

    jest.spyOn(wrapper.vm, 'promiseGetTrainingById').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetTraining').mockImplementation(() => { return; });

    await wrapper.vm.getTrainingById();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
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
            training: '1',
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

    wrapper.find('#container .content .material-list .top .add').trigger('click');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
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
            training: '1',
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
            training: '1',
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
            training: '1',
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

    const spyDeleteMaterial = jest.spyOn(wrapper.vm, 'deleteMaterial');
    wrapper.vm.promiseDeleteData(2);

    // expect
    expect(spyDeleteMaterial).toBeCalled();
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
            training: '1',
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

    wrapper.vm.afterDeleteData(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterDeleteData(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  })
  // it afterDeleteData

  // it get material list
  it('Get material list', async () => {
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
            training: '1',
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

    jest.spyOn(wrapper.vm, 'promiseGetMaterial').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetMaterial').mockImplementation(() => { return });
    await wrapper.vm.getMaterialList();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get material list

  // it promiseGetMaterial
  it('Promise get material', () => {
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
            training: '1',
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

    const spy = jest.spyOn(wrapper.vm, 'promiseGetMaterial');
    wrapper.vm.promiseGetMaterial();

    // expect
    expect(spy).toBeCalled();
  });
  // it promiseGetMaterial

  // it after get material
  it('After get material', () => {
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
            training: '1',
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

    wrapper.vm.afterGetMaterial(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.materials).toBe(wrapper.vm.materialList.data.materialList);

    wrapper.vm.afterGetMaterial(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get material
});
// end describe method
