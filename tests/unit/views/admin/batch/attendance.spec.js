import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Attendance from '@/views/admin/batch/Attendance.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getAttendance: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTraining: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Attendance, {
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
      getAttendance: jest.fn(),
    };

    getters = {
      attendanceList: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTraining: {
          namespaced: true,
          getters,
          actions,
        },
      },
    });
  });
  // before each

  // it get all attendance
  it('Get all attendance', async () => {
    const wrapper = shallowMount(Attendance, {
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

    jest.spyOn(wrapper.vm, 'promiseAPI').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllAttendance();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all attendance

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(Attendance, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
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
