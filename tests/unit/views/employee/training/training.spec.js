import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Training from '@/views/employee/training/Training.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actions;
  let store;

  // before each
  beforeEach(() => {
    actions = {
      getTrainings: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        employeeTraining: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Training, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $cookies: {
          get: jest.fn((user) => user),
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

