import { shallowMount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login.vue';

describe('When Created', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  it('Cookies get function called', () => {
    expect(wrapper.vm.$cookies.get).toBeCalled();
  });
});

describe('When Created', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn((user) => user),
      },
      $func: {
        popupLogoutFirst: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  it('If cookies user exist, popuplogout function have been called', () => {
    expect(wrapper.vm.$func.popupLogoutFirst).toBeCalled();
  });
});

describe('Data', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  it('Email value', () => {
    wrapper.find('#email').setValue('albertkur@gmail.com');
    expect(wrapper.vm.form.email).toBe('albertkur@gmail.com');
  });

  it('Password value', () => {
    wrapper.find('#password').setValue('123');
    expect(wrapper.vm.form.password).toBe('123');
  });

  it('Animation loader display', () => {
    wrapper.vm.animationLoaderDisplay = true;
    expect(wrapper.vm.animationLoaderDisplay).toBeTruthy();
  });
});

describe("Methods / functions", () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  const btnLogin = wrapper.find('.btn-login');

  it("Button 'masuk' is exist", () => {
    expect(btnLogin.exists()).toBeTruthy();
  });

  it("When button click, loginUser to be called", () => {
    const spy = jest.spyOn(wrapper.vm, 'loginUser').mockImplementation();
    btnLogin.trigger('click');
    expect(spy).toBeCalled();
  });
});

describe('Methods / functions', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn(),
      },
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  it('Vuex-actions login to be execute', () => {
    const spy = jest.spyOn(wrapper.vm, 'login').mockImplementation();
    wrapper.vm.loginUser();
    expect(spy).toBeCalled();
  });
});
