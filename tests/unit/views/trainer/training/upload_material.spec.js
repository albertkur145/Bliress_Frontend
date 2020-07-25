import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import UploadMaterial from '@/views/trainer/training/UploadMaterial.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      postMaterial: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerMaterial: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
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
  let store;

  // before each
  beforeEach(() => {
    actions = {
      postMaterial: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerMaterial: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it on file change
  it('On file change', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
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

    wrapper.vm.onFileChange({
      target: {
        files: [
          {
            name: 'Test',
          },
        ],
      },
    });

    // expect
    expect(wrapper.vm.fileName).toBe('Test');
  });
  // it on file change

  // it validate form
  it('Validate form', () => {
    const wrapper = shallowMount(UploadMaterial, {
      data() {
        return {
          form: {
            name: 'Av',
            file: 'Av',
          },
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
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

    const spyAddMaterial = jest.spyOn(wrapper.vm, 'addMaterial').mockImplementation(() => { return; });
    wrapper.vm.validateForm();

    // expect
    expect(spyAddMaterial).toBeCalled();

    wrapper.setData({
      form: {
        name: null,
        file: null,
      },
    });
    wrapper.vm.validateForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();
  });
  // it validate form

  // it addMaterial
  it('Add material', async () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
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
    const spyAfterAdd = jest.spyOn(wrapper.vm, 'afterAdd').mockImplementation(() => { return; });

    await wrapper.vm.addMaterial();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterAdd).toBeCalled();
  });
  // it addMaterial

  // it promise API
  it('Promise API', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
            training: '2',
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

    const spy = jest.spyOn(wrapper.vm, 'postMaterial');
    wrapper.vm.promiseAPI();

    // expect
    expect(spy).toBeCalled();
  });
  // it promise API

  // it after add
  it('After add', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: '1',
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

    wrapper.vm.afterAdd(202);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterAdd(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after add
});
// end describe method


// describe computed properties
describe('Computed properties', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      postMaterial: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        trainerMaterial: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  it('Back', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 1,
            training: 2,
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
    expect(wrapper.vm.back).toStrictEqual({
      name: 'TrainerDetailTraining',
      params: {
        training: wrapper.vm.paramTraining,
        batch: wrapper.vm.paramBatch,
      },
    });
  });
});
// end describe computed properties