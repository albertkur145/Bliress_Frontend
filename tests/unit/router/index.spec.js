import { mount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import routes from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);
window.scrollTo = jest.fn();

// describe router
describe('Router', () => {
  // it scroll behavior
  it('Scroll behavior', () => {
    let val = routes.options.scrollBehavior('', '', true);

    // expect
    expect(val).toBe(true);

    val = routes.options.scrollBehavior('', '', false);

    // expect
    expect(val).toStrictEqual({ x: 0, y: 0 });
  });
  // it scroll behavior

  // it before resolve
  it('Before resolve', () => {
    let to = {
      name: true,
    };
    const from = jest.fn();
    const next = jest.fn();

    routes.resolveHooks.forEach((hook) => {
      hook(to, from, next);
    });

    to = {
      name: false,
    };

    routes.resolveHooks.forEach((hook) => {
      hook(to, from, next);
    });
  });
  // it before resolve

  // it routes
  it('Routes', async () => {
    const router = routes;
    const wrapper = mount(App, {
      mocks: {
        $cookies: {
          get: jest.fn(user => user),
        },
        $func: {
          popupLogoutFirst: jest.fn(),
          userAuth: jest.fn(),
        },
      },
      localVue,
      router,
      stubs: [
        'font-awesome-icon',
        'router-link',
        'router-view',
      ],
    });

    router.push({ name: 'Training' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'DetailTraining',
      params: {
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'Attendance',
      params: {
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push('/account');
    await wrapper.vm.$nextTick();

    router.push('/notification');
    await wrapper.vm.$nextTick();

    router.push('/test');
    await wrapper.vm.$nextTick();

    router.push({
      name: 'DetailTest',
      params: {
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'Question',
      params: {
        training: '1',
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminBatch' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminDetailBatch',
      params: {
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminTraining',
      params: {
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminAttendance',
      params: {
        batch: 202006,
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminQrcode',
      params: {
        batch: 202006,
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminMaterialTraining',
      params: {
        batch: 202006,
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminUploadMaterialTraining',
      params: {
        batch: 202006,
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminAddTraining',
      params: {
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminChangeTraining',
      params: {
        batch: 202006,
        training: '1',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminEmployee',
      params: {
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminTest' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminDetailTest',
      params: {
        batch: 202006,
        training: '2',
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminReviewTest',
      params: {
        batch: 202006,
        training: '2',
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminAddTest',
      params: {
        batch: 202006,
        training: '2',
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminChangeTest',
      params: {
        batch: 202006,
        training: '2',
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminNotification' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminAddNotification' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminOther' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminMenuEmployee' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminCreateEmployee' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminChangeEmployee',
      params: {
        id: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminTrainer' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'AdminCreateTrainer' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'AdminChangeTrainer',
      params: {
        id: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'TrainerTraining' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerDetailTraining',
      params: {
        training: '1',
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerQrcode',
      params: {
        training: '1',
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerUploadMaterial',
      params: {
        training: '1',
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'TrainerTest' });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerDetailTest',
      params: {
        training: '1',
        batch: 202006,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerReviewTest',
      params: {
        training: '1',
        batch: 202006,
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerAddTest',
      params: {
        training: '1',
        batch: 202006,
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({
      name: 'TrainerChangeTest',
      params: {
        training: '1',
        batch: 202006,
        material: 1,
      },
    });
    await wrapper.vm.$nextTick();

    router.push({ name: 'TrainerNotification' });
    await wrapper.vm.$nextTick();

    router.push({ name: 'TrainerSetting' });
    await wrapper.vm.$nextTick();
  });
  // it routes
});
// describe router
