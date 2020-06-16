<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link class="back" :to="{ name: 'AdminBatch' }">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Batch {{ paramBatch }}</span>
      </router-link>
      <div class="delete" @click="confirmDialog">Hapus</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- training list -->
      <div class="training">
        <div class="top">
          <span class="txt">Training</span>
          <router-link :to="{ name: 'AdminTraining', params: { batch: paramBatch } }" class="see">
            Lihat
          </router-link>
        </div>

        <div class="list">
          <div class="train" v-for="(value) in filteredTraining" :key="value.id">
            <p class="title">Training {{ value.training }}</p>
            <p class="date">{{ value.date }}</p>
            <p class="time">{{ value.timeStart }} - {{ value.timeFinish }} WIB</p>
          </div>
        </div>
      </div>
      <!-- training list -->

      <!-- employee table -->
      <div class="employee">
        <div class="top">
          <span class="txt">Pegawai</span>
          <router-link :to="{ name: 'AdminEmployee', params: { batch: paramBatch } }" class="see">
            Lihat
          </router-link>
        </div>

        <div class="table">
          <table>
            <thead>
              <th>ID</th>
              <th>Nama</th>
            </thead>

            <tbody>
              <tr v-for="(value) in filteredEmployee" :key="value.id">
                <td>{{ value.cardId }}</td>
                <td>{{ value.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- employee table -->

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
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        cursor: pointer;
        text-decoration: none;
        color: #FFF;
        font-size: 1.0625em;

        .text {
          margin-left: 0.75rem;
        }
      }

      .delete {
        cursor: pointer;
        color: #FFF;
        text-transform: uppercase;
        font-weight: 500;
        transition: color .1s ease-out;
        font-size: 0.75em;

        &:hover {
          color: #2C3E50;
        }
      }
    }

    .content {
      margin-top: 3rem;
      padding: 2rem 1rem;

      .training {

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .txt {
            color: #444;
            font-weight: 500;
            font-size: 1.1875em;
          }

          .see {
            color: #2980B9;
            text-decoration: none;
            font-size: 0.875em;
          }
        }

        .list {
          margin-top: 1.25rem;

          .train {
            box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4);
            text-align: center;
            border-radius: 0.25em;
            margin-bottom: 0.6875rem;
            padding: 1.3125rem 0.9375rem;

            p {
              margin: 0;
            }

            .title {
              font-weight: 500;
              color: #E74C3C;
              font-size: 1.125em;
            }

            .date {
              color: #444;
              font-size: 0.875em;
              margin-top: 1.1875rem;
            }

            .time {
              color: #444;
              font-size: 0.875em;
              margin-top: 0.3125rem;
            }
          }
        }
      }

      .employee {
        margin-top: 2.75rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .txt {
            color: #444;
            font-weight: 500;
            font-size: 1.1875em;
          }

          .see {
            color: #2980B9;
            text-decoration: none;
            font-size: 0.875em;
          }
        }

        .table {
          max-width: 100%;
          overflow-x: auto;
          margin-top: 1.25rem;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            th, td {
              color: #333;
              border-bottom: 0.0625rem solid #DDD;
              padding: 0.8125rem 0.9375rem;
              font-size: 0.875em;
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
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .delete {
          font-size: 0.875em;
        }
      }

      .content {
        margin-top: 3.375rem;
        padding: 2.25rem 1.25rem;

        .training {

          .top {

            .txt {
              font-size: 1.25em;
            }

            .see {
              font-size: 0.9375em;
            }
          }

          .list {
            margin-top: 1.5rem;

            .train {
              margin-bottom: 0.75rem;
              padding: 1.375rem 1rem;

              .title {
                font-size: 1.1875em;
              }

              .date {
                font-size: 0.9375em;
                margin-top: 1.25rem;
              }

              .time {
                font-size: 0.9375em;
                margin-top: 0.375rem;
              }
            }
          }
        }

        .employee {
          margin-top: 3rem;

          .top {

            .txt {
              font-size: 1.25em;
            }

            .see {
              font-size: 0.9375em;
            }
          }

          .table {
            margin-top: 1.5rem;

            table {

              th, td {
                padding: 0.875rem 1rem;
                font-size: 0.9375em;
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
          font-size: 1.25em;

          .text {
            margin-left: 0.875rem;
          }
        }

        .delete {
          font-size: 0.9375em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding: 2.5rem 1.5rem;

        .training {

          .top {

            .txt {
              font-size: 1.375em;
            }

            .see {
              font-size: 1em;
            }
          }

          .list {
            margin-top: 1.75rem;

            .train {
              margin-bottom: 1rem;
              padding: 1.5rem 1.25rem;

              .title {
                font-size: 1.3125em;
              }

              .date {
                font-size: 1.0625em;
                margin-top: 1.5rem;
              }

              .time {
                font-size: 1.0625em;
                margin-top: 0.5rem;
              }
            }
          }
        }

        .employee {
          margin-top: 3.5rem;

          .top {

            .txt {
              font-size: 1.375em;
            }

            .see {
              font-size: 1em;
            }
          }

          .table {
            margin-top: 1.75rem;

            table {

              th, td {
                padding: 1rem 1.125rem;
                font-size: 1.0625em;
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
      animationLoaderDisplay: false,
      apiReady: false,
      training: [],
      employee: [],
    };
  },

  computed: {
    ...mapGetters('adminBatch', [
      'batchBy',
    ]),

    filteredTraining() {
      return this.training.slice(0, 2);
    },

    filteredEmployee() {
      return this.employee.slice(0, 5);
    },
  },

  methods: {
    ...mapActions('adminBatch', [
      'getBatchBy',
      'deleteBatch',
    ]),

    confirmDialog() {
      this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Semua atribut yang berhubungan akan ikut terhapus',
      ).then((res) => {
        if (res.value) {
          this.delete();
        }
      });
    },

    async delete() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.deleteBatch({
          params: {
            batch: this.paramBatch,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.$func.popupSuccessfull('Sukses hapus data', 5000, { name: 'AdminBatch' });
      } else {
        this.$func.popupLostConnection();
      }
    },

    async getDetailByBatch() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getBatchBy({
          params: {
            batch: this.paramBatch,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.apiReady = true;

        // assignment split response data
        this.training = this.batchBy.data.training;
        this.employee = this.batchBy.data.employee;
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramBatch = this.$route.params.batch;

    // req api
    this.getDetailByBatch();
  },

};

</script>
