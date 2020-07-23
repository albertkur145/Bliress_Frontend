<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Notifikasi</div>
      <router-link :to="{ name: 'AdminAddNotification' }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- list of notification -->
      <div class="notification-list">
        <div class="notification" v-for="(value) in notificationList.data" :key="value.id">
          <div class="title">{{ value.title }}</div>
          <div class="message">{{ value.message }}</div>
          <div class="batch">Batch - {{ value.batch }}</div>
          <div class="time">{{ value.date }} WIB</div>
        </div>
      </div>
      <!-- list of notification -->

    </div>
    <!-- end content -->

    <MenuBar></MenuBar>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
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

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;
      margin-bottom: 2.375rem;

      .notification-list {
        padding: 1rem;

        .notification {
          color: #444;
          background-color: #FFF;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          padding: 0.875rem 1rem;

          .title {
            font-weight: 500;
            font-size: 1.0625em;
          }

          .message {
            margin-top: 0.875rem;
            font-size: 0.875em;
          }

          .batch {
            text-align: right;
            margin-top: 2.25rem;
            font-size: 0.8125em;
          }

          .time {
            text-align: right;
            margin-top: 0.375rem;
            font-size: 0.8125em;
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

        .icon-plus {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.375rem;
        margin-bottom: 2.75rem;

        .notification-list {
          padding: 1.25rem;

          .notification {
            padding: 1rem 1.125rem;

            .title {
              font-size: 1.125em;
            }

            .message {
              margin-top: 1rem;
              font-size: 0.9375em;
            }

            .batch {
              margin-top: 2.5rem;
              font-size: 0.875em;
            }

            .time {
              font-size: 0.875em;
            }
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

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;
        margin-bottom: 3rem;

        .notification-list {
          padding: 1.5rem;

          .notification {
            padding: 1.25rem 1.375rem;

            .title {
              font-size: 1.1875em;
            }

            .message {
              margin-top: 1.25rem;
              font-size: 1em;
            }

            .batch {
              margin-top: 2.75rem;
              font-size: 0.9375em;
            }

            .time {
              font-size: 0.9375em;
            }
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/admin/MenuBar.vue';
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
      apiReady: false,
    };
  },

  computed: {
    ...mapGetters('adminNotification', [
      'notificationList',
    ]),
  },

  methods: {
    ...mapActions('adminNotification', [
      'getNotifications',
    ]),

    async getAllNotification() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseAPI();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.getNotifications({
          resolve,
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // req api
    this.getAllNotification();
  },

};

</script>
