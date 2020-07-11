import { shallowMount } from '@vue/test-utils';
import Other from '@/views/admin/other/Other.vue';

// describe when created
describe('When created', () => {
  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(Other, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
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


// describe method
describe('Method', () => {
  // redirect to
  it('Redirect to', () => {
    const wrapper = shallowMount(Other, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.redirectTo('a');

    // expect
    expect(wrapper.vm.$router.push).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalledWith({
      name: 'a',
    });
  });
  // redirect to
});
// describe method
