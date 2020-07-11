import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Trainer from '@/views/admin/other/trainer/Trainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainers: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Trainer, {
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
      getTrainers: jest.fn(),
      deleteTrainer: jest.fn(),
    };

    getters = {
      trainerList: jest.fn().mockReturnValue({
        data: {
          filter: jest.fn(),
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all trainer
  it('Get all trainer', async () => {
    const wrapper = shallowMount(Trainer, {
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

    jest.spyOn(wrapper.vm, 'promiseGetAllTrainer').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllTrainer();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all trainer

  // it promise get all trainer
  it('Promise get all trainer', () => {
    const wrapper = shallowMount(Trainer, {
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

    const spy = jest.spyOn(wrapper.vm, 'getTrainers');
    wrapper.vm.promiseGetAllTrainer();

    // expect
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith({
      resolve: expect.any(Function),
    });
  });
  // it promise get all trainer

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Trainer, {
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

  // it delete
  it('Delete', async () => {
    const wrapper = shallowMount(Trainer, {
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

    jest.spyOn(wrapper.vm, 'promiseDelete').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterDelete = jest.spyOn(wrapper.vm, 'afterDelete').mockImplementation(() => { return; });
    await wrapper.vm.delete();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterDelete).toBeCalled();
  });
  // it delete

  // it promise delete
  it('Promise delete', () => {
    const wrapper = shallowMount(Trainer, {
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

    const spy = jest.spyOn(wrapper.vm, 'deleteTrainer');
    wrapper.vm.promiseDelete(52);

    // expect
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith({
      params: {
        id: 52,
      },
      resolve: expect.any(Function),
    });
  });
  // it promise delete

  // it after delete
  it('After delete', () => {
    const wrapper = shallowMount(Trainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
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

    wrapper.vm.afterDelete(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterDelete(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after delete

  // it confirm delete
  it('Confirm delete', async () => {
    const wrapper = shallowMount(Trainer, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({
            value: true,
          }),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spy = jest.spyOn(wrapper.vm, 'delete').mockImplementation(() => { return; });
    await wrapper.vm.confirmDelete(2);

    // expect
    expect(spy).toBeCalled();

    spy.mockClear();
    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({
      value: false,
    });
    await wrapper.vm.confirmDelete(2);

    // expect
    expect(spy).not.toBeCalled();
  });
  // it confirm delete

  // it redirect create trainer
  it('Redirect create trainer', () => {
    const wrapper = shallowMount(Trainer, {
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

    wrapper.vm.redirectCreateTrainer(2);

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'AdminChangeTrainer',
      params: {
        id: 2,
      },
    });
  });
  // it redirect create trainer
});
// end describe method
