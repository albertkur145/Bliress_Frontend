import { shallowMount } from '@vue/test-utils';
import QrcodeScanner from '@/views/employee/training/QrcodeScanner.vue';

// describe when created
describe('When created', () => {
  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(QrcodeScanner, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            training: {},
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
// describe when created


// describe method
describe('Method', () => {
  // it onDecode
  it('onDecode', () => {
    const wrapper = shallowMount(QrcodeScanner, {
      mocks: {
        $func: {
          userAuth: jest.fn()
        },
        $route: {
          params: {
            training: {}
          }
        }
      },
      stubs: ['font-awesome-icon', 'router-link']
    });

    wrapper.vm.onDecode('Test');

    // expect
    expect(wrapper.vm.result).toBe('Test');
  });
  // it onDecode

  // it onInit
  it('onInit', async () => {
    const wrapper = shallowMount(QrcodeScanner, {
      mocks: {
        $func: {
          userAuth: jest.fn()
        },
        $route: {
          params: {
            training: {}
          }
        }
      },
      stubs: ['font-awesome-icon', 'router-link']
    });

    const spyCatchError = jest.spyOn(wrapper.vm, 'catchError').mockImplementation(() => {
      return;
    });
    await wrapper.vm.onInit(Promise.resolve());
    await wrapper.vm.onInit(Promise.reject());

    // expect
    expect(spyCatchError).toBeCalled();
  });
  // it onInit

  // it catchError
  it('catchError', async () => {
    const wrapper = shallowMount(QrcodeScanner, {
      mocks: {
        $func: {
          userAuth: jest.fn()
        },
        $route: {
          params: {
            training: {}
          }
        }
      },
      stubs: ['font-awesome-icon', 'router-link']
    });

    // expect
    wrapper.vm.catchError({ name: 'NotAllowedError' });
    expect(wrapper.vm.error).toMatch('ERROR: You need to grant camera access permisson.');

    // expect
    wrapper.vm.catchError({ name: 'NotFoundError' });
    expect(wrapper.vm.error).toMatch('ERROR: No camera on this device.');
    
    // expect
    wrapper.vm.catchError({ name: 'NotSupportedError' });
    expect(wrapper.vm.error).toMatch('ERROR: Secure context required (HTTPS, localhost).');

    // expect
    wrapper.vm.catchError({ name: 'NotReadableError' });
    expect(wrapper.vm.error).toMatch('ERROR: Is the camera already in use?.');

    // expect
    wrapper.vm.catchError({ name: 'OverconstrainedError' });
    expect(wrapper.vm.error).toMatch('ERROR: Installed cameras are not suitable.');

    // expect
    wrapper.vm.catchError({ name: 'StreamApiNotSupportedError' });
    expect(wrapper.vm.error).toMatch('ERROR: Stream API is not supported in this browser.');

    // expect
    wrapper.vm.catchError({ name: 'Uknown' });
    expect(wrapper.vm.error).toMatch('');
  });
  // it catchError
})
// end describe method
