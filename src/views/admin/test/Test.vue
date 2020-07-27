<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- batch -->
      <div class="batch-list" v-if="batchs.length > 0">
        <div class="batch"
        v-for="(value) in batchs"
        :key="value.batchId">
          <div class="general" @click="getAllTraining(value.batchId)">
            <div class="txt">{{ value.batchName }}</div>
            <font-awesome-icon icon="forward" class="chev-icon"></font-awesome-icon>
          </div>
        </div>
      </div>
      <!-- batch -->

      <div v-else style="padding: 1rem">
        <div class="empty-data">Belum ada batch <font-awesome-icon class="warning-icon" icon="exclamation"></font-awesome-icon></div>
      </div>
    </div>
    <!-- end content -->

    <MenuBar></MenuBar>
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
      text-align: center;
      z-index: 1;
      padding: 0.875rem 1rem;

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .batch-list {
        padding: 0.5875rem 0.5rem 3.25rem;

        .batch {
          margin-bottom: 0.5rem;

          .general {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FFF;
            cursor: pointer;
            color: #333;
            box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
            border-radius: 0.375rem;
            padding: 1rem;

            .txt {
              font-weight: 500;
              font-size: 0.9375em;
            }

            .chev-icon {
              font-size: 0.8125em;
            }

            .chev-icon-rotate {
              transform: rotate(180deg);
            }
          }

          .general-active {
            background-color: #33D9B2;
            border-radius: 0.375rem 0.375rem 0 0;
            color: #FFF;
            box-shadow: none;
          }

          .detail {
            display: none;
            background-color: #FFF;
            transition: height .5s ease-in-out;

            .training {
              cursor: pointer;
              border-bottom: 0.0625rem solid #DDD;
              padding: 0.8125rem 1rem;

              .txt {
                color: #333;
                font-size: 0.8125em;
              }
            }
          }

          .display-block {
            display: block;
          }
        }
      }

      .empty-data {
        border: 0.0625rem dashed #EA2027;
        color: #EA2027;
        border-radius: 0.25rem;
        text-align: center;
        padding: 0.875rem;
        font-size: 0.875em;

        .warning-icon {
          margin-left: 0.25rem;
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

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .batch-list {

          .batch {

            .general {
              padding: 1.25rem;

              .txt {
                font-size: 1em;
              }

              .chev-icon {
                font-size: 0.875em;
              }
            }

            .detail {

              .training {
                padding: 0.875rem 1.25rem;

                .txt {
                  font-size: 0.875em;
                }
              }
            }
          }
        }

        .empty-data {
          padding: 0.9375rem;
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

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .batch-list {
          padding: 1.25rem 0.5rem 3.25rem;

          .batch {
            margin-bottom: 1rem;

            .general {
              padding: 1.375rem;

              .txt {
                font-size: 1.0625em;
              }

              .chev-icon {
                font-size: 0.9375em;
              }
            }

            .detail {

              .training {
                padding: 1rem 1.375rem;

                .txt {
                  font-size: 0.9375em;
                }
              }
            }
          }
        }

        .empty-data {
          padding: 1rem;
          font-size: 1em;
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/admin/MenuBar.vue';
import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    MenuBar,
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      apiReady: false,
      batchs: [],
    };
  },

  computed: {
    ...mapGetters('adminBatch', [
      'batchList',
    ]),

    ...mapGetters('adminTraining', [
      'trainingList',
    ]),
  },

  methods: {
    ...mapActions('adminBatch', [
      'getBatch',
    ]),

    ...mapActions('adminTraining', [
      'getTrainings',
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
        this.batchs = this.batchList.data.batchList;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async getAllTraining(batchId) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllTraining(batchId);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterGetTraining(promise, batchId);
    },

    promiseGetAllTraining(batchId) {
      return new Promise((resolve) => {
        this.getTrainings({
          resolve,
          params: {
            batchId,
          },
          token: this.$cookies.get('token'),
        });
      });
    },

    afterGetTraining(promise, batchId) {
      if (promise === 200) {
        this.popupTraining(batchId);
      } else {
        this.$func.popupLostConnection();
      }
    },

    async popupTraining(batchId) {
      const training = this.getTrainingStage();

      const res = await this.$swal.fire({
        title: 'Test',
        input: 'select',
        inputOptions: training,
        inputPlaceholder: 'Pilih training',
      });

      if (res.value) {
        this.redirectToDetail(batchId, res.value);
      }
    },

    getTrainingStage() {
      const training = {};

      this.trainingList.data.trainingList.forEach((val) => {
        training[val.stage] = val.stage;
      });

      return training;
    },

    redirectToDetail(batchId, training) {
      this.$router.push({
        name: 'AdminDetailTest',
        params: {
          batch: batchId,
          training,
        },
      });
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
