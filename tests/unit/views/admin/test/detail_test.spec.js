import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DetailTest from '@/views/admin/test/DetailTest.vue';

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
        adminTest: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
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
      getMaterialsTest: jest.fn(),
    };

    getters = {
      materialTestList: jest.fn().mockReturnValue({
        data: {
          materialList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTest: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all material test
  it('Get all material test', async () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
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
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllMaterialTest();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all material test

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
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
    expect(wrapper.vm.material).toStrictEqual(wrapper.vm.materialTestList.data.materialList);

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection);
  });
  // it data ready

  // it redirect to add test
  it('Redirect add test', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
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

    wrapper.vm.redirectToAddTest(5, false, '-');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();

    wrapper.vm.redirectToAddTest(5, true, 'Av');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
  });
  // it redirect to add test

  // it redirect review test
  it('Redirect review test', () => {
    const wrapper = shallowMount(DetailTest, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: '2',
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
      name: 'AdminReviewTest',
      params: {
        batch: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
        material: 2,
      },
    });
  });
  // it redirect review test
});
// end describe method
