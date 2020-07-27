import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Training from '@/views/admin/batch/Training.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainings: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTraining: {
          namespaced: true,
          actions,
        }
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Training, {
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
      getTrainings: jest.fn(),
      deleteTraining: jest.fn(),
    };

    getters = {
      trainingList: jest.fn().mockReturnValue({
        data: {
          trainingList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTraining: {
          namespaced: true,
          getters,
          actions,
        }
      },
    });
  });
  // before each

  // it get all training
  it('Get all training', async () => {
    const wrapper = shallowMount(Training, {
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

    jest.spyOn(wrapper.vm, 'promiseGetAllTraining').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getAllTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all training

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Training, {
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

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it confirm delete
  it('Confirm delete', async () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn(() => {
            return {
              value: true,
            };
          }),
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

    const spyDeleteData = jest.spyOn(wrapper.vm, 'deleteData').mockImplementation(() => { return; });
    await wrapper.vm.confirmDelete(2);

    // expect
    expect(spyDeleteData).toBeCalledWith(2);

    spyDeleteData.mockClear();
    wrapper.vm.$func.popupConfirmDialog.mockImplementation(() => {
      return {
        value: false,
      };
    });
    await wrapper.vm.confirmDelete();

    // expect
    expect(spyDeleteData).not.toBeCalled();
  });
  // it confirm delete

  // it delete data
  it('Delete data', async () => {
    const wrapper = shallowMount(Training, {
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

    jest.spyOn(wrapper.vm, 'promiseDeleteData').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterDelete = jest.spyOn(wrapper.vm, 'afterDeleteData').mockImplementation(() => { return; });
    await wrapper.vm.deleteData();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterDelete).toBeCalled();
  });
  // it delete data

  // it promise delete data
  it('Promise delete data', () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn(),
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

    const spyDeleteTraining = jest.spyOn(wrapper.vm, 'deleteTraining');
    wrapper.vm.promiseDeleteData(1);

    // expect
    expect(spyDeleteTraining).toBeCalled();
  });
  // it promise delete data

  // it after delete data
  it('After delete data', () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccess: jest.fn(),
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

    wrapper.vm.afterDeleteData(200);

    // expect
    expect(wrapper.vm.$func.popupSuccess).toBeCalled();

    wrapper.vm.afterDeleteData(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  })
  // it after delete data

  // it redirect change training
  it('Redirect change training', () => {
    const wrapper = shallowMount(Training, {
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

    wrapper.vm.redirectChangeTraining(2);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminChangeTraining',
      params: {
        batch: wrapper.vm.paramBatch,
        training: 2,
      },
    });
  });
  // it redirect change training

  // it redirect attendance
  it('Redirect attendance', () => {
    const wrapper = shallowMount(Training, {
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

    wrapper.vm.redirectAttendance(5);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminAttendance',
      params: {
        batch: wrapper.vm.paramBatch,
        training: 5,
      },
    });
  });
  // it redirect attendance

  // it redirect material
  it('Redirect material', () => {
    const wrapper = shallowMount(Training, {
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

    wrapper.vm.redirectMaterial(4);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminMaterialTraining',
      params: {
        batch: wrapper.vm.paramBatch,
        training: 4,
      },
    });
  });
  // it redirect material
});
// describe method
