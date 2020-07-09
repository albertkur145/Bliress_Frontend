import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTraining from '@/views/admin/batch/AddTraining.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


// describe when created
describe('When created', () => {
  let actionsAdminTrainer;
  let actionsAdminTraining;
  let store;

  // before each
  beforeEach(() => {
    actionsAdminTrainer = {
      getTrainers: jest.fn(),
    };

    actionsAdminTraining = {
      getTrainingBy: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          actions: actionsAdminTrainer,
        },
        adminTraining: {
          namespaced: true,
          actions: actionsAdminTraining,
        },
      },
    });
  });
  // before each

  // it user auth
  it('User auth', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
          },
        },
      },
      localVue,
      store,
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
  let actionsAdminTrainer;
  let actionsAdminTraining;
  let gettersAdminTraining;
  let gettersAdminTrainer;
  let store;

  // before each
  beforeEach(() => {
    actionsAdminTrainer = {
      getTrainers: jest.fn(),
    };

    actionsAdminTraining = {
      getTrainingBy: jest.fn(),
      postTraining: jest.fn(),
      putTraining: jest.fn(),
    };

    gettersAdminTrainer = {
      trainerList: jest.fn().mockReturnValue({
        data: {
          training: {},
        },
      }),
    };

    gettersAdminTraining = {
      training: jest.fn().mockReturnValue({
        data: {},
      }),
    };

    store = new Vuex.Store({
      modules: {
        adminTrainer: {
          namespaced: true,
          getters: gettersAdminTrainer,
          actions: actionsAdminTrainer,
        },
        adminTraining: {
          namespaced: true,
          getters: gettersAdminTraining,
          actions: actionsAdminTraining,
        },
      },
    });
  });
  // before each

  // it get all trainer
  it('Get all trainer', async () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseGetAllTrainer').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyDataReady = jest.spyOn(wrapper.vm, 'dataReady').mockImplementation(() => { return; });
    await wrapper.vm.getAllTrainer();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyDataReady).toBeCalled();
  });
  // it get all trainer

  // it data ready
  it('Data ready', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.dataReady(200);

    // expect
    expect(wrapper.vm.apiReady).toBeTruthy();

    wrapper.vm.dataReady(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it data ready

  // it validate form
  it('Validate form', () => {
    const wrapper = shallowMount(AddTraining, {
      data() {
        return {
          form: {
            location: {
              length: 0,
            },
          },
        };
      },
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupError: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spyReqApi = jest.spyOn(wrapper.vm, 'reqApi').mockImplementation(() => { return; });
    wrapper.vm.validateForm();

    // expect
    expect(wrapper.vm.$func.popupError).toBeCalled();

    wrapper.setData({
      form: {
        location: {
          length: 5,
        },
      },
      paramTraining: 2,
    });
    wrapper.vm.validateForm();

    // expect
    expect(spyReqApi).toBeCalled();

    wrapper.setData({
      form: {
        location: {
          length: 5,
        },
      },
      paramTraining: null,
    });
    wrapper.vm.validateForm();

    // expect
    expect(spyReqApi).toBeCalled();
  });
  // it validate form

  // it req api
  it('Req api', async () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseReqApi').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterReqApi = jest.spyOn(wrapper.vm, 'afterReqApi').mockImplementation(() => { return; });
    await wrapper.vm.reqApi();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterReqApi).toBeCalled();
  })
  // it req api

  // it promise req api
  it('Promise req api', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spyPutTraining = jest.spyOn(wrapper.vm, 'postTraining');
    wrapper.vm.promiseReqApi(wrapper.vm.postTraining);

    // expect
    expect(spyPutTraining).toBeCalledWith({
      params: wrapper.vm.form,
      resolve: expect.any(Function),
    })
  });
  // it promise req api

  // it after req api
  it('After req api', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupSuccessfull: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    wrapper.vm.afterReqApi(200);

    // expect
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalled();
    expect(wrapper.vm.$func.popupSuccessfull).toBeCalledWith('Berhasil simpan data', 5000, wrapper.vm.back);

    wrapper.vm.afterReqApi(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it after req api

  // it get training by training
  it('Get training by training', async () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    jest.spyOn(wrapper.vm, 'promiseGetTrainingByTraining').mockImplementation(() => {
      Promise.resolve(200);
    });
    const spyAfterGetTrainingByTraining = jest.spyOn(wrapper.vm, 'afterGetTrainingByTraining')
    .mockImplementation(() => { return; });

    await wrapper.vm.getTraininyByTraining();

    // expect
    expect(wrapper.vm.animationLoaderDisplay).toBeFalsy();
    expect(spyAfterGetTrainingByTraining).toBeCalled();
  });
  // it get training by training

  // it afterGetTrainingByTraining
  it('After get training', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
          popupLostConnection: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const spySetForm = jest.spyOn(wrapper.vm, 'setForm').mockImplementation(() => { return; });
    wrapper.vm.afterGetTrainingByTraining(200);

    // expect
    expect(spySetForm).toBeCalled();

    wrapper.vm.afterGetTrainingByTraining(404);

    // expect
    expect(wrapper.vm.$func.popupLostConnection).toBeCalled();
  });
  // it afterGetTrainingByTraining

  // it set form
  it('Set form', () => {
    const wrapper = shallowMount(AddTraining, {
      mocks: {
        $func: {
          userAuth: jest.fn(),
        },
        $route: {
          params: {
            batch: 202006,
            training: 2,
          },
        },
      },
      localVue,
      store,
      stubs: [
        'font-awesome-icon',
        'router-link',
      ],
    });

    const training = wrapper.vm.training.data;
    const form = {
      batchId: wrapper.vm.paramBatch,
      training: training.training,
      date: training.date,
      location: training.location,
      timeStart: training.timeStart,
      timeFinish: training.timeFinish,
      trainerId: training.trainerId,
    };
    wrapper.vm.setForm();

    // expect
    expect(wrapper.vm.form).toStrictEqual(form);
  });
  // it set form
});
// describe method
