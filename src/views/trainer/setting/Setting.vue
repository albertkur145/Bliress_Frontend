<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Pengaturan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="list">
        <div class="bar" @click="formPassword">
          <div>
            <font-awesome-icon class="text-icon password-icon" icon="key"></font-awesome-icon>
            <span>Ubah Password</span>
          </div>
          <font-awesome-icon class="right-icon" icon="chevron-right"></font-awesome-icon>
        </div>

        <div class="hr">
          <div></div>
        </div>

        <div class="bar" @click="logout">
          <div>
            <font-awesome-icon class="text-icon logout-icon" icon="sign-out-alt"></font-awesome-icon>
            <span>Keluar</span>
          </div>
          <font-awesome-icon class="right-icon" icon="chevron-right"></font-awesome-icon>
        </div>

        <div class="hr">
          <div></div>
        </div>

      </div>
    </div>
    <!-- end content -->

    <MenuBar :show="hasNotif"></MenuBar>
    <AnimationLoader :class="{ 'display-flex': animationLoaderDisplay }"></AnimationLoader>
  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
    min-height: 100vh;
    background-color: #FFF;

    .head {
      box-sizing: border-box;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      color: #FFF;
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .list {

        .bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 1.375rem 1rem;

          .text-icon {
            font-size: 0.8125em;
          }

          .password-icon {
            color: #0BE881;
          }

          .logout-icon {
            color: #F53B57;
          }

          span {
            color: #222;
            margin-left: 0.75rem;
            font-size: 0.875em;
          }

          .right-icon {
            color: #666;
            font-size: 0.75em;
          }

          &:hover {
            background-color: #F8F8F8;
          }
        }

        .hr {
          padding: 0 1rem;

          div {
            background-color: #DDD;
            height: 0.0625rem;
          }
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

      .head {
        padding: 1.0625rem 1.25rem;

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .list {

          .bar {
            padding: 1.5rem 1.25rem;

            .text-icon {
              font-size: 0.875em;
            }

            span {
              margin-left: 0.875rem;
              font-size: 0.9375em;
            }

            .right-icon {
              font-size: 0.8125em;
            }
          }

          .hr {
            padding: 0 1.25rem;
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width > 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    #container {

      .head {
        max-width: 466px;
        margin: 0 auto;
        padding: 1.1875rem 1.5rem;

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .list {

          .bar {
            padding: 1.75rem 1.5rem;

            .text-icon {
              font-size: 1em;
            }

            span {
              margin-left: 1rem;
              font-size: 1.0625em;
            }

            .right-icon {
              font-size: 0.9375em;
            }
          }

          .hr {
            padding: 0 1.5rem;
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/trainer/MenuBar.vue';
import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    MenuBar,
    AnimationLoader,
  },

  data() {
    return {
      apiReady: true,
      animationLoaderDisplay: false,
      hasNotif: false,
    };
  },

  computed: {
    ...mapGetters('trainerNotification', [
      'triggerNotif',
    ]),
  },

  methods: {
    ...mapActions('trainerAccount', [
      'changePassword',
    ]),

    ...mapActions('trainerNotification', [
      'getTriggerNotif',
    ]),

    async isHasNotif() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseIsHasNotif();

      // hide loader
      this.animationLoaderDisplay = false;
      this.afterTriggerNotif(promise);
    },

    promiseIsHasNotif() {
      return new Promise((resolve) => {
        this.getTriggerNotif({
          params: {
            trainerId: this.$cookies.get('user').id,
          },
          resolve,
        });
      });
    },

    afterTriggerNotif(promise) {
      if (promise === 200) {
        this.hasNotif = this.triggerNotif.data.hasNotif;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async formPassword() {
      const res = await this.$swal.mixin({
        confirmButtonText: 'Next',
        backdrop: false,
        allowEscapeKey: false,
        showCloseButton: true,
        progressSteps: ['1', '2', '3', '4'],
      }).queue([
        {
          input: 'password',
          inputPlaceholder: 'Password lama',
        },
        {
          input: 'password',
          inputPlaceholder: 'Konfirmasi password lama',
        },
        {
          input: 'password',
          inputPlaceholder: 'Password baru',
        },
        {
          input: 'password',
          inputPlaceholder: 'Konfirmasi password baru',
        },
      ]);

      if (res.value[0] !== res.value[1]) {
        this.$func.popupError('Konfirmasi password lama salah!', 5000);
      } else if (res.value[2] !== res.value[3]) {
        this.$func.popupError('Konfirmasi password baru salah!', 5000);
      } else {
        this.changePasswordUser({
          trainerId: this.$cookies.get('user').id,
          oldPassword: res.value[0],
          currentPassword: res.value[2],
        });
      }
    },

    async changePasswordUser(params) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseChangePassword(params);

      // hide loader
      this.animationLoaderDisplay = false;
      this.afterChangePassword(promise);
    },

    promiseChangePassword(params) {
      return new Promise((resolve) => {
        this.changePassword({
          params,
          resolve,
        });
      });
    },

    afterChangePassword(promise) {
      if (promise === 200) {
        this.$cookies.remove('user');
        this.$func.popupSuccessfull('Berhasil, silahkan login kembali', 5000, { name: 'Login' });
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    logout() {
      this.$cookies.remove('user');
      this.$router.push({ name: 'Login' });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Trainer');

    // req api
    this.isHasNotif();
  },
};

</script>
