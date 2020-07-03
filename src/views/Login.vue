<template>
  <div id="container">
    <!-- header -->
    <div class="header">
      <hr>
      <p class="brand">BLIRESS</p>
      <p class="slogan">Blibli Employee Progress</p>
      <hr>
    </div>
    <!-- end header -->

    <!-- form -->
    <div class="form">
      <!-- input email -->
      <div class="input-container">
        <font-awesome-icon icon="envelope" class="icon-form" />
        <input @keyup.enter="loginUser()"
        id="email"
        type="text"
        v-model="form.email"
        placeholder="example@gmail.com"
        autocomplete="off">
      </div>
      <!-- input email -->

      <!-- input password -->
      <div class="input-container">
        <font-awesome-icon icon="lock" class="icon-form" />
        <input @keyup.enter="loginUser()"
        id="password"
        type="password"
        v-model="form.password"
        placeholder="********"
        autocomplete="off">
      </div>
      <!-- input password -->

      <!-- btn login -->
      <button class="btn-login" @click="loginUser()">Masuk</button>
      <!-- btn login -->
    </div>
    <!-- end form -->

    <AnimationLoader :class="{ 'display-flex': animationLoaderDisplay }"></AnimationLoader>
  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
    min-height: 100vh;
    background-image: url('../assets/background/bg-linear-lg.svg');
    background-repeat: repeat-x;
    padding: 4rem 1.75rem;

    .header {
      text-align: center;
      color: #FFF;
      padding: 1.5rem 0;

      hr {
        display: block;
        border: 0.0625rem solid #FFF;
      }

      .brand {
        font-weight: 900;
        text-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 77, 133, 0.25);
        margin: 0;
        padding: 0;
        font-size: 2.5em;
      }

      .slogan {
        padding: 0;
        font-weight: 500;
        font-size: 1.0625rem;
        margin: 0.5rem 0 0;
      }
    }

    .form {
      margin-top: 1.5rem;

      .input-container {
        position: relative;
        margin-bottom: 1.25rem;

        .icon-form {
          position: absolute;
          color: #FFF;
          left: 0;
          top: 30%;
          font-size: 1.0625em;
        }

        input {
          background-color: transparent;
          color: #FFF;
          font-weight: 600;
          outline: none;
          box-sizing: border-box;
          border: 0;
          width: 100%;
          transition: .2s linear;
          border-bottom: 0.1875rem solid rgba(255, 255, 255, 0.5);
          padding: 0.875rem 0.875rem 0.875rem 2rem;
          font-size: 0.875em;

          &::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          &:focus {
            border-bottom: 0.1875rem solid rgba(255, 255, 255, 1);
          }

          &:focus::placeholder {
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }

      .btn-login {
        width: 100%;
        border: 0;
        font-weight: 700;
        color: #27AAE1;
        background-color: #FFF;
        cursor: pointer;
        outline: none;
        transition: all .3s linear;
        border-radius: 0.375rem;
        border: 0.125rem solid #00A0E4;
        margin-top: 0.25rem;
        padding: 0.5625rem;
        font-size: 0.875em;

        &:hover {
          color: #0A91CB;
          border: 0.125rem solid #007EB5;
        }
      }
    }

    .display-flex {
      display: flex;
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {
      padding: 3.5rem 3rem;

      .header {
          padding: 1.5rem 0;

        hr {
          display: block;
        }

        .brand {
          font-size: 3em;
        }

        .slogan {
          font-size: 1.1875em;
          margin: 0.5rem 0 0;
        }
      }

      .form {
        margin-top: 2rem;

        .input-container {
          margin-bottom: 1.5rem;

          .icon-form {
            top: 27%;
            font-size: 1.25em;
          }

          input {
            padding: 1rem 1rem 1rem 2.5rem;
            font-size: 1em;
          }
        }

        .btn-login {
          margin-top: 0.375rem;
          padding: 0.75rem;
          font-size: 0.9375em;
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width >= 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    #container {
      padding: 3rem 4rem;

      .header {
          padding: 2rem 0;

        hr {
          display: none;
        }

        .brand {
          font-size: 3.5em;
        }

        .slogan {
          font-size: 1.5em;
          margin: 0.625rem 0 0;
        }
      }

      .form {
        margin-top: 2.5rem;

        .input-container {
          margin-bottom: 1rem;

          .icon-form {
            top: 27%;
            font-size: 1.25em;
          }

          input {
            padding: 1rem 1rem 1rem 2.5rem;
            font-size: 1em;
          }
        }

        .btn-login {
          margin-top: 1rem;
          padding: 1rem;
          font-size: 1em;
        }
      }
    }
  }
  // width >= 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      form: {
        email: '',
        password: '',
      },
      name: '',
      promise: null,
    };
  },

  computed: {
    ...mapGetters('login', [
      'user',
    ]),
  },

  methods: {
    ...mapActions('login', [
      'login',
    ]),

    async loginUser() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      this.promise = await this.promiseAPI();

      // hide loader
      this.animationLoaderDisplay = false;
      this.redirectPage();
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.login({
          params: {
            email: this.form.email,
            password: this.form.password,
          },
          resolve,
        });
      });
    },

    redirectPage() {
      // set cookies if successfull
      if (this.promise === 200) {
        // set cookies
        this.$cookies.set('user', this.user.data, '3h');

        // navigate route role
        if (this.user.data.role === 'Employee') {
          this.name = 'Training';
        } else if (this.user.data.role === 'Admin') {
          this.name = 'AdminBatch';
        } else if (this.user.data.role === 'Trainer') {
          this.name = 'TrainerTraining';
        }

        // show popup success
        this.$func.popupSuccessfull('Berhasil login', 5000, { name: this.name });
      } else {
        // show popup error
        this.$func.popupError('Email / password salah', 5000);
      }
    },
  },

  created() {
    if (this.$cookies.get('user')) {
      this.$func.popupLogoutFirst();
    }
  },

};

</script>
