<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Akun</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- top head -->
      <div class="top-head">
        <div class="left">
          <font-awesome-icon icon="user-circle" class="user-icon"></font-awesome-icon>
        </div>
        <div class="right">
          <p class="name">{{ user.data.name }}</p>
          <p class="position">{{ user.data.division }}</p>
        </div>
      </div>
      <!-- top head -->

      <!-- txt profile info -->
      <div class="txt-profile-info">Informasi Profil</div>
      <!-- txt profile info -->

      <!-- profile info data -->
      <div class="profile-info">
        <div class="form-group">
          <fieldset>
            <legend>Batch</legend>
            <p class="value">{{ user.data.batch }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nama lengkap</legend>
            <p class="value">{{ user.data.name }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Email</legend>
            <p class="value">{{ user.data.email }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nomor HP</legend>
            <p class="value">{{ user.data.phoneNumber }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Divisi</legend>
            <p class="value">{{ user.data.division }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Tanggal lahir</legend>
            <p class="value">{{ user.data.birthdate }}</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jenis kelamin</legend>
            <p class="value">{{ user.data.gender }}</p>
          </fieldset>
        </div>
      </div>
      <!-- profile info data -->

      <!-- logout -->
      <div class="logout" @click="logout">
        <p>keluar</p>
      </div>
      <!-- logout -->

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
    background-color: #F2F2F2;

    .head {
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      color: #FFF;
      background-color: #0ABDE3;
      font-weight: 600;
      text-align: center;
      z-index: 1;
      padding: 0.875rem 1rem;

      .text {
        font-size: 1.0625em;
      }
    }

    .content {

      p {
        margin: 0;
      }

      .top-head {
        display: flex;
        align-items: center;
        background-color: #FFF;
        margin-top: 3rem;
        padding: 1.25rem 0.625rem;

        .left {
          min-width: 25%;
          max-width: 25%;
          text-align: center;

          .user-icon {
            color: #0094FF;
            font-size: 2.75em;
          }
        }

        .right {
          min-width: 75%;
          max-width: 75%;
          color: #333;
          box-sizing: border-box;
          padding: 0 0.25rem 0 0.5rem;

          .name {
            font-weight: 500;
            font-size: 1.0625em;
          }

          .position {
            font-weight: 400;
            font-size: 0.875em;
            margin-top: 0.1875rem;
          }
        }
      }

      .txt-profile-info {
        font-weight: 600;
        color: #00A3FF;
        background-color: #FFF;
        text-align: center;
        margin-top: 0.375rem;
        padding: 1rem 0;
        font-size: 0.9375em;
      }

      .profile-info {
        background-color: #FFF;
        margin-top: 0.375rem;
        padding: 0.625rem;

        .form-group {
          max-width: 100%;
          overflow-x: auto;
          margin-bottom: 1rem;

          fieldset {
            border: 0.0625rem solid #BBB;
            border-radius: 0.5rem;
            min-height: 2.75rem;

            legend {
              color: #777;
              padding: 0 0.25rem;
              font-size: 0.6875em;
            }

            .value {
              color: #333;
              box-sizing: border-box;
              min-width: 100%;
              max-width: 100%;
              margin-top: 0.5rem;
              padding: 0 0 0 0.75rem;
              font-size: 0.875em;
            }
          }
        }
      }

      .logout {
        cursor: pointer;
        background-color: #FFF;
        text-align: center;
        margin-top: 0.375rem;
        padding: 1rem;
        margin-bottom: 3.3125rem;

        p {
          text-transform: uppercase;
          font-weight: 600;
          color: #FF003D;
          transition: color .2s linear;
          font-size: 0.8125em;
        }

        &:hover p {
          color: #900404;
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

        .top-head {
          margin-top: 3.375rem;
          padding: 1.5rem;

          .left {
            min-width: 25%;
            max-width: 25%;

            .user-icon {
              font-size: 3.5em;
            }
          }

          .right {
            min-width: 75%;
            max-width: 75%;
            padding: 0 0.375rem 0 0.75rem;

            .name {
              font-size: 1.25em;
            }

            .position {
              font-size: 1em;
              margin-top: 0.25rem;
            }
          }
        }

        .txt-profile-info {
          margin-top: 0.5rem;
          padding: 1.125rem 0;
          font-size: 1.0625em;
        }

        .profile-info {
          margin-top: 0.5rem;
          padding: 1rem;

          .form-group {
            margin-bottom: 1.25rem;

            fieldset {
              min-height: 2.875rem;

              legend {
                padding: 0 0.375rem;
                font-size: 0.8125em;
              }

              .value {
                margin-top: 0.375rem;
                padding: 0 0 0 1rem;
                font-size: 1em;
              }
            }
          }
        }

        .logout {
          margin-top: 0.5rem;
          padding: 1.125rem;
          margin-bottom: 3.625rem;

          p {
            font-size: 0.9375em
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

        .top-head {
          margin-top: 3.75rem;
          padding: 2rem 1.5rem;

          .left {
            min-width: 25%;
            max-width: 25%;

            .user-icon {
              font-size: 4.25em;
            }
          }

          .right {
            min-width: 75%;
            max-width: 75%;
            padding: 0 0.5rem 0 1rem;

            .name {
              font-size: 1.5em;
            }

            .position {
              font-size: 1.1875em;
              margin-top: 0.375rem;
            }
          }
        }

        .txt-profile-info {
          margin-top: 0.625rem;
          padding: 1.25rem 0;
          font-size: 1.1875em;
        }

        .profile-info {
          margin-top: 0.625rem;
          padding: 1.5rem;

          .form-group {
            margin-bottom: 1.5rem;

            fieldset {
              min-height: 3.25rem;

              legend {
                padding: 0 0.5rem;
                font-size: 0.9375em;
              }

              .value {
                margin-top: 0.4375rem;
                padding: 0 0 0 1.5rem;
                font-size: 1.125em;
              }
            }
          }
        }

        .logout {
          margin-top: 0.625rem;
          padding: 1.25rem;
          margin-bottom: 4.125rem;

          p {
            font-size: 1.0625em
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/employee/MenuBar.vue';
import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    MenuBar,
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      apiReady: '',
      promise: null,
      hasNotif: false,
    };
  },

  computed: {
    ...mapGetters('employeeEmployee', [
      'user',
    ]),

    ...mapGetters('employeeNotification', [
      'triggerNotif',
    ]),
  },

  methods: {
    ...mapActions('employeeEmployee', [
      'getUser',
    ]),

    ...mapActions('employeeNotification', [
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
            employeeId: this.$cookies.get('user').id,
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

    async getUserAccount() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      this.promise = await this.promiseAPI();

      // hide loader
      this.animationLoaderDisplay = false;
      this.dataReady();
    },

    dataReady() {
      if (this.promise === 200) {
        this.apiReady = true;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.getUser({
          params: {
            employeeId: this.$cookies.get('user').id,
          },
          resolve,
        });
      });
    },

    logout() {
      this.$cookies.remove('user');
      this.$router.push({ name: 'Login' });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Employee');

    // req api
    this.getUserAccount();
    this.isHasNotif();
  },

};

</script>
