<template>
  <div id="container">
    <div class="width">{{ windowWidth }}</div>
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
            <legend>Nama lengkap</legend>
            <p class="value name">Albert Kurniawan</p>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Email</legend>
            <p class="value email">albertkurniawanz220@gmail.com</p>
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
        <p>keluar</p>
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

  .width {
    display: none;
    text-align: center;
  }

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {
      font-family: 'Roboto';
      max-width: 100%;
      min-height: 100vh;
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
        padding: 1.125rem 1.25rem;
      }

      .content {

        p {
          margin: 0;
        }

        .top-head {
          display: flex;
          align-items: center;
          background-color: #FFF;
          margin-top: 3.375rem;
          padding: 1.5rem 1rem;

          .left {
            min-width: 25%;
            max-width: 25%;

            .user-icon {
              color: #0094FF;
              font-size: 3.5em;
            }
          }

          .right {
            min-width: 75%;
            max-width: 75%;
            color: #333;
            box-sizing: border-box;
            padding: 0 0.5rem;

            .name {
              font-weight: 500;
              font-size: 1.25em;
            }

            .position {
              font-weight: 400;
              font-size: 1em;
              margin-top: 0.25rem;
            }
          }
        }

        .txt-profile-info {
          font-weight: 600;
          color: #00A3FF;
          background-color: #FFF;
          text-align: center;
          margin-top: 0.5rem;
          padding: 1.125rem 0;
        }

        .profile-info {
          background-color: #FFF;
          margin-top: 0.5rem;
          padding: 1rem;

          .form-group {
            max-width: 100%;
            overflow-x: auto;
            margin-bottom: 1.25rem;

            fieldset {
              border: 0.0625rem solid #BBB;
              border-radius: 0.5rem;
              min-height: 2.875rem;

              legend {
                color: #777;
                padding: 0 0.375rem;
                font-size: 0.8125em;
              }

              .value {
                color: #333;
                box-sizing: border-box;
                min-width: 100%;
                max-width: 100%;
                margin-top: 0.375rem;
                padding: 0 0 0 1rem;
                font-size: 1em;
              }
            }
          }
        }

        .logout {
          cursor: pointer;
          background-color: #FFF;
          text-align: center;
          margin-top: 0.5rem;
          padding: 1.125rem;
          margin-bottom: 3.625rem;

          p {
            text-transform: uppercase;
            font-weight: 600;
            color: #FF003D;
            transition: color .2s linear;
          }

          &:hover p {
            color: #900404;
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

</style>

<script>
import MenuBar from '../components/MenuBar.vue';

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
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
