import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Test from '@/views/admin/test/Test.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getBatchTraining: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Test, {
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
  let actionsTraining;
  let actionsBatch;
  let gettersTraining;
  let gettersBatch;
  let store;

  // before each
  beforeEach(() => {
    actionsTraining = {
      getTrainings: jest.fn(),
    };

    gettersTraining = {
      trainingList: jest.fn().mockReturnValue({
        data: {
          trainingList: [{ stage: '1', stage: '2' }],
        },
      }),
    };

    actionsBatch = {
      getBatch: jest.fn(),
    };

    gettersBatch = {
      batchList: jest.fn().mockReturnValue({
        data: {
          batchList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          getters: gettersBatch,
          actions: actionsBatch,
        },
        adminTraining: {
          namespaced: true,
          getters: gettersTraining,
          actions: actionsTraining,
        },
      },
    });
  });
  // before each

  // it get all batch
  it('Get all batch', async () => {
    const wrapper = shallowMount(Test, {
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
    const spy = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getAllBatch();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get all batch

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Test, {
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
  // it data ready

  // it get all training
  it('Get all training', async () => {
    const wrapper = shallowMount(Test, {
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

    jest.spyOn(wrapper.vm, 'promiseGetAllTraining').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spy = jest.spyOn(wrapper.vm, 'afterGetTraining').mockImplementation(() => { return; });

    await wrapper.vm.getAllTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spy).toBeCalled();
  });
  // it get all training

  // it promise get all training
  it('Promise get all training', () => {
    const wrapper = shallowMount(Test, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn(),
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
    wrapper.vm.promiseGetAllTraining('1');

    // expect
    expect(spy).toBeCalled();
  });
  // it promise get all training

  // it after get training
  it('After get training', () => {
    const wrapper = shallowMount(Test, {
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

    const spy = jest.spyOn(wrapper.vm, 'popupTraining').mockImplementation(() => { return });
    wrapper.vm.afterGetTraining(200, '');

    // expect
    expect(spy).toBeCalled();

    wrapper.vm.afterGetTraining(404, '');

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after get training

  // it popup training
  it('Popup training', async () => {
    const wrapper = shallowMount(Test, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $swal: {
          fire: jest.fn().mockReturnValue({ value: true }),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'getTrainingStage');
    const spy = jest.spyOn(wrapper.vm, 'redirectToDetail').mockImplementation(() => { return });

    await wrapper.vm.popupTraining();

    // expect
    expect(spy).toBeCalled();
    spy.mockClear();

    wrapper.vm.$swal.fire.mockReturnValue({ value: false });
    await wrapper.vm.popupTraining();

    // expect
    expect(spy).not.toBeCalled();
  });
  // it popup training

  // it get training stage
  it('Get training stage', () => {
    const wrapper = shallowMount(Test, {
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

    wrapper.vm.getTrainingStage();
  });
  // it get training stage

  // it redirectToDetail
  it('Redirect to detail', () => {
    const wrapper = shallowMount(Test, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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

    wrapper.vm.redirectToDetail('202006', '2');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
  });
  // it redirectToDetail
});
// end describe method
