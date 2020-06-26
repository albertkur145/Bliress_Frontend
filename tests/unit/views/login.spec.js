import { shallowMount } from '@vue/test-utils';
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
    expect(wrapper.vm.$cookies.get).toHaveBeenCalled();
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
    expect(wrapper.vm.$func.popupLogoutFirst).toHaveBeenCalled();
  });
});

describe('Form v-model', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $cookies: {
        get: jest.fn(),
      },
    },

    data() {
      return {
        form: {
          email: 'albertkur@gmail.com',
          password: '123',
        },
      };
    },

    stubs: [
      'font-awesome-icon',
    ],
  });

  it('Email value', () => {
    expect(wrapper.find('#email').value).toBe('albertkur@gmail.com');
  });
});
