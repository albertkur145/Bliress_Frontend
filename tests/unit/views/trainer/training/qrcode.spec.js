import { shallowMount, createLocalVue } from '@vue/test-utils';
import Qrcode from '@/views/trainer/training/Qrcode.vue';


// describe when created
describe('When created', () => {
  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Qrcode, {
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


// describe computed
describe('Computed properties', () => {
  // it back
  it('Back', () => {
    const wrapper = shallowMount(Qrcode, {
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
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    // expect
    expect(wrapper.vm.back).toStrictEqual({
      name: 'TrainerDetailTraining',
      params: {
        batch: wrapper.vm.paramBatch,
        training: wrapper.vm.paramTraining,
      },
    });
    expect(wrapper.vm.qrValue).toBe(`${wrapper.vm.paramBatch}?${wrapper.vm.paramTraining}`);
  });
  // it back
});
// end describe computed
