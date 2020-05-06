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
      <div class="notif">
        <div class="title">Reminder - Training</div>
        <div class="message">{{ message }}</div>
        <hr>
      </div>
    </div>
    <!-- end content -->

    <MenuBar></MenuBar>
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
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      color: #FFF;
      background-color: #0ABDE3;
      font-weight: 600;
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

  // // width 768px - 1024px (Mini desktop / Tablet landscape)
  // @media (min-width: 768px) and (max-width: 1024px) {
  //   #container {

  //     .head {
  //       padding: 1.25rem 1.75rem;

  //       .text {
  //         font-size: 1.4375em;
  //       }
  //     }

  //     .content {
  //       padding: 2rem 12rem;
  //       margin-top: 4.0625rem;
  //       margin-bottom: 3rem;

  //       .notif {
  //         margin-bottom: 2rem;

  //         .title {
  //           font-size: 1.375em;
  //         }

  //         .message {
  //           margin-top: 1.125rem;
  //           font-size: 1.125em;
  //         }

  //         hr {
  //           margin-top: 2rem;
  //         }
  //       }
  //     }
  //   }
  // }
  // // width 768px - 1024px (Mini desktop / Tablet landscape)

  // // width 1025px (Desktop)
  // @media (min-width: 1025px) {
  //   #container {

  //     .head {
  //       padding: 1.625rem 1.875rem;

  //       .text {
  //         font-size: 1.6875em;
  //       }
  //     }

  //     .content {
  //       padding: 2rem 20rem;
  //       margin-top: 4.9375rem;
  //       margin-bottom: 3rem;

  //       .notif {
  //         margin-bottom: 2.25rem;

  //         .title {
  //           font-size: 1.4375em;
  //         }

  //         .message {
  //           margin-top: 1.25rem;
  //           font-size: 1.1875em;
  //         }

  //         hr {
  //           margin-top: 2.1875rem;
  //         }
  //       }
  //     }
  //   }
  // }
  // // width 1025px (Desktop)

</style>

<script>
import MenuBar from '../../components/employee/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada training 1 di Wisma Rahayu. Tepatnya pada tanggal 15 September 2020. Untuk lebih detailnya, cek jadwal di halaman training ya!',
    };
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
