import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Training from '@/views/trainer/training/Training.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when create
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
  let actions;
  let getters;
  let store;

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

    store = new Vuex.Store({
      modules: {
        trainerTraining: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it data ready branch
  it('Data ready - branch', () => {
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

  // it getAllTraining after promise
  it('After promise', async () => {
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
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getAllTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllTraining after promise

  // it getAllTraining after promise
  it('After promise', () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
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
      name: 'TrainerDetailTraining',
      params: {
        training: 1,
        batch: 2,
      },
    });
  });
  // it getAllTraining after promise
});
// end describe method
