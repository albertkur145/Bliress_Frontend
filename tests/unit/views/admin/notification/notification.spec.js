import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notification from '@/views/admin/notification/Notification.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getNotifications: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminNotification: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Notification, {
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
      getNotifications: jest.fn(),
    };

    getters = {
      notificationList: jest.fn().mockReturnValue({
        data: {
          notificationList: [],
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminNotification: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it getAllNotification
  it('Get all notification', async () => {
    const wrapper = shallowMount(Notification, {
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

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllNotification();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it getAllNotification

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Notification, {
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
});
// end describe method
