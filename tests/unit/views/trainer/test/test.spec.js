import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Test from '@/views/trainer/test/Test.vue';

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
        trainerTraining: {
          namespaced: true,
          actions,
        },
        trainerNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
      },
    });
  });
  // before each

  it('User auth', () => {
    const wrapper = shallowMount(Test, {
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
        'router-link',
      ],
    });

    // expect
    expect(wrapper.vm.$func.userAuth).toBeCalled();
  });
});
// end describe when created


// describe method
describe('Method', () => {
  let actions;
  let getters;
  let store;
  let actionsNotif;
  let gettersNotif;

  // before each
  beforeEach(() => {
    actions = {
      getTrainings: jest.fn(),
    };

    getters = {
      trainingList: jest.fn().mockReturnValue({
        data: {},
      }),
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
        trainerTraining: {
          namespaced: true,
          getters,
          actions,
        },
        trainerNotification: {
          namespaced: true,
          actions: actionsNotif,
          getters: gettersNotif,
        },
      },
    });
  });
  // before each

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(Test, {
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
        'router-link',
      ],
    });

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch

  // it getAllTraining after promise
  it('After promise', async () => {
    const wrapper = shallowMount(Test, {
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
        'router-link',
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
  // it getAllTraining after promise

  // it redirectToDetail
  it('Redirect to detail', () => {
    const wrapper = shallowMount(Test, {
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
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.redirectToDetail(1, 2);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'TrainerDetailTest',
      params: {
        batch: 1,
        training: 2,
      },
    });
  });
  // it redirectToDetail

  // it is has notif
  it('Is has notif', async () => {
    const wrapper = shallowMount(Test, {
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
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseIsHasNotif').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterTriggerNotif').mockImplementation(() => { return; });

    await wrapper.vm.isHasNotif();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it is has notif

  // it after trigger notif
  it('After trigger notif', () => {
    const wrapper = shallowMount(Test, {
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
        'router-link',
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
