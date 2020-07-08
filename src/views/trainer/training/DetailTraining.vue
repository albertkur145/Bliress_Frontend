<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link to="/trainer/training" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Training {{ paramTraining }}</div>

      <router-link :to="redirectToQrcode" class="qr-code-reader">
        <font-awesome-icon icon="qrcode"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- material list -->
      <div class="material-list">
        <div class="top">
          <div class="title">List materi</div>
          <div class="add" @click="redirectToUpload"><font-awesome-icon icon="pen" class="icon-plus"></font-awesome-icon></div>
        </div>

        <div class="data">
          <table>
            <thead>
              <th></th>
              <th></th>
            </thead>

            <tbody>
              <tr v-for="(value) in materials" :key="value.id">
                <td>{{ value.name }}</td>
                <td><font-awesome-icon
                icon="times"
                class="times-icon"
                @click="confirmDelete(value.id)"></font-awesome-icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- material list -->

      <div class="txt-batch">Batch - {{ batch.batch }} {{ batch.year }}</div>

      <!-- participants -->
      <div class="participants">
        <div class="top">
          <div class="title">Peserta</div>
          <div class="count">{{ employees.total }} orang</div>
        </div>

        <div class="data">
          <table>
            <thead>
              <th>ID</th>
              <th>Nama</th>
              <th>Status</th>
            </thead>

            <tbody>
              <tr v-for="(value) in employees.employee" :key="value.id">
                <td>{{ value.cardId }}</td>
                <td>{{ value.name }}</td>
                <td v-if="value.status"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
                <td v-else><font-awesome-icon icon="times" class="times-icon"></font-awesome-icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- participants -->

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
    background-color: #F2F2F2;

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

      .qr-code-reader {
        position: absolute;
        color: #FFF;
        top: 29%;
        right: 1rem;
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .material-list {
        background-color: #FFF;
        padding: 1.25rem 1rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-weight: 500;
            color: #2C3E50;
            font-size: 1em;
          }

          .add {
            cursor: pointer;
            color: #16A085;
            font-size: 0.8125em;
          }
        }

        .data {
          max-width: 100%;
          overflow-x: auto;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            th, td {
              color: #333;
              border-bottom: 0.0625rem solid #CCC;
              padding: 0.625rem;
              font-size: 0.875em;
            }

            td:last-child,
            th:last-child {
              text-align: right;
            }

            .times-icon {
              cursor: pointer;
              color: #E74C3C;
              font-size: 1em;
            }
          }
        }
      }

      .txt-batch {
        background-color: #FFF;
        text-align: center;
        color: #1B9CFC;
        font-weight: 500;
        margin-top: 0.5rem;
        padding: 1.25rem;
        font-size: 1.0625em;
      }

      .participants {
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 1.125rem 1rem 1.875rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-weight: 500;
            color: #444;
            font-size: 1em;
          }

          .count {
            color: #555;
            font-size: 0.875em;
          }
        }

        .data {
          max-width: 100%;
          overflow-x: auto;
          margin-top: 1.25rem;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            th, td {
              color: #333;
              border-bottom: 0.125rem solid #DDD;
              padding: 0.75rem 0.9375rem;
              font-size: 0.875em;
            }

            td:last-child,
            th:last-child {
              text-align: center;
            }

            .check-icon {
              color: #20BF6B;
              font-size: 1em;
            }

            .times-icon {
              color: #E74C3C;
              font-size: 1em;
            }
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
          top: 30.5%;
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.125em;
        }

        .qr-code-reader {
          top: 30.5%;
          right: 1.25rem;
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .material-list {
          padding: 1.5rem 1.25rem;

          .top {

            .title {
              font-size: 1.0625em;
            }

            .add {
              font-size: 0.875em;
            }
          }

          .data {

            table {

              th, td {
                padding: 0.75rem;
                font-size: 0.9375em;
              }

              .times-icon {
                font-size: 1.0625em;
              }
            }
          }
        }

        .txt-batch {
          padding: 1.5rem;
          font-size: 1.125em;
        }

        .participants {
          padding: 1.25rem 1.125rem 2rem;

          .top {

            .title {
              font-size: 1.0625em;
            }

            .count {
              font-size: 0.9375em;
            }
          }

          .data {
            margin-top: 1.5rem;

            table {

              th, td {
                padding: 0.8125rem 1rem;
                font-size: 0.9375em;
              }

              .check-icon {
                font-size: 1.0625em;
              }

              .times-icon {
                font-size: 1.0625em;
              }
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
          top: 32%;
          left: 1.5rem;
          font-size: 1.25em;
        }

        .text {
          font-size: 1.25em;
        }

        .qr-code-reader {
          top: 32%;
          right: 1.5rem;
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .material-list {
          padding: 1.75rem 1.5rem;

          .top {

            .title {
              font-size: 1.125em;
            }

            .add {
              font-size: 0.9375em;
            }
          }

          .data {

            table {

              th, td {
                padding: 0.8125rem;
                font-size: 1em;
              }

              .times-icon {
                font-size: 1.125em;
              }
            }
          }
        }

        .txt-batch {
          padding: 1.75rem;
          font-size: 1.1875em;
        }

        .participants {
          padding: 1.4375rem 1.375rem 2.5rem;

          .top {

            .title {
              font-size: 1.125em;
            }

            .count {
              font-size: 1.0625em;
            }
          }

          .data {
            margin-top: 1.75rem;

            table {

              th, td {
                padding: 1rem 1.25rem;
                font-size: 1em;
              }

              .check-icon {
                font-size: 1.125em;
              }

              .times-icon {
                font-size: 1.125em;
              }
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
      paramBatch: '',
      paramTraining: '',
      animationLoaderDisplay: false,
      apiReady: false,
      materials: [],
      batch: {},
      employees: {},
    };
  },

  computed: {
    ...mapGetters('trainerTraining', [
      'trainingBy',
    ]),

    redirectToQrcode() {
      return {
        name: 'TrainerQrcode',
        params: {
          training: this.paramTraining,
          batch: this.paramBatch,
        },
      };
    },
  },

  methods: {
    ...mapActions('trainerTraining', [
      'getTrainingBy',
    ]),

    ...mapActions('trainerMaterial', [
      'deleteMaterial',
    ]),

    async getTrainingById() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetTrainingById();

      // hide loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetTrainingById() {
      return new Promise((resolve) => {
        this.getTrainingBy({
          params: {
            trainerId: this.$cookies.get('user').id,
            training: this.paramTraining,
            batchId: this.paramBatch,
          },
          resolve,
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;

        // assingment split data response
        this.materials = this.trainingBy.data.materials;
        this.batch = this.trainingBy.data.batch;
        this.employees = this.trainingBy.data.employees;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    redirectToUpload() {
      this.$router.push({
        name: 'TrainerUploadMaterial',
        params: {
          training: this.paramTraining,
          batch: this.paramBatch,
        },
      });
    },

    async confirmDelete(materialId) {
      const res = await this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Data yang dihapus tidak dapat kembali lagi',
      );

      if (res.value) {
        this.deleteData(materialId);
      }
    },

    async deleteData(materialId) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseDeleteData(materialId);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterDeleteData(promise);
    },

    promiseDeleteData(materialId) {
      return new Promise((resolve) => {
        this.deleteMaterial({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
            materialId,
          },
          resolve,
        });
      });
    },

    afterDeleteData(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil hapus data', 5000, null);
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Trainer');

    // get params
    this.paramTraining = this.$route.params.training;
    this.paramBatch = parseInt(this.$route.params.batch, 10);

    // req api
    this.getTrainingById();
  },

};

</script>
