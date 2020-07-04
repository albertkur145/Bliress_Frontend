import { shallowMount } from '@vue/test-utils';
import MenuBar from '@/components/admin/MenuBar.vue';


// describe component
describe('Components admin - MenuBar.vue', () => {
  // method logout
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
  // method logout
});
// end describe component