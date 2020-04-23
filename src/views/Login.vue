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

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
    min-height: 100vh;
    background-image: url('../assets/bg-linear-md.svg');
    background-repeat: repeat-x;
    background-attachment: fixed;
    padding: 2rem 1.125rem;

    .width {
      display: block;
      text-align: center;
      color: #FFF;
      padding-top: 1rem;
    }

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
        font-size: 1.125em;
        margin: 0.5rem 0 0;
      }
    }

    .form {
      overflow: hidden;
      margin-top: 1.5rem;

      .input-container {
        display: inline-block;
        position: relative;
        width: 100%;
        margin-bottom: 1.25rem;
      }

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

    .register-link {
      color: #FFF;
      font-weight: 500;
      margin-top: 0.75rem;
      font-size: 0.8125em;

      a {
        color: #FFF;
        transition: color .1s linear;

        &:hover {
          color: blueviolet;
        }
      }
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {
      padding: 2.5rem 1.5rem;

      .header {
          padding: 1.5rem 0;

        hr {
          display: block;
        }

        .brand {
          font-size: 3em;
        }

        .slogan {
          font-size: 1.375em;
          margin: 0.5rem 0 0;
        }
      }

      .form {
        margin-top: 2rem;

        .input-container {
          margin-bottom: 1.5rem;
        }

        .icon-form {
          top: 27%;
          font-size: 1.25em;
        }

        input {
          padding: 1rem 1rem 1rem 2.5rem;
          font-size: 1em;
        }

        .btn-login {
          margin-top: 0.375rem;
          padding: 0.75rem;
          font-size: 0.9375em;
        }
      }

      .register-link {
        margin-top: 0.875rem;
        font-size: 0.875em;
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width 481px - 767px (Big Mobile / Tablet)
  @media (min-width: 481px) and (max-width: 767px) {
    #container {
      padding: 3rem;

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
        }

        .icon-form {
          top: 27%;
          font-size: 1.25em;
        }

        input {
          padding: 1rem 1rem 1rem 2.5rem;
          font-size: 1em;
        }

        .btn-login {
          margin-top: 1rem;
          padding: 1rem;
          font-size: 1em;
        }
      }

      .register-link {
        margin-top: 1rem;
        font-size: 1em;
      }
    }
  }
  // width 481px - 767px (Most Mobile / Tablet)

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
