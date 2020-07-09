<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="back" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">{{ title }}</span>
      </router-link>
      <div class="save" @click="validateForm">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="form-group">
        <fieldset>
          <legend>Training ke</legend>
          <select
          :class="{ 'fieldset-disabled': inputDisabled }"
          class="input-text"
          v-model="form.training"
          :disabled="inputDisabled">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Tanggal</legend>
          <input type="date" class="input-text" v-model="form.date">
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset class="text-area">
          <legend>Lokasi</legend>
          <textarea class="input-area" v-model="form.location"></textarea>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Jam mulai</legend>
          <select class="input-text" v-model="form.timeStart">
            <option value="06:00">06:00 WIB</option>
            <option value="07:00">07:00 WIB</option>
            <option value="08:00">08:00 WIB</option>
            <option value="09:00">09:00 WIB</option>
            <option value="10:00">10:00 WIB</option>
            <option value="11:00">11:00 WIB</option>
            <option value="12:00">12:00 WIB</option>
            <option value="13:00">13:00 WIB</option>
            <option value="14:00">14:00 WIB</option>
            <option value="15:00">15:00 WIB</option>
            <option value="16:00">16:00 WIB</option>
            <option value="17:00">17:00 WIB</option>
            <option value="18:00">18:00 WIB</option>
            <option value="19:00">19:00 WIB</option>
            <option value="20:00">20:00 WIB</option>
            <option value="21:00">21:00 WIB</option>
            <option value="22:00">22:00 WIB</option>
            <option value="23:00">23:00 WIB</option>
            <option value="24:00">24:00 WIB</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Jam selesai</legend>
          <select class="input-text" v-model="form.timeFinish">
            <option value="06:00">06:00 WIB</option>
            <option value="07:00">07:00 WIB</option>
            <option value="08:00">08:00 WIB</option>
            <option value="09:00">09:00 WIB</option>
            <option value="10:00">10:00 WIB</option>
            <option value="11:00">11:00 WIB</option>
            <option value="12:00">12:00 WIB</option>
            <option value="13:00">13:00 WIB</option>
            <option value="14:00">14:00 WIB</option>
            <option value="15:00">15:00 WIB</option>
            <option value="16:00">16:00 WIB</option>
            <option value="17:00">17:00 WIB</option>
            <option value="18:00">18:00 WIB</option>
            <option value="19:00">19:00 WIB</option>
            <option value="20:00">20:00 WIB</option>
            <option value="21:00">21:00 WIB</option>
            <option value="22:00">22:00 WIB</option>
            <option value="23:00">23:00 WIB</option>
            <option value="24:00">24:00 WIB</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Trainer</legend>
          <select class="input-text" v-model="form.trainerId">
            <option v-for="(value) in trainerList.data"
            :key="value.id" :value="value.id">{{ value.name }}</option>
          </select>
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
        font-size: 0.8125em;

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
            top: 0.4375rem;
            left: 0;
            bottom: 0;
            width: 100%;
            border: 0;
            outline: none;
            -webkit-appearance: none;
            color: #333;
            padding: 0.125rem 1rem 0 1.5rem;
            font-size: 0.875em;

            &[type=date] {
              padding: 0.125rem 1rem 0 1.5rem;
            }

            &[type=date]::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
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

        .fieldset-disabled:hover {
          cursor: no-drop;
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
            margin-left: 0.75rem;
          }
        }

        .save {
          font-size: 0.875em;
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
              padding: 0.125rem 1.25rem 0 2rem;
              font-size: 0.9375em;

              &[type=date] {
                padding: 0.125rem 1.25rem 0 1.8125rem;
              }
            }

            &.text-area {
              min-height: 8rem;
            }

            .input-area {
              top: 1.625rem;
              bottom: 0.75rem;
              padding: 0 1.9375rem 2rem;
              font-size: 0.9375em;
              line-height: 1.375rem;
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
            margin-left: 0.75rem;
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
              padding: 0.375rem 1.25rem 0 2.25rem;
              font-size: 1.0625em;

              &[type=date] {
                padding: 0.125rem 1.25rem 0 2.25rem;
              }
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
      title: 'Tambah',
      paramBatch: '',
      paramTraining: '',
      animationLoaderDisplay: false,
      inputDisabled: false,
      apiReady: false,
      form: {
        batchId: null,
        training: '1',
        date: '2020-01-01',
        location: '',
        timeStart: '06:00',
        timeFinish: '06:00',
        trainerId: 1,
      },
    };
  },

  computed: {
    ...mapGetters('adminTraining', [
      'training',
    ]),

    ...mapGetters('adminTrainer', [
      'trainerList',
    ]),

    back() {
      return {
        name: 'AdminTraining',
        params: {
          batch: this.paramBatch,
        },
      };
    },
  },

  methods: {
    ...mapActions('adminTraining', [
      'postTraining',
      'putTraining',
      'getTrainingBy',
    ]),

    ...mapActions('adminTrainer', [
      'getTrainers',
    ]),

    async getAllTrainer() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllTrainer();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllTrainer() {
      return new Promise((resolve) => {
        this.getTrainers({
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

    validateForm() {
      if (this.form.location.length === 0) {
        this.$func.popupError('Form tidak lengkap!', 0);
      } else {
        this.form.batchId = 202006;

        if (!this.paramTraining) {
          this.reqApi(this.postTraining);
        } else {
          this.reqApi(this.putTraining);
        }
      }
    },

    async reqApi(action) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseReqApi(action);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterReqApi(promise);
    },

    promiseReqApi(action) {
      return new Promise((resolve) => {
        action({
          params: this.form,
          resolve,
        });
      });
    },

    afterReqApi(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil simpan data', 5000, this.back);
      } else {
        this.$func.popupLostConnection();
      }
    },

    async getTraininyByTraining() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetTrainingByTraining();

      // show loader
      this.animationLoaderDisplay = false;
      this.afterGetTrainingByTraining(promise);
    },

    promiseGetTrainingByTraining() {
      return new Promise((resolve) => {
        this.getTrainingBy({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
          },
          resolve,
        });
      });
    },

    afterGetTrainingByTraining(promise) {
      if (promise === 200) {
        this.setForm();
      } else {
        this.$func.popupLostConnection();
      }
    },

    setForm() {
      const training = this.training.data;

      this.form = {
        batchId: this.paramBatch,
        training: training.training,
        date: training.date,
        location: training.location,
        timeStart: training.timeStart,
        timeFinish: training.timeFinish,
        trainerId: training.trainerId,
      };
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // req api
    this.getAllTrainer();

    // get params
    this.paramBatch = parseInt(this.$route.params.batch, 10);
    if (this.$route.params.training) {
      this.paramTraining = this.$route.params.training;
      this.title = 'Ubah';
      this.inputDisabled = true;

      // req api
      this.getTraininyByTraining();
    }
  },

};

</script>
