import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddNotification from '@/views/admin/notification/AddNotification.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actionsAdminBatch;
  let store;

  // before each
  beforeEach(() => {
    actionsAdminBatch = {
      getBatch: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          actions: actionsAdminBatch,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(AddNotification, {
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
  let actionsAdminBatch;
  let actionsAdminNotification;
  let getters;
  let store;

  // before each
  beforeEach(() => {
    actionsAdminBatch = {
      getBatch: jest.fn(),
    };

    actionsAdminNotification = {
      postNotification: jest.fn(),
    };

    getters = {
      batchList: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminBatch: {
          namespaced: true,
          getters,
          actions: actionsAdminBatch,
        },
        adminNotification: {
          namespaced: true,
          actions: actionsAdminNotification,
        },
      },
    });
  });
  // before each

  // it get all batch
  it('Get all batch', async () => {
    const wrapper = shallowMount(AddNotification, {
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
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllBatch();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all batch

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(AddNotification, {
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

  // it save 
  it('Save', () => {
    const wrapper = shallowMount(AddNotification, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spySendNotif = jest.spyOn(wrapper.vm, 'sendNotification').mockImplementation(() => { return; });

    jest.spyOn(wrapper.vm, 'validationForm').mockReturnValue(1);
    wrapper.vm.save();

    // expect
    expect(spySendNotif).toBeCalled();

    jest.spyOn(wrapper.vm, 'validationForm').mockReturnValue(0);
    wrapper.vm.save();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();
  });
  // it save

  // it validation form
  it('Validation form', () => {
    const wrapper = shallowMount(AddNotification, {
      data() {
        return {
          form: {
            batchId: {
              length: 0,
            },
          },
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

    let value = wrapper.vm.validationForm();

    // expect
    expect(value).toBe(0);

    wrapper.setData({
      form: {
        batchId: {
          length: 2,
        },
        title: {
          length: 2,
        },
        message: {
          length: 2,
        },
      },
    });
    value = wrapper.vm.validationForm();

    // expect
    expect(value).toBe(1);
  });
  // it validation form

  // it send notification
  it('Send notification', async () => {
    const wrapper = shallowMount(AddNotification, {
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

    jest.spyOn(wrapper.vm, 'promiseSendNotif').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterSendNotif = jest.spyOn(wrapper.vm, 'afterSendNotif').mockImplementation(() => { return; });
    await wrapper.vm.sendNotification();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterSendNotif).toBeCalled();
  });
  // it send notification

  // it promise send notif
  it('Promise send notif', () => {
    const wrapper = shallowMount(AddNotification, {
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

    const spy = jest.spyOn(wrapper.vm, 'postNotification');
    wrapper.vm.promiseSendNotif();

    // expect
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith({
      params: wrapper.vm.form,
      resolve: expect.any(Function),
    });
  });
  // it promise send notif

  // it after send notif
  it('After send notif', () => {
    const wrapper = shallowMount(AddNotification, {
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

    wrapper.vm.afterSendNotif(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();

    wrapper.vm.afterSendNotif(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after send notif
});
// end describe method
