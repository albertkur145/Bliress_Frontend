import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notification from '@/views/employee/notification/Notification.vue';

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
      postNotifications: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeNotification: {
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
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    // expect
    expect(wrapper.vm.$func.userAuth).toBeCalled();
  });
  // it user auth
});
// end describe when created


// describe method dataReady
describe('Method data ready', () => {
  let actions;
  let store;
  let getters;

  // before each
  beforeEach(() => {
    actions = {
      getNotifications: jest.fn(),
      postNotifications: jest.fn(),
    };

    getters = {
      notificationList: jest.fn(() => {
        return {
          data: {},
        };
      }),
    };

    store = new Vuex.Store({
      modules: {
        employeeNotification: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });
  // before each

  // it branch
  it('Branch', () => {
    const wrapper = shallowMount(Notification, {
      data() {
        return {
          promise: 200,
        };
      },
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.setData({
      promise: 500,
    });
    wrapper.vm.dataReady();

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it branch
});
// end describe method dataReady


// describe method getAllNotifications
describe('Method getAllNotifications', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getNotifications: jest.fn(),
      postNotifications: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeNotification: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it after promise
  it('After promise', async () => {
    const wrapper = shallowMount(Notification, {
      mocks: {
        $cookies: {
          get: jest.fn((user) => user),
        },
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => {
      return;
    });

    await wrapper.vm.getAllNotifications();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it after promise

});
// end describe method getAllNotifications

