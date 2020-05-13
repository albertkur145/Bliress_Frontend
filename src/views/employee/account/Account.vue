<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Akun</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- top head -->
      <div class="top-head">
        <div class="left">
          <font-awesome-icon icon="user-circle" class="user-icon"></font-awesome-icon>
        </div>
        <div class="right">
          <p class="name">Albert Kurniawan</p>
          <p class="position">Software Developer</p>
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
            <p class="value batch">2</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nama lengkap</legend>
            <p class="value name">Albert Kurniawan</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Email</legend>
            <p class="value email">albertkurzl45@gmail.com</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nomor HP</legend>
            <p class="value number">081935542205</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jabatan</legend>
            <p class="value position">Software Developer</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Tanggal lahir</legend>
            <p class="value birthdate">12/08/1990</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jenis kelamin</legend>
            <p class="value gender">Pria</p>
          </fieldset>
        </div>
      </div>
      <!-- profile info data -->

      <!-- logout -->
      <div class="logout">
        <p @click="logout">keluar</p>
      </div>
      <!-- logout -->

    </div>
    <!-- end content -->

    <!-- menu bar -->
    <MenuBar></MenuBar>
    <!-- end menu bar -->
  </div>
</template>

<style lang="scss" scoped>

  #container {
    font-family: 'Roboto';
    max-width: 100%;
    background-color: #F2F2F2;

    .head {
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
  }

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

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    logout() {
      this.$router.push({ name: 'Login' });
    },
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
