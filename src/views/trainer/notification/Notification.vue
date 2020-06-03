<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Notifikasi</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="notif">
        <div class="title">Reminder - Training</div>
        <div class="message">{{ message }}</div>
        <hr>
      </div>
      <div class="notif">
        <div class="title">Reminder - Training</div>
        <div class="message">{{ message }}</div>
        <hr>
      </div>
      <div class="notif">
        <div class="title">Reminder - Training</div>
        <div class="message">{{ message }}</div>
        <hr>
      </div>
    </div>
    <!-- end content -->

    <MenuBar></MenuBar>
    <PopupMessage :class="{ 'display-flex': popupMessageDisplay }"></PopupMessage>
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
      padding: 1.25rem 1rem;
      margin-top: 3rem;
      margin-bottom: 1.5rem;

      .notif {
        color: #555;
        margin-bottom: 1.125rem;

        .title {
          font-weight: 600;
          font-size: 1em;
        }

        .message {
          margin-top: 0.75rem;
          font-size: 0.8125em;
        }

        hr {
          border-top: 0.0625rem solid #BBB;
          margin-top: 1.375rem;
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
        padding: 1.5rem 1.25rem;
        margin-top: 3.375rem;
        margin-bottom: 2rem;

        .notif {
          margin-bottom: 1.25rem;

          .title {
            font-size: 1.1875em;
          }

          .message {
            margin-top: 0.875rem;
            font-size: 0.9375em;
          }

          hr {
            margin-top: 1.5rem;
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
        padding: 1.75rem 1.5rem;
        margin-top: 3.875rem;
        margin-bottom: 2rem;

        .notif {
          margin-bottom: 1.5rem;

          .title {
            font-size: 1.25em;
          }

          .message {
            margin-top: 1rem;
            font-size: 1em;
          }

          hr {
            margin-top: 1.75rem;
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
import PopupMessage from '@/components/PopupMessage.vue';

export default {

  components: {
    MenuBar,
    AnimationLoader,
    PopupMessage,
  },

  data() {
    return {
      message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada training 1 di Wisma Rahayu. Tepatnya pada tanggal 15 September 2020. Untuk lebih detailnya, cek jadwal di halaman training ya!',
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

};

</script>
