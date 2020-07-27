import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MaterialList from '@/views/admin/batch/MaterialList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getMaterials: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminMaterial: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: '202006',
            training: '1',
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
      getMaterials: jest.fn(),
      deleteMaterial: jest.fn(),
    };

    getters = {
      materialList: jest.fn().mockReturnValue({
        data: {
          materialList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminMaterial: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all material
  it('Get all material', async () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    jest.spyOn(wrapper.vm, 'promiseGetAllMaterial').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });

    await wrapper.vm.getAllMaterial();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all material

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    wrapper.vm.dataReady(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it confirm delete
  it('Confirm delete', async () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupConfirmDialog: jest.fn().mockReturnValue({
            value: true,
          }),
        },
        $route: {
          params: {
            batch: 202006,
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

    const spyDeleteData = jest.spyOn(wrapper.vm, 'deleteData').mockImplementation(() => { return; });
    await wrapper.vm.confirmDelete(12);

    // expect
    expect(spyDeleteData).toBeCalled();
    expect(spyDeleteData).toBeCalledWith(12);

    spyDeleteData.mockClear();
    wrapper.vm.$func.popupConfirmDialog.mockReturnValue({
      value: false,
    });
    await wrapper.vm.confirmDelete(12);

    // expect
    expect(spyDeleteData).not.toBeCalled();
  });
  // it confirm delete

  // it delete data
  it('Delete data', async () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    jest.spyOn(wrapper.vm, 'promiseDeleteData').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterDeleteData = jest.spyOn(wrapper.vm, 'afterDeleteData').mockImplementation(() => { return; });
    await wrapper.vm.deleteData();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterDeleteData).toBeCalled();
  });
  // it delete data

  // it promise delete data
  it('Promise delete data', () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 1,
          },
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

    const spyDeleteMaterial = jest.spyOn(wrapper.vm, 'deleteMaterial');
    wrapper.vm.promiseDeleteData(2);

    // expect
    expect(spyDeleteMaterial).toBeCalled();
  });
  // it promise delete data

  // it after delete data
  it('After delete data', () => {
    const wrapper = shallowMount(MaterialList, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccess: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
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

    wrapper.vm.afterDeleteData(200);

    // expect
    expect(wrapper.vm.$func.popupSuccess).toBeCalled();

    wrapper.vm.afterDeleteData(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection);
  });
  // it after delete data
});
// end describe method
