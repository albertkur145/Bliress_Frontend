import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Training from '@/views/employee/training/Training.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;
  let actionsNotif;
  let gettersNotif;

  // before each
  beforeEach(() => {
    actions = {
      getTrainings: jest.fn(),
    };

    actionsNotif = {
      getTriggerNotif: jest.fn(),
    };

    gettersNotif = {
      triggerNotif: jest.fn(() => {
        return {
          data: {
            hasNotif: true,
          },
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions,
        },
        employeeNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
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
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
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
  let store;
  let getters;
  let actionsNotif;
  let gettersNotif;

  // before each
  beforeEach(() => {
    actions = {
      getTrainings: jest.fn(),
    };

    actionsNotif = {
      getTriggerNotif: jest.fn(),
    };

    getters = {
      trainingList: jest.fn(() => {
        return {
          data: {},
        };
      }),
    };

    gettersNotif = {
      triggerNotif: jest.fn(() => {
        return {
          data: {
            hasNotif: true,
          },
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions,
          getters,
        },
        employeeNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
      },
    });
  });
  // before each

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Training, {
      data() {
        return {
          promise: 200,
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.promise).toBe(200);

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it get all training
  it('Get all training', async () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
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

  // it is has notif
  it('Is has notif', async () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseIsHasNotif').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterTriggerNotif').mockImplementation(() => {
      return;
    });

    await wrapper.vm.isHasNotif();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it is has notif

  // it after trigger notif
  it('After trigger notif', () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.vm.afterTriggerNotif(200);

    // expect
    expect(wrapper.vm.hasNotif).toBe(wrapper.vm.triggerNotif.data.hasNotif);

    wrapper.vm.afterTriggerNotif(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after trigger notif
});
// end describe method
