<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link to="/training" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Training {{ this.training.training }}</div>

      <router-link :to="`/training/${paramTraining}/attendance`" class="qr-code-reader">
        <font-awesome-icon icon="qrcode"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <!-- rincian -->
      <div class="rincian">
        <p class="txt">Rincian</p>

        <div class="detail">
          <p class="date">Dilaksanakan tanggal {{ this.training.date }}</p>
          <p class="location">{{ this.training.location }}</p>
          <p class="start">Dimulai pada pkl {{ this.training.timeStart }} - {{ this.training.timeFinish }} WIB</p>
        </div>

        <p class="trainer">Trainer: {{ this.training.trainer }}</p>

        <div class="materials" v-for="(value) in this.training.materials" :key="value.id">
          <p class="material-link"><a :href="value.link" target="_blank">{{ value.name }}</a></p>
        </div>
      </div>
      <!-- rincian -->

      <!-- participants -->
      <div class="participants">
        <div class="top">
          <div class="title">Peserta</div>
          <div class="count">{{ employees.total }} orang</div>
        </div>

        <div class="data">
          <table>
            <thead>
              <th>No</th>
              <th>Nama</th>
              <th>Divisi</th>
            </thead>

            <tbody>
              <tr v-for="(value, index) in employees.employee" :key="value.id">
                <td>{{ index + 1 }}</td>
                <td>{{ value.name }}</td>
                <td>{{ value.division }}</td>
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
      max-width: 100%;

      p {
        margin: 0;
      }

      .rincian {
        background-color: #FFF;
        text-align: center;
        padding: 1.75rem 1rem;
        margin-top: 1.9375rem;

        .txt {
          font-weight: 500;
          color: #666;
          font-size: 1.0625em;
        }

        .detail {
          color: #666;
          margin-top: 1.25rem;
          font-size: 0.875em;

          .location {
            margin-top: 0.4375rem;
          }

          .start {
            margin-top: 0.4375rem;
          }
        }

        .trainer {
          color: #444;
          font-size: 0.9375em;
          margin-top: 1.25rem;
        }

        .materials {
          margin-top: 1.5rem;

          .material-link {
            font-size: 0.8125em;
            margin-bottom: -0.5rem;

            a {
              margin: 0;
              color: #3742FA;
              border-bottom: 0.0625rem solid #3742FA;
              text-decoration: none;
              padding-bottom: 0.125rem;
            }
          }
        }
      }

      .participants {
        background-color: #FFF;
        padding: 1.125rem 1rem 1.875rem;
        margin-top: 0.5rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-weight: 500;
            color: #333;
            font-size: 1.0625em;
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
              padding: 0.75rem 0.875rem;
              font-size: 0.875em;
            }

            td:nth-child(1),
            th:nth-child(1) {
              text-align: center;
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

        .rincian {
          padding: 2rem 1.125rem;
          margin-top: 2.25rem;

          .txt {
            font-size: 1.125em;
          }

          .detail {
            margin-top: 1.5rem;
            font-size: 0.9375em;

            .location {
              margin-top: 0.375rem;
            }

            .start {
              margin-top: 0.375rem;
            }
          }

          .trainer {
            font-size: 1em;
            margin-top: 1.25rem;
          }

          .materials {

            .material-link {
              font-size: 0.875em;
            }
          }
        }

        .participants {
          padding: 1.25rem 1.125rem 2rem;

          .top {

            .title {
              font-size: 1.125em;
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

        .rincian {
          padding: 2.25rem 1.25rem;
          margin-top: 3rem;

          .txt {
            font-size: 1.3125em;
          }

          .detail {
            margin-top: 1.625rem;
            font-size: 1.0625em;

            .location {
              margin-top: 0.5rem;
            }

            .start {
              margin-top: 0.5rem;
            }
          }

          .trainer {
            font-size: 1.125em;
            margin-top: 1.75rem;
          }

          .materials {

            .material-link {
              font-size: 0.9375em;
            }
          }
        }

        .participants {
          padding: 1.4375rem 1.375rem 2.5rem;

          .top {

            .title {
              font-size: 1.25em;
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
      paramTraining: '',
      training: {},
      employees: {},
    };
  },

  computed: {
    ...mapGetters('employeeTraining', {
      response: 'trainingBy',
    }),
  },

  methods: {
    ...mapActions('employeeTraining', [
      'getTrainingBy',
    ]),

    async getTrainingByID() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api on vuex
      const promise = await new Promise((resolve) => {
        this.getTrainingBy({
          params: {
            employeeId: this.$cookies.get('user').id,
            training: this.paramTraining,
          },
          resolve,
        });
      });

      // req api finish then change status
      this.animationLoaderDisplay = false;

      // show popup message if code response != 200
      if (promise === 200) {
        this.apiReady = true;

        // asignment split response data
        this.training = this.response.data.training;
        this.employees = this.response.data.employees;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Employee');

    // get params
    this.paramTraining = this.$route.params.training;

    // req api
    this.getTrainingByID();
  },

};

</script>
