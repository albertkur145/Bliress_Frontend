import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import UploadMaterial from '@/views/admin/batch/UploadMaterial.vue';

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
    const wrapper = shallowMount(UploadMaterial, {
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
        adminMaterial: {
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

    wrapper.vm.onFileChange({
      target: {
        files: [
          {
            name: 'pptx',
          },
        ],
      },
    });

    // expect
    expect(wrapper.vm.fileName).toBe('pptx');
  });
  // it on file change

  // it validate form
  it('Validate form', () => {
    const wrapper = shallowMount(UploadMaterial, {
      data() {
        return {
          form: {
            name: '',
            file: '',
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

    const spyAddMaterial = jest.spyOn(wrapper.vm, 'addMaterial').mockImplementation(() => { return; });
    wrapper.vm.validateForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();

    wrapper.setData({
      form: {
        name: 'a',
        file: 'a',
      },
    });
    wrapper.vm.validateForm();

    // expect
    expect(spyAddMaterial).toBeCalled();
  });
  // it validate form

  // it add material
  it('Add material', async () => {
    const wrapper = shallowMount(UploadMaterial, {
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

    jest.spyOn(wrapper.vm, 'promiseAddMaterial').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterAddMaterial = jest.spyOn(wrapper.vm, 'afterAddMaterial')
    .mockImplementation(() => { return; });

    await wrapper.vm.addMaterial();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterAddMaterial).toBeCalled();
  });
  // it add material

  // it promise add material
  it('Promise add material', () => {
    const wrapper = shallowMount(UploadMaterial, {
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

    const spyPostMaterial = jest.spyOn(wrapper.vm, 'postMaterial');
    wrapper.vm.promiseAddMaterial();

    // expect
    expect(spyPostMaterial).toBeCalled();
  });
  // it promise add material

  // it after add material
  it('After add material', () => {
    const wrapper = shallowMount(UploadMaterial, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
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

    wrapper.vm.afterAddMaterial(202);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterAddMaterial(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after add material
});
// end describe method
