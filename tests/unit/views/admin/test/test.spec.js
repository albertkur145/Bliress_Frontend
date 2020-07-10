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
  let actions;
  let getters;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getBatchTraining: jest.fn(),
    };

    getters = {
      batchTrainingList: jest.fn().mockReturnValue({
        data: [
          {
            id: 202006,
            batch: 'Juni',
            year: 2020,
            training: [],
          },
        ],
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all batch training
  it('Get all batch training', async () => {
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

    jest.spyOn(wrapper.vm, 'promiseGetAll').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getAllBatchTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all batch training

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

  // it show detail training
  it('Show detail training', async () => {
    const wrapper = shallowMount(Test, {
      data() {
        return {
          apiReady: true,
        };
      },
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

    const spyShow = jest.spyOn(wrapper.vm, 'showDetailTraining').mockImplementation();
    wrapper.find('.batch-Juni .general').trigger('click');

    // expect
    expect(spyShow).toBeCalled();
  });
  // it show detail training

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

    wrapper.vm.redirectToDetail(202006, '2');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminDetailTest',
      params: {
        batch: 202006,
        training: '2',
      },
    });
  });
  // it redirectToDetail
});
// end describe method
