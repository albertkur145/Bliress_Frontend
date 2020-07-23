import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTraining from '@/views/employee/training/DetailTraining.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actionsTraining;
  let actionsMaterial;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainingBy: jest.fn(),
      getAttendance: jest.fn(),
    };

    actionsMaterial = {
      getMaterials: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions: actionsTraining,
        },
        employeeMaterial: {
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
            training: {},
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
// end descirbe when created


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
      getAttendance: jest.fn(),
    };

    actionsMaterial = {
      getMaterials: jest.fn(),
    };

    gettersTraining = {
      trainingBy: jest.fn(() => {
        return {
          data: {
            training: {},
          },
        };
      }),
      attendanceUser: jest.fn(() => {
        return {
          data: {
            hasAttend: '',
          },
        };
      }),
    };

    gettersMaterial = {
      materialList: jest.fn(() => {
        return {
          data: {
            materialList: [],
          },
        };
      }),
    },

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions: actionsTraining,
          getters: gettersTraining,
        },
        employeeMaterial: {
          namespaced: true,
          actions: actionsMaterial,
          getters: gettersMaterial,
        },
      },
    });
  });
  // before each

  // it get training by id
  it('Get training by id', async () => {
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
            training: {},
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

    jest.spyOn(wrapper.vm, 'promiseGetTraining').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetTraining').mockImplementation(() => { return });
    await wrapper.vm.getTrainingByID();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get training by id

  // it promiseGetTraining
  it('Promise get training', () => {
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
            training: {},
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

    const spy = jest.spyOn(wrapper.vm, 'getTrainingBy');
    wrapper.vm.promiseGetTraining();

    // expect
    expect(spy).toBeCalled();
  });
  // it promiseGetTraining

  // it afterGetTraining
  it('After get training', () => {
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
            training: {},
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

    wrapper.vm.afterGetTraining(200);

    // expect
    expect(wrapper.vm.training).toStrictEqual(wrapper.vm.trainingBy.data.training);

    wrapper.vm.afterGetTraining(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetTraining

  // it getMaterialByID
  it('Get material by id', async () => {
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
            training: {},
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

    jest.spyOn(wrapper.vm, 'promiseGetMaterialByID').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetMaterial').mockImplementation(() => { return });
    await wrapper.vm.getMaterialByID();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it getMaterialByID

  // it promiseGetMaterialByID
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
            training: {},
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

    const spy = jest.spyOn(wrapper.vm, 'getMaterials');
    wrapper.vm.promiseGetMaterialByID();

    // expect
    expect(spy).toBeCalled();
  });
  // it promiseGetMaterialByID

  // it afterGetMaterial
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
            training: {},
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

    wrapper.vm.afterGetMaterial(200);

    // expect
    expect(wrapper.vm.material).toStrictEqual(wrapper.vm.materialList.data.materialList);

    wrapper.vm.afterGetMaterial(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetMaterial

  // it getAttendanceUser
  it('Get attendance user', async () => {
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
            training: {},
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

    jest.spyOn(wrapper.vm, 'promiseGetAttendance').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetAttendance').mockImplementation(() => { return });
    await wrapper.vm.getAttendanceUser();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it getAttendanceUser

  // it promiseGetAttendance
  it('Promise get attendance', () => {
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
            training: {},
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

    const spy = jest.spyOn(wrapper.vm, 'getAttendance');
    wrapper.vm.promiseGetAttendance();

    // expect
    expect(spy).toBeCalled();
  });
  // it promiseGetAttendance

  // it afterGetAttendance
  it('After get attendance', () => {
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
            training: {},
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

    wrapper.vm.afterGetAttendance(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.isAttend).toStrictEqual(wrapper.vm.attendanceUser.data.hasAttend);

    wrapper.vm.afterGetAttendance(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetAttendance

  // it redirectTest
  it('Redirect test', () => {
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
            training: {},
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

    wrapper.vm.redirectTest();

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
  });
  // it redirectTest
});
// end describe method
