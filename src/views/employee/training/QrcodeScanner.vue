<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="`/training/${paramTraining}`" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Absensi</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <p class="error">{{ error }}</p>
      <div class="scanner">
        <qrcode-stream @decode="onDecode" @init="onInit" />
      </div>
    </div>
    <!-- end content -->

  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
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

      .back {
        position: absolute;
        color: #FFF;
        top: 29%;
        left: 1rem;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .error {
        margin: 0;
        font-weight: 500;
        color: #E74C3C;
        padding: 1rem;
        font-size: 0.875em;
      }

      .scanner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {

      .head {
        padding: 1.0625rem 1.25rem;

        .back {
          top: 30.5%;
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .error {
          padding: 1.25rem;
          font-size: 0.9375em;
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

        .back {
          top: 32%;
          left: 1.5rem;
          font-size: 1.25em;
        }

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .error {
          padding: 1.5rem;
          font-size: 1em;
        }

        .scanner {
          max-width: 466px;
          margin: 0 auto;
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import { QrcodeStream } from 'vue-qrcode-reader';

export default {

  components: {
    QrcodeStream,
  },

  data() {
    return {
      result: '',
      error: '',
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        this.catchError(error);
      }
    },

    catchError({ name }) {
      if (name === 'NotAllowedError') {
        this.error = 'ERROR: You need to grant camera access permisson.';
      } else if (name === 'NotFoundError') {
        this.error = 'ERROR: No camera on this device.';
      } else if (name === 'NotSupportedError') {
        this.error = 'ERROR: Secure context required (HTTPS, localhost).';
      } else if (name === 'NotReadableError') {
        this.error = 'ERROR: Is the camera already in use?.';
      } else if (name === 'OverconstrainedError') {
        this.error = 'ERROR: Installed cameras are not suitable.';
      } else if (name === 'StreamApiNotSupportedError') {
        this.error = 'ERROR: Stream API is not supported in this browser.';
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_EMPLOYEE');

    // get params
    this.paramTraining = this.$route.params.training;
  },

};

</script>
