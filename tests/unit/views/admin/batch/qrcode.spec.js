import { shallowMount } from '@vue/test-utils';
import Qrcode from '@/views/admin/batch/Qrcode.vue';


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
            batch: 202006,
            training: 1,
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


// describe computed properties
describe('Computed properties', () => {
  it('Qr value', () => {
    const wrapper = shallowMount(Qrcode, {
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
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    expect(wrapper.vm.qrValue).toBe(`${wrapper.vm.paramBatch}?${wrapper.vm.paramTraining}`);
  });
})
// end describe computed properties
