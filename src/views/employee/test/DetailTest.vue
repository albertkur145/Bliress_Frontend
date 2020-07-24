<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link to="/test" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>
      <div class="text">Training {{ paramTraining }}</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- list test of material -->
      <div class="materials">
        <!-- test -->
        <div class="test" v-for="(value) in this.materialList.data.materialList" :key="value.id">
          <div class="material">{{ value.material }}</div>
          <div class="txt date-available">Tersedia pada {{ value.dateAvailable }}</div>
          <div class="txt date-closed">Ditutup pada {{ value.dateClosed }}</div>
          <div class="txt time">Batas waktu: {{ value.timeLimit }} menit</div>
          <div v-if="value.status !== '0'" class="score">Nilai: {{ value.score }}</div>
          <button v-else class="btn-start" @click="redirectToQuestion(value.id)">Start !</button>
        </div>
        <!-- test -->
      </div>
      <!-- list test of material -->

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
    }

    .content {
      margin-top: 2.875rem;
      padding: 0.5rem 0.375rem;

      .materials {
        max-width: 100%;

        .test {
          text-align: center;
          box-sizing: border-box;
          background-color: #FFF;
          text-decoration: none;
          width: 100%;
          border-radius: 0.5rem;
          margin-bottom: 0.375rem;
          padding: 1rem 0.75rem;

          .material {
            font-weight: 500;
            color: #0587FF;
            font-size: 1.0625em;
            margin-bottom: 0.75rem;
          }

          .txt {
            color: #555;
            margin-top: 0.5rem;
            font-size: 0.75em;
          }

          .score {
            color: #1DB07B;
            font-weight: 500;
            margin-top: 1.25rem;
            font-size: 0.875em;
          }

          .btn-start {
            border: 0.0625rem solid #888;
            background-color: #FFF;
            color: #777;
            cursor: pointer;
            font-weight: 600;
            outline: none;
            border-radius: 0.1875rem;
            margin-top: 1.25rem;
            padding: 0.5rem 0.875rem;
            font-size: 0.75em;

            &:hover {
              border: 0.0625rem solid #777;
              color: #666;
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
      }

      .content {
        margin-top: 3.3125rem;
        padding: 0.75rem 0.5rem;

        .materials {

          .test {
            margin-bottom: 0.5rem;
            padding: 1.25rem 1rem;

            .material {
              font-size: 1.125em;
              margin-bottom: 1rem;
            }

            .txt {
              margin-top: 0.625rem;
              font-size: 0.8125em;
            }

            .score {
              margin-top: 1.5rem;
              font-size: 0.9375em;
            }

            .btn-start {
              margin-top: 1.5rem;
              padding: 0.625rem 1rem;
              font-size: 0.8125em;
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
      }

      .content {
        margin-top: 3.75rem;
        padding: 1rem 0.75rem;

        .materials {

          .test {
            margin-bottom: 0.75rem;
            padding: 1.375rem 1.125rem;

            .material {
              font-size: 1.25em;
              margin-bottom: 1.125rem;
            }

            .txt {
              margin-top: 0.6875rem;
              font-size: 0.875em;
            }

            .score {
              margin-top: 1.625rem;
              font-size: 1em;
            }

            .btn-start {
              margin-top: 1.625rem;
              padding: 0.75rem 1.125rem;
              font-size: 0.875em;
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
      apiReady: '',
      paramTraining: '',
      promise: null,
    };
  },

  computed: {
    ...mapGetters('employeeTest', [
      'materialList',
    ]),
  },

  methods: {
    ...mapActions('employeeTest', [
      'getMaterials',
    ]),

    async getAllMaterials() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      this.promise = await this.promiseAPI();

      // hide loader
      this.animationLoaderDisplay = false;
      this.dataReady();
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.getMaterials({
          params: {
            employeeId: this.$cookies.get('user').userId,
            training: this.paramTraining,
          },
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    dataReady() {
      if (this.promise === 200) {
        this.apiReady = true;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    async redirectToQuestion(id) {
      const res = await this.$func.popupConfirmDialog(
        'Sudah siap?',
        'Test hanya dapat dikerjakan 1x',
      );

      if (res.value) {
        localStorage.setItem('timeLimit', new Date().getTime());
        this.$router.push({
          name: 'Question',
          params: {
            training: this.paramTraining,
            material: id,
          },
        });
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_EMPLOYEE');

    // get params
    this.paramTraining = this.$route.params.training;

    // req api
    this.getAllMaterials();
  },

};

</script>
