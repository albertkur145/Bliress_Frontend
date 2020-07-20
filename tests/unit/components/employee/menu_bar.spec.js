import { shallowMount } from '@vue/test-utils';
import MenuBar from '@/components/employee/MenuBar.vue';


// describe component
describe('Components employee - MenuBar.vue', () => {
  // props
  it('Props', () => {
    const wrapper = shallowMount(MenuBar, {
      propsData: {
        show: true,
      },
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    // expect
    expect(wrapper.vm.show).toBeTruthy();
  });
  // props
});
// end describe component