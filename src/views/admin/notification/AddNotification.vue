<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminNotification' }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Tambah</span>
      </router-link>
      <div class="save" @click="save()">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="form-group">
        <fieldset>
          <legend>Ditujukan ke batch</legend>
          <select class="input-text" v-model="form.batchId">
            <option value="" disabled>Pilih batch</option>
            <option v-for="(value) in batchList.data.batchList"
            :key="value.batchId"
            :value="value.batchId">{{ value.batchName }}
            </option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Judul</legend>
          <input type="text" class="input-text" v-model="form.title">
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset class="text-area">
          <legend>Pesan</legend>
          <textarea class="input-area" v-model="form.message"></textarea>
        </fieldset>
      </div>
    </div>
    <!-- end content -->

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
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        text-decoration: none;
        color: #FFF;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .save {
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 500;
        transition: color .2s ease-out;
        font-size: 0.875em;

        &:hover {
          color: #003F62;
        }
      }
    }

    .content {
      margin-top: 3rem;
      padding: 1.375rem 1.0625rem;

      .form-group {
        max-width: 100%;
        margin-bottom: 1.25rem;

        fieldset {
          border: 0.0625rem solid #AAA;
          border-radius: 0.5rem;
          position: relative;
          max-width: 100%;
          min-height: 2.75rem;

          legend {
            color: #777;
            padding: 0 0.3125rem;
            font-size: 0.8125em;
          }

          .input-text {
            position: absolute;
            box-sizing: border-box;
            background-color: transparent;
            left: 0;
            bottom: 0;
            border: 0;
            outline: none;
            -webkit-appearance: none;
            color: #333;
            top: 0.4375rem;
            width: 100%;
            padding: 0.125rem 1rem 0 1.5rem;
            font-size: 0.875em;
          }

          &.text-area {
            min-height: 9rem;
          }

          .input-area {
            font-family: 'Roboto';
            position: absolute;
            box-sizing: border-box;
            background-color: transparent;
            top: 1.625rem;
            left: 0;
            bottom: 0.75rem;
            width: 97%;
            border: 0;
            outline: none;
            color: #333;
            -webkit-appearance: none;
            line-height: 1.375rem;
            padding: 0 1.5rem 1.75rem;
            font-size: 0.875em;
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

        .back {
          font-size: 1.125em;

          .text {
            margin-left: 0.5rem;
          }
        }

        .save {
          font-size: 0.9375em;
        }
      }

      .content {
        margin-top: 3.375rem;
        padding: 1.5rem 1.25rem;

        .form-group {
          margin-bottom: 1.5rem;

          fieldset {
            min-height: 3rem;

            legend {
              padding: 0 0.375rem;
              font-size: 0.875em;
            }

            .input-text {
              top: 0.4375rem;
              padding: 0.125rem 1.25rem 0 2rem;
              font-size: 0.9375em;
            }

            &.text-area {
              min-height: 8rem;
            }

            .input-area {
              top: 1.625rem;
              bottom: 0.75rem;
              line-height: 1.375rem;
              padding: 0 1.9375rem 2rem;
              font-size: 0.9375em;
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

        .back {
          font-size: 1.25em;

          .text {
            margin-left: 0.5rem;
          }
        }

        .save {
          font-size: 1em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding: 2rem 1.75rem;

        .form-group {
          margin-bottom: 1.75rem;

          fieldset {
            min-height: 3.5rem;

            legend {
              padding: 0 0.5rem;
              font-size: 0.9375em;
            }

            .input-text {
              top: 0.4375rem;
              padding: 0.375rem 1.25rem 0 2.25rem;
              font-size: 1.0625em;
            }

            &.text-area {
              min-height: 8rem;
            }

            .input-area {
              top: 1.625rem;
              bottom: 0.75rem;
              padding: 0 2.3125rem 2rem;
              font-size: 1em;
              line-height: 1.4375rem;
            }
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      apiReady: false,
      form: {
        batchId: '',
        title: '',
        message: '',
      },
    };
  },

  computed: {
    ...mapGetters('adminBatch', [
      'batchList',
    ]),
  },

  methods: {
    ...mapActions('adminBatch', [
      'getBatch',
    ]),

    ...mapActions('adminNotification', [
      'postNotification',
    ]),

    async getAllBatch() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllBatch();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllBatch() {
      return new Promise((resolve) => {
        this.getBatch({
          resolve,
          token: this.$cookies.get('token'),
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

    save() {
      if (this.validationForm()) {
        this.sendNotification();
      } else {
        this.$func.popupError('Form tidak lengkap!', 0);
      }
    },

    validationForm() {
      if (this.form.batchId.length === 0
      || this.form.title.length === 0
      || this.form.message.length === 0) {
        return 0;
      }

      return 1;
    },

    async sendNotification() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseSendNotif();

      // show loader
      this.animationLoaderDisplay = false;
      this.afterSendNotif(promise);
    },

    promiseSendNotif() {
      return new Promise((resolve) => {
        this.postNotification({
          params: this.form,
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    afterSendNotif(promise) {
      if (promise === 202) {
        this.$func.popupSuccessfull('Berhasil kirim notifikasi', 5000, { name: 'AdminNotification' });
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // req api
    this.getAllBatch();
  },

};

</script>
