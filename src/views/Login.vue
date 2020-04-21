<template>
    <div id="container">
        <div class="width">{{ windowWidth }}</div>
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
          <div>
            <div class="input-container">
              <font-awesome-icon icon="envelope" class="icon-form" />
              <input type="text" id="email" placeholder="example@gmail.com" autocomplete="off">
            </div>
          </div>
          <!-- input email -->

          <!-- input password -->
          <div>
            <div class="input-container">
              <font-awesome-icon icon="lock" class="icon-form" />
              <input type="password" id="password" placeholder="********" autocomplete="off">
            </div>
          </div>
          <!-- input password -->

          <!-- btn login -->
          <button class="btn-login">Masuk</button>
          <!-- btn login -->
        </div>
        <!-- end form -->

        <!-- register link -->
        <div class="register-link">
          <span>Belum punya akun?</span> <router-link to="/register">Daftar disini</router-link>
        </div>
        <!-- end register link -->
    </div>
</template>

<style lang="scss" scoped>
  @media (min-width: 481px) and (max-width: 767px) {
    #container {
      font-family: 'Roboto';
      max-width: 100%;
      min-height: 100vh;
      background-image: url('../assets/bg-linear-md.svg');
      background-repeat: repeat-x;
      padding: 3rem;

      .width {
        text-align: center;
        color: #FFF;
        padding-top: 1rem;
      }

      .header {
          text-align: center;
          color: #FFF;
          padding: 2rem 0;

        hr {
          display: none;
          border: 0.0625rem solid #FFF;
        }

        .brand {
          font-weight: 900;
          text-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 77, 133, 0.25);
          margin: 0;
          padding: 0;
          font-size: 3.5em;
        }

        .slogan {
          padding: 0;
          font-weight: 500;
          font-size: 1.5em;
          margin: 0.625rem 0 0;
        }
      }

      .form {
        overflow: hidden;
        margin-top: 2rem;

        .input-container {
          display: inline-block;
          position: relative;
          width: 100%;
          margin-bottom: 1rem;
        }

        .icon-form {
          position: absolute;
          color: #FFF;
          left: 0;
          top: 27%;
          font-size: 1.25em;
        }

        input {
          background-color: transparent;
          color: #FFF;
          font-weight: 600;
          outline: none;
          border: 0;
          width: 100%;
          transition: .2s linear;
          padding: 1rem 1rem 1rem 2.5rem;
          font-size: 1em;
          border-bottom: 0.1875rem solid rgba(255, 255, 255, 0.5);

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
          margin-top: 1rem;
          padding: 1rem;
          font-size: 1em;

          &:hover {
            color: #0A91CB;
            border: 0.125rem solid #007EB5;
          }
        }
      }

      .register-link {
        color: #FFF;
        font-weight: 500;
        margin-top: 1rem;
        font-size: 1em;

        a {
          color: #FFF;
          transition: color .1s linear;

          &:hover {
            color: blueviolet;
          }
        }
      }
    }
  }
</style>
<script>

export default {
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
