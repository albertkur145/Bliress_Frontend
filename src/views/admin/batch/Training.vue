<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminDetailBatch', params: { batch: paramBatch } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Training</span>
      </router-link>

      <router-link :to="{ name: 'AdminAddTraining', params: { batch: paramBatch } }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- title -->
      <div class="title">Batch {{ paramBatch }}</div>
      <!-- title -->

      <!-- list of training -->
      <div class="training-list">
        <div v-for="(value) in trainingList.data.training" :key="value.id">
          <div class="training">
            <div class="num">
              <span class="txt">{{ value.training }}</span>
            </div>

            <div class="info">
              <p class="date">{{ value.date }}</p>
              <p class="time">{{ value.timeStart }} - {{ value.timeFinish }} WIB</p>
              <p class="trainer">Trainer: {{ value.trainer }}</p>
              <p class="location">{{ value.location }}</p>
              <div class="btn-material" @click="redirectMaterial(`${value.training}`)">
                <span>Material</span>
                <font-awesome-icon icon="chevron-right" class="material-icon"></font-awesome-icon>
              </div>
              <button class="btn-attendance" @click="redirectAttendance(`${value.training}`)">Absensi</button>
            </div>

            <div class="action">
              <div>
                <font-awesome-icon icon="pen" class="edit-icon" @click="redirectChangeTraining(`${value.training}`)"></font-awesome-icon>
                <font-awesome-icon icon="times" class="remove-icon" @click="confirmDelete(`${value.training}`)"></font-awesome-icon>
              </div>
            </div>
          </div>

          <div class="line"><hr></div>
        </div>
      </div>
      <!-- list of training -->

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
        color: #FFF;
        text-decoration: none;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;

      .title {
        color: #0984E3;
        text-align: center;
        font-weight: 500;
        background-color: #FFF;
        padding: 1.5rem 1rem;
        font-size: 1.0625em;
      }

      .training-list {
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 0.5rem 0 1.5rem;

        .training {
          display: flex;
          max-width: 100%;
          padding: 1rem;

          .num {
            min-width: 18%;
            max-width: 18%;

            .txt {
              max-width: 100%;
              border-radius: 10rem;
              font-weight: 600;
              box-sizing: border-box;
              display: inline-block;
              text-align: center;
              color: #FFF;
              background-image: radial-gradient(circle, #1dabe9, #25b6ee, #31c0f2, #3fcbf6, #4ed5f9, #4addf8, #4ce5f6, #54edf3, #59f3e7, #6af8d7, #82fcc5, #9dffb2);
              padding: 0.625rem 0.9375rem;
              font-size: 1.0625em;
            }
          }

          .info {
            min-width: 70%;
            max-width: 70%;
            box-sizing: border-box;
            padding: 0 0.75rem;

            p {
              margin: 0;
            }

            .date {
              color: #444;
              font-weight: 500;
              font-size: 0.9375em;
            }

            .time {
              color: #666;
              margin-top: 0.4375rem;
              font-size: 0.875em;
            }

            .trainer {
              color: #666;
              margin-top: 0.4375rem;
              font-size: 0.875em;
            }

            .location {
              color: #666;
              margin-top: 1.5rem;
              font-size: 0.8125em;
            }

            .btn-material {
              display: flex;
              justify-content: space-between;
              align-items: center;
              min-width: 100%;
              max-width: 100%;
              cursor: pointer;
              border-top: 0.0625rem solid #DEE5FF;
              border-bottom: 0.0625rem solid #DEE5FF;
              color: #273C75;
              transition: border .2s ease-out;
              padding: 0.75rem;
              margin-top: 0.8125rem;

              span {
                font-weight: 500;
                font-size: 0.8125em;
              }

              .material-icon {
                font-size: 0.6875em;
              }

              &:hover {
                border-top: 0.0625rem solid #BAC9FF;
                border-bottom: 0.0625rem solid #BAC9FF;
              }
            }

            .btn-attendance {
              font-family: 'Roboto';
              min-width: 100%;
              max-width: 100%;
              background-color: rgba(112, 111, 211, 0.95);
              color: #FFF;
              cursor: pointer;
              outline: none;
              border: 0;
              border-radius: 50rem;
              transition: background-color .2s ease-out;
              margin-top: 1.5rem;
              padding: 0.625rem;
              font-size: 0.8125em;

              &:hover {
                background-color: rgba(112, 111, 211, 1);
              }
            }
          }

          .action {
            min-width: 12%;
            max-width: 12%;
            text-align: right;

            div {
              display: flex;
              align-items: center;

              .edit-icon {
                cursor: pointer;
                color: #1DD1A1;
                font-size: 0.8125em;
              }

              .remove-icon {
                cursor: pointer;
                color: #FF6B6B;
                font-size: 1.0625em;
                margin-left: 0.375rem;
              }
            }
          }
        }

        .line {
          padding: 0 1.25rem;

          hr {
            border: 0.0625rem solid #DDD;
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

        .icon-plus {
          font-size: 1.1875em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .title {
          padding: 1.75rem 1.25rem;
          font-size: 1.25em;
        }

        .training-list {

          .training {
            padding: 1.25rem;

            .num {

              .txt {
                padding: 0.75rem 1.125rem;
                font-size: 1.25em;
              }
            }

            .info {
              padding: 0 1rem;

              .date {
                font-size: 1.0625em;
              }

              .time {
                font-size: 1em;
              }

              .trainer {
                font-size: 1em;
              }

              .location {
                font-size: 0.9375em;
              }

              .btn-material {
                padding: 0.875rem;

                span {
                  font-size: 0.875em;
                }

                .material-icon {
                  font-size: 0.75em;
                }
              }

              .btn-attendance {
                padding: 0.6875rem;
                font-size: 0.875em;
              }
            }

            .action {

              div {

                .edit-icon {
                  font-size: 0.9375em;
                }

                .remove-icon {
                  font-size: 1.1875em;
                }
              }
            }
          }

          .line {
            padding: 0 1.25rem;
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

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .title {
          padding: 2rem 1.5rem;
          font-size: 1.375em;
        }

        .training-list {

          .training {
            padding: 1.5rem;

            .num {

              .txt {
                padding: 1.5rem 2rem;
                font-size: 1.5em;
              }
            }

            .info {
              padding: 0 1.5rem;

              .date {
                font-size: 1.1875em;
              }

              .time {
                font-size: 1.0625em;
              }

              .trainer {
                font-size: 1.0625em;
              }

              .location {
                font-size: 1em;
              }

              .btn-material {
                padding: 1rem;

                span {
                  font-size: 0.9375em;
                }

                .material-icon {
                  font-size: 0.8125em;
                }
              }

              .btn-attendance {
                padding: 0.75rem;
                font-size: 0.9375em;
              }
            }

            .action {

              div {

                .edit-icon {
                  font-size: 1em;
                }

                .remove-icon {
                  font-size: 1.25em;
                }
              }
            }
          }

          .line {
            padding: 0 1.5rem;
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
    };
  },

  computed: {
    ...mapGetters('adminTraining', [
      'trainingList',
    ]),
  },

  methods: {
    ...mapActions('adminTraining', [
      'getTrainings',
      'deleteTraining',
    ]),

    async getAllTraining() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getTrainings({
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
      } else {
        this.$func.popupLostConnection();
      }
    },

    confirmDelete(training) {
      this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Data yang dihapus tidak dapat kembali lagi',
      ).then((res) => {
        if (res.value) {
          this.deleteData(training);
        }
      });
    },

    async deleteData(training) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.deleteTraining({
          params: {
            batch: this.paramBatch,
            training,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil hapus data', 5000, null);
      } else {
        this.$func.popupLostConnection();
      }
    },

    redirectChangeTraining(training) {
      this.$router.push({
        name: 'AdminChangeTraining',
        params: {
          batch: this.paramBatch,
          training,
        },
      });
    },

    redirectAttendance(training) {
      this.$router.push({
        name: 'AdminAttendance',
        params: {
          batch: this.paramBatch,
          training,
        },
      });
    },

    redirectMaterial(training) {
      this.$router.push({
        name: 'AdminMaterialTraining',
        params: {
          batch: this.paramBatch,
          training,
        },
      });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramBatch = this.$route.params.batch;

    // req api
    this.getAllTraining();
  },

};

</script>
