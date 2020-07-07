import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTest from '@/views/trainer/test/DetailTest.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getMaterialsTest: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerTest: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  it('User auth', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 1,
            training: 1,
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
      getMaterialsTest: jest.fn(),
    };

    getters = {
      materialTestList: jest.fn().mockReturnValue({
        data: {
          batch: {},
          material: {},
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        trainerTest: {
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
    const wrapper = shallowMount(DetailTest, {
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
        $route: {
          params: {
            batch: 1,
            training: 1,
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

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();
    expect(wrapper.vm.batch).toBe(wrapper.vm.materialTestList.data.batch);
    expect(wrapper.vm.material).toBe(wrapper.vm.materialTestList.data.material);

    wrapper.setData({
      promise: 404,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch

  // it getAllMaterialTest after promise
  it('After promise', async () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 1,
            training: 1,
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

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getAllMaterialTest();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllMaterialTest after promise

  // it redirectAddTest
  it('Redirect Add Test', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 1,
            training: 1,
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

    wrapper.vm.redirectToAddTest(4, '-');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'TrainerAddTest',
      params: {
        batch: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        material: 4,
      },
    });

    wrapper.vm.redirectToAddTest(3, 'Ava');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'TrainerChangeTest',
      params: {
        batch: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        material: 3,
      },
    });
  });
  // it redirectAddTest

  // it redirectReviewTest
  it('Redirect review test', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 1,
            training: 1,
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

    wrapper.vm.redirectReviewTest(2);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'TrainerReviewTest',
      params: {
        batch: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        material: 2,
      },
    });
  });
  // it redirectReviewTest
});
// end describe method
