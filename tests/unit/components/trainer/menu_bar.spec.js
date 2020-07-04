import { shallowMount } from '@vue/test-utils';
import MenuBar from '@/components/trainer/MenuBar.vue';


// describe component
describe('Components trainer - MenuBar.vue', () => {
  // it method logout
  it('Method logout', () => {
    const wrapper = shallowMount(MenuBar, {
      mocks: {
        $cookies: {
          remove: jest.fn(),
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

    wrapper.vm.logout();

    // expect
    expect(wrapper.vm.$cookies.remove).toBeCalled();
    expect(wrapper.vm.$router.push).toBeCalled();
  });
  // it method logout
});
// end describe component