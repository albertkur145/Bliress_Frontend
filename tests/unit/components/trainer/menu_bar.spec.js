import { shallowMount } from '@vue/test-utils';
import MenuBar from '@/components/trainer/MenuBar.vue';


// describe component
describe('Components trainer - MenuBar.vue', () => {
  // it props
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
  // it props
});
// end describe component