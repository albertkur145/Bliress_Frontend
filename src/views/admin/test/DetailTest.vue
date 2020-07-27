<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link class="back" :to="{ name: 'AdminTest' }">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Test</span>
      </router-link>
      <div class="txt-batch">{{ paramBatch }}</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- top -->
      <div class="top">
        <div class="txt-list">List Materi</div>
        <div class="training">Training {{ paramTraining }}</div>
      </div>
      <!-- top -->

      <!-- list of material -->
      <div class="materials" v-if="material.length > 0">
        <div class="material" v-for="(value) in material" :key="value.materialId">
          <div class="information">
            <div class="left">
              <p class="material-name">{{ value.materialName }}</p>
              <p class="available-date"><span>(Dibuka)</span> {{ value.testAvailable }}</p>
              <p class="expired-date"><span>(Ditutup)</span> {{ value.testClosed }}</p>
              <p class="time-limit">Batas: {{ value.testTimeLimit }} <span v-if="value.testExist">menit</span></p>
            </div>

            <div class="right">
              <div>
                <font-awesome-icon icon="pen" class="edit-icon"
                @click="redirectToAddTest(value.materialId, value.textExist, value.materialName)"></font-awesome-icon>
                <font-awesome-icon icon="eye" class="see-icon" v-if="value.testExist"
                @click="redirectReviewTest(value.materialId, value.materialName)"></font-awesome-icon>
              </div>
            </div>
          </div>

          <hr>
        </div>
      </div>
      <!-- list of material -->

      <div v-else style="padding: 1rem">
        <div class="empty-data">Belum ada materi <font-awesome-icon class="warning-icon" icon="exclamation"></font-awesome-icon></div>
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
        cursor: pointer;
        text-decoration: none;
        color: #FFF;
        font-size: 1.0625em;

        .text {
          margin-left: 0.75rem;
        }
      }

      .txt-batch {
        font-weight: 400;
        color: #FFF;
        font-size: 0.875em;
      }
    }

    .content {
      margin-top: 3rem;

      .top {
        text-align: center;
        background-color: #FFF;
        padding: 1.5rem 0.75rem;

        .txt-list {
          color: rgba(44, 62, 80, 1);
          font-weight: 500;
          font-size: 1.125em;
        }

        .training {
          color: #666;
          margin-top: 0.5875rem;
          font-size: 0.9375em;
        }
      }

      .materials {
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 1rem;

        .material {

          .information {
            display: flex;

            .left {
              min-width: 85%;
              max-width: 85%;

              p {
                margin: 0;
              }

              .material-name {
                font-weight: 500;
                color: #2C2C54;
                font-size: 1em;
              }

              .available-date {
                color: #333;
                margin-top: 1rem;
                font-size: 0.875em;

                span {
                  font-weight: 500;
                  color: #10AC84;
                }
              }

              .expired-date {
                color: #333;
                margin-top: 0.5rem;
                font-size: 0.875em;

                span {
                  font-weight: 500;
                  color: #C0392B;
                }
              }

              .time-limit {
                color: #333;
                margin-top: 1.25rem;
                font-size: 0.8125em;
              }
            }
          }

          .right {
            min-width: 15%;
            max-width: 15%;

            div {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .edit-icon {
              color: #27AE60;
              cursor: pointer;
              font-size: 0.875em;
            }

            .see-icon {
              color: #2980B9;
              cursor: pointer;
              margin-left: 0.3125rem;
              font-size: 1.0625em;
            }
          }

          hr {
            border: 0.0625rem solid rgba(19, 15, 64, 0.3);
            border-radius: 5rem;
            margin: 1rem 0;
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

        .back {
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .txt-batch {
          font-size: 0.9375em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .top {
          padding: 1.75rem 1rem;

          .txt-list {
            font-size: 1.1875em;
          }

          .training {
            margin-top: 0.75rem;
            font-size: 1em;
          }
        }

        .materials {
          padding: 1.25rem;

          .material {

            .information {

              .left {

                .material-name {
                  font-size: 1.0625em;
                }

                .available-date {
                  font-size: 0.9375em;
                }

                .expired-date {
                  font-size: 0.9375em;
                }

                .time-limit {
                  font-size: 0.875em;
                }
              }
            }

            .right {

              .edit-icon {
                font-size: 1em;
              }

              .see-icon {
                font-size: 1.25em;
              }
            }

            hr {
              margin: 1.25rem 0;
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

        .back {
          font-size: 1.25em;

          .text {
            margin-left: 0.875rem;
          }
        }

        .txt-batch {
          font-size: 1em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .top {
          padding: 2rem 1.25rem;

          .txt-list {
            font-size: 1.25em;
          }

          .training {
            margin-top: 0.75rem;
            font-size: 1.0625em;
          }
        }

        .materials {
          padding: 1.5rem;

          .material {

            .information {

              .left {

                .material-name {
                  font-size: 1.125em;
                }

                .available-date {
                  font-size: 1em;
                }

                .expired-date {
                  font-size: 1em;
                }

                .time-limit {
                  font-size: 0.9375em;
                }
              }
            }

            .right {

              .edit-icon {
                font-size: 1.0625em;
              }

              .see-icon {
                font-size: 1.3125em;
              }
            }

            hr {
              margin: 1.5rem 0;
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
      apiReady: false,
      animationLoaderDisplay: false,
      material: [],
    };
  },

  computed: {
    ...mapGetters('adminTest', [
      'materialTestList',
    ]),
  },

  methods: {
    ...mapActions('adminTest', [
      'getMaterialsTest',
    ]),

    async getAllMaterialTest() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseAPI();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.getMaterialsTest({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
          },
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
        this.material = this.materialTestList.data.materialList;
      } else {
        this.$func.popupLostConnection();
      }
    },

    redirectToAddTest(id, exist, name) {
      localStorage.setItem('materialName', name);
      if (!exist) {
        this.$router.push({
          name: 'AdminAddTest',
          params: {
            batch: this.paramBatch,
            training: this.paramTraining,
            material: id,
          },
        });
      } else {
        this.$router.push({
          name: 'AdminChangeTest',
          params: {
            batch: this.paramBatch,
            training: this.paramTraining,
            material: id,
          },
        });
      }
    },

    redirectReviewTest(id, name) {
      localStorage.setItem('materialName', name);
      this.$router.push({
        name: 'AdminReviewTest',
        params: {
          batch: this.paramBatch,
          training: this.paramTraining,
          material: id,
        },
      });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // get params
    this.paramBatch = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;

    // req api
    this.getAllMaterialTest();
  },

};

</script>
