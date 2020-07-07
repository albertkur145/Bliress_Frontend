import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ReviewTest from '@/views/trainer/test/ReviewTest.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTest: jest.fn(),
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
    const wrapper = shallowMount(ReviewTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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
      getTest: jest.fn(),
    };

    getters = {
      questionTest: jest.fn().mockReturnValue({
        data: {
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

  // it getQuestions after promise
  it('After promise', async () => {
    const wrapper = shallowMount(ReviewTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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
    await wrapper.vm.getQuestions();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getQuestions after promise

  // it data ready branch
  it('Data ready - branch', () => {
    const wrapper = shallowMount(ReviewTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 2,
            training: 1,
            material: 5,
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
    expect(wrapper.vm.material).toBe(wrapper.vm.questionTest.data.material);

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready branch
});
// end describe method
