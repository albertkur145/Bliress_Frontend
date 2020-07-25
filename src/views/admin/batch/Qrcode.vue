<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="back" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="qrcode-generator">
        <div class="qrcode">
          <qrcode-vue :value="qrValue" size="175" level="L"></qrcode-vue>
        </div>
        <hr>
        <div class="txt-training">Training {{ paramTraining }}</div>
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
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        color: #FFF;
        text-decoration: none;
        font-size: 1.0625em;
      }
    }

    .content {
      position: fixed;
      background-image: linear-gradient(to bottom, #0abde3, #15bfe4, #1dc1e4, #23c2e5, #29c4e5, #2fc6e6, #34c7e6, #39c9e7, #3fcbe8, #45cdea, #4acfeb, #4fd1ed);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .qrcode-generator {
        display: inline-block;
        background-color: #FFF;
        border-radius: 0.5rem;
        padding: 1rem;

        hr {
          margin: 0.75rem 0;
        }

        .txt-training {
          text-align: center;
          color: #666;
          font-size: 0.8125em;
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

        .back {
          font-size: 1.125em;
        }
      }

      .content {

        .qrcode-generator {

          .txt-training {
            font-size: 0.875em;
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

        .back {
          font-size: 1.25em;
        }
      }

      .content {
        max-width: 466px;
        margin: 0 auto;

        .qrcode-generator {

          .txt-training {
            font-size: 0.9375em;
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import QrcodeVue from 'qrcode.vue';

export default {

  components: {
    QrcodeVue,
  },

  data() {
    return {
      paramBatch: '',
      paramTraining: '',
    };
  },

  computed: {
    back() {
      return {
        name: 'AdminAttendance',
        params: {
          batch: this.paramBatch,
          training: this.paramTraining,
        },
      };
    },

    qrValue() {
      return `${this.paramBatch}?${this.paramTraining}`;
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // get params
    this.paramBatch = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;
  },

};

</script>
